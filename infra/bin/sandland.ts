#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SandlandStack } from "../lib/sandland-server";

export type Stage = "prod" | "staging" | "dev" | "test";

const stage: Stage = (process.env.SANDLAND_STAGE as Stage) || "dev";

const env = {
  account: process.env.SANDLAND_AWS_ACCOUNT,
  region: process.env.SANDLAND_AWS_REGION,
  stage,
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const stackName = `Sandland${capitalizeFirstLetter(stage)}`;

const app = new cdk.App();
new SandlandStack(app, stackName, stage, stackName, { env });
