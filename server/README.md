# Sandland REST API server

REST API server for Sandland.

[sandland-api.leino.io](sandland-api.leino.io)

## Stack

- [Express](https://expressjs.com/)
- [Joi](https://joi.dev/) for schema validation and detailed error messages.
- [Yarn](https://yarnpkg.com/) for package management.

## Run `prod` server locally

To run build and run the service locally in `prod` env, run the following command:

```sh
cd ..
docker compose build server && docker up server
```

## Requirements

- [Yarn](https://yarnpkg.com/)
- [Node 16 LTS](https://nodejs.org/en/download/releases/) or newer.

## Install

To install needed dependencies, run the following command:

```sh
yarn install
```

## Start

To start development server, run the following command:

```sh
yarn run dev
```

This will start the dev server on [localhost:5000](http://localhost:5000).

## Test

To run tests, run the following command:

```sh
yarn test
```

## Build

To build the service, run the following command:

```sh
yarn build
```

## Deploy

Application is deployed to AWS Fargate and is accessible at [sandland-api.leino.io](sandland-api.leino.io).

To deploy the service, run the following command:

```sh
cd ..
cd infra
cdk synth # Optional
cdk diff # Optional
cdk deploy
```

For more detailed instruction see `/infra/README.md`.
