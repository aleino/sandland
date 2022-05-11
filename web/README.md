
# Sandland web application

React based public web application for Sandland.

Live demo available at: [sandland.leino.io](sandland.leino.io)

## Stack

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/). Modular and easy-to-use UI framework. No CSS needed.
- [EasyPeasy](https://easy-peasy.vercel.app/) for state management. Uses Redux under the hood.
- [Mapbox GL JS](https://www.mapbox.com/) for WebGL based maps.
- [React Create App](https://create-react-app.dev/) for the boilerplate.
- [Yarn](https://yarnpkg.com/) for package management.

## Requirements

- **Mapbox access token**. Create a free  [Mapbox](https://www.mapbox.com) account. You can find the access token on your profile page.

Set the access token as an env variable:

```sh
export REACT_APP_MAPBOX_ACCESS_TOKEN=<your access token>
```

## Run `prod` server locally

To run build and run the service locally in `prod` env, run the following command:

```sh
cd ..
docker compose build web && docker up web
```

## Install

To install needed dependencies, run the following command:

```sh
yarn install
```

## Run

To run the service, run the following command:

```sh
yarn start
```

This will start the development server on [localhost:3000](https://localhost:3000) and open the browser.

Hot reloading is enabled so you can edit the code and see the changes immediately. You only need to restart the server when you make changes to `package.json`.

## Build

To build the application, run the following command:

```sh
yarn build
```

This will build the application in `./build/`.

You can serve the application files with your favorite HTTP server (for example [http-server](https://www.npmjs.com/package/http-server)).

## Deploy

Pushes to GitHub `dev` branch are automatically deployed to [sandland.leino.io](https://sandland.leino.io) (alias for [aleino-sandland-dev.netlify.app/](https://aleino-sandland-dev.netlify.app/)) via [Netlify](https://www.netlify.com/).

There are no infrastructure or deployment configurations in source control but you can manage deployments via Netlify console.

## DNS

`CNAME` record for the domain `sandland.leino.io` is configured  in the `/infra` directory.

## SLL Cert

Netlify creates and automatically renews a valid SSL certificate for the domain `sandland.leino.io` with *LetsEncrypt*.
