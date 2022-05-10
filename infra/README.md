# Sandland infra

AWS CloudFormation templates and configurations for Sandland infra.

## Stack

- `Dockerfile` for the backend REST API service is defined in the project root in `Dockerfile.server`.
- Docker image is stored in [AWS ECR](https://aws.amazon.com/ecr/).
- Publicly accessible AWS Load Balanced Fargate Service.
- Used AWS regions: `eu-west-1`.

## Requirements

- Access to `sandland` AWS account.
- AWS Cloud Development Kit V2.

You can install [AWS Cloud Development Kit](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) V2 with NPM.

```sh
npm install -g aws-cdk-lib
```

## Develop

[AWS Cloud Development Kit documentation](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

[AWS CDK V2 API Reference](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)

Check that your code is valid CloudFormation:

```sh
cdk synth
```

Compare deployed stack with current state:

```sh
cdk diff
```

Deploy stack:

```sh
cdk deploy
```

Destroy stack:

```sh
cdk destroy
```

### Notes

- In AWS CDK V2 all needed libraries are defined in `aws-cdk-lib`. You don't need to install any other libraries from `@aws-cdk` as in V1.

## Useful commands

- `npm run build`   compile typescript to js
- `npm run watch`   watch for changes and compile
- `npm run test`    perform the jest unit tests
- `cdk deploy`      deploy this stack to your default AWS account/region
- `cdk diff`        compare deployed stack with current state
- `cdk synth`       emits the synthesized CloudFormation template
