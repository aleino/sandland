# Sandland

Sandland is a service that allows users to upload and view measurements on a global map.

![Sandland live demo](/cover.png)

Live demo: [sandland.leino.io](https://sandland.leino.io)

Source code: [github.com/aleino/sandland](https://github.com/aleino/sandland)

## Features

- Temperature selector (Celsius, Fahrenheit).
- Upload your own measurements.

With the upload button you can upload your own measurements by using the following JSON schema:

```json
[
    {
      "city": string, // required
      "lat": number | null, // required
      "lon": number | null, // required
      "temperature": number | null // required
    },
    ...
]
```

For example:

```json
[
    {
      "city": "Helsinki",
      "lat": 60.1698,
      "lon": 24.9384,
      "temperature": 3
    },
    {
      "city": "Tampere",
      "lat": 61.4981,
      "lon": 23.7454,
      "temperature": 16
    }
]    
```

## Requirements

- [Docker compose V2](https://docs.docker.com/compose/)
- Mapbox access token. Create a free  [Mapbox](https://www.mapbox.com) account. You can find the access token on your profile page.

Set the access token as an env variable:

```sh
export REACT_APP_MAPBOX_ACCESS_TOKEN=<your access token>
```

## Start the service

To start the service, run the following command:

```sh
docker compose build && docker-compose up
```

This will start the API server on [localhost:5000](http://localhost:5000) and the frontend server on [localhost:3000](http://localhost:3000).

## Application Structure

| Directory | Description |
|---|---|
|`server` | Contains an Express REST API server. |
|`web`| Contains the frontend React app.|
| `lib/shared` | Contains shared code for backend and frontend. |
| `infra` | Contains AWS CloudFormation configuration for the server and DNS configuration for the application. |

## Contribute

### Git branches

Use `main`, `dev`, `feat/<my-awesome-feature>`, `fix/<my-fix>`, and `hot/<my-hotfix>` branches.

## Etymology

**Sandland** ([Northern Sami](https://www.wikiwand.com/en/Northern_Sami_language): *Sáttomohgáddi*) is a village in [Loppa Municipality](https://www.wikiwand.com/en/Loppa_Municipality)  in [Troms og Finnmark](https://www.wikiwand.com/en/Troms_og_Finnmark) county with very harsh weather conditions.
