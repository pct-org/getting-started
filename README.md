<h1 align="center">
  <img height="200" width="200" src="https://github.com/pct-org/getting-started/blob/master/.github/logo.png" alt="logo" />
  <br />
  Getting Started
</h1>

<div align="center">
  <a target="_blank" href="https://gitter.im/pct-org/app?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img src="https://badges.gitter.im/popcorn-time-desktop.svg" alt="Gitter" />
  </a>
</div>

---
## Getting started

This repo is meant to get a easier experience setting up this environment.

## Installation

### Installation scripts

There is a installation scripts available to help install everything you need to run on a certain environment, scripts that are available:
1. [raspberry-pi](./install-scripts/raspberry-pi.sh)

To run these scripts do `curl -o- -L https://raw.githubusercontent.com/pct-org/getting-started/master/install-scripts/{script name}.sh | bash`, where {script name} is one of the names from the list above. For example: `curl -o- -L https://raw.githubusercontent.com/pct-org/getting-started/master/install-scripts/raspberry-pi.sh.sh | bash`

### Manual installation

**Requirements**
- Make sure MongoDB is running, for Mac users there is a docker-compose file.
- Copy the `ecosystem.config.example.js` to `ecosystem.config.js` file and fill it in.

```shell script
# Clone this repository
$ git clone --recurse-submodules git@github.com:pct-org/getting-started.git

# Install dependencies
$ yarn install

# Run the setup command
$ yarn setup
```

## Starting the project

```shell script
# To start the API's (Scraper will immediately start scraping)
$ yarn start

# To stop the API's
$ yarn stop

# To delete the PM2 apps
$ yarn delete
```

## Projects

Popcorn Time consists of several projects, each doing it's own part.

| Project                      | Description |
| ---------------------------- | -------------------------------------------------------- |
| [`@pct-org/graphql-api`]     | Serves the data to the clients from the MongoDB database |
| [`@pct-org/getting-started`] | Explains how to get started with this setup              |
| [`@pct-org/mongo-models`]    | Models used for MongoDB and GraphQL object types         |
| [`@pct-org/native-app`]      | React Native App                                         |
| [`@pct-org/scraper`]         | Scrapes everything and saves it to MongoDB database      |

## Contributing:

Please see the [contributing guide].

## Issues

File a bug against [pct-org/getting-started prefixed with \[getting-started\]](https://github.com/pct-org/getting-started/issues/new?title=[getting-started]%20).

## [License](./LICENSE)

This project is [MIT licensed](./LICENSE).

[contributing guide]: ./CONTRIBUTING.md
[`@pct-org/graphql-api`]: https://github.com/pct-org/graphql-api
[`@pct-org/getting-started`]: https://github.com/pct-org/getting-started
[`@pct-org/mongo-models`]: https://github.com/pct-org/mongo-models
[`@pct-org/native-app`]: https://github.com/pct-org/native-app
[`@pct-org/scraper`]: https://github.com/pct-org/scraper
