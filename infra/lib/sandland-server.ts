import { IgnoreMode, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as route53_targets from "aws-cdk-lib/aws-route53-targets";
import * as certificate_manager from "aws-cdk-lib/aws-certificatemanager";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import * as path from "path";

import { Stage } from "../bin/sandland";

export class SandlandStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    stage: Stage,
    stackName: string,
    props?: StackProps
  ) {
    super(scope, id, props);

    const appPort = 5000;
    // Use project root dir
    const dockerfileDirectory = path.join(__dirname, "..", "..");
    const dockerfilePath = "./Dockerfile.server";

    const vpc = new ec2.Vpc(this, "Vpc", {
      // Elastic Load Balancer requires at least two subnets in two different AZs
      maxAzs: 2,
    });

    const taskDefinition = new ecs.FargateTaskDefinition(
      this,
      "TaskDefinition",
      {
        memoryLimitMiB: 1024,
        cpu: 512,
      }
    );

    const dockerFile = new DockerImageAsset(
      this,
      `${stackName}-DockerFileAsset`,
      {
        directory: dockerfileDirectory,
        file: dockerfilePath,
        ignoreMode: IgnoreMode.DOCKER,
        exclude: ["cdk.out"],
      }
    );

    // Image
    const image = ecs.ContainerImage.fromDockerImageAsset(dockerFile);

    const container = taskDefinition.addContainer(`${stackName}-Container`, {
      image,
      // CloudWatch logging
      logging: ecs.LogDriver.awsLogs({ streamPrefix: stackName }),
    });

    container.addPortMappings({
      containerPort: appPort,
    });

    const cluster = new ecs.Cluster(this, `${stackName}-ECSCluster`, {
      clusterName: `${stackName}-ECSCluster`,
      containerInsights: true,
      vpc,
    });

    // Security Groups
    const securityGroup = new ec2.SecurityGroup(
      this,
      `${stackName}-SecurityGroup`,
      {
        vpc: vpc,
        allowAllOutbound: true,
        description: `${stackName} Security Group`,
      }
    );
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(appPort));

    // SSL Certificate
    const hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName: "leino.io",
    });

    const certificate = new certificate_manager.Certificate(
      this,
      "Certificate",
      {
        domainName: "*.leino.io",
        validation:
          certificate_manager.CertificateValidation.fromDns(hostedZone),
      }
    );

    // Fargate
    const fargateService =
      new ecs_patterns.ApplicationLoadBalancedFargateService(
        this,
        `${stackName}-FargateService`,
        {
          cluster,
          publicLoadBalancer: true,
          cpu: 256,
          desiredCount: 1,
          memoryLimitMiB: 512,
          taskDefinition,
          securityGroups: [securityGroup],
          certificate,
        }
      );

    // Custom subdomains
    new route53.ARecord(this, "ARecord", {
      recordName: "sandland-api",
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new route53_targets.LoadBalancerTarget(fargateService.loadBalancer)
      ),
    });
  }
}
