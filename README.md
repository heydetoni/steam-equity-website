# STEAM Equity Website

[![Build Status](https://github.com/pizzafox/steam-equity-website/workflows/Node.js%20CI/badge.svg)](https://github.com/pizzafox/steam-equity-website/actions)
[![Netlify Status](https://api.netlify.com/api/v1/badges/020ffcb2-c56d-4c05-9809-686bc99cbec5/deploy-status)](https://app.netlify.com/sites/steam-equity/deploys)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pizzafox/steam-equity-website)

Simple website for STEAM Equity.

## Developing

All source code is in the `src` folder.

### Stack

The site is made using Gatsby, SCSS, HTML, and React.

### Installing dependencies

This project uses Yarn to manage dependencies.
However, PNPM and NPM will also work, they just won't read the lockfile.

```sh
# NPM
npm install -D

# Yarn
yarn -D

# PNPM
pnpm install -D --shamefully-flatten
```

### Running locally

The following command will start a development server at `127.0.0.1:8000`.

```sh
npm run develop
```

### Versioning

This project uses semantic versioning.
When you make a change, please update the `version` key in the `package.json` file.

### Linting

We use ESLint to lint JavaScript files and Prettier for everything.
Additionally, we have an EditorConfig file which your IDE may use to automatically format files on save.

#### ESLint

Use this command to show errors in JavaScript code:

```sh
npm run lint
```

Use this command to fix any errors that can be automatically resolved:

```sh
npm run lint:fix
```

#### Prettier

Use this command to show formatting errors in the project:

```sh
npm run prettier
```

Use this command to fix any formatting errors that can be automatically resolved:

```sh
npm run prettier:fix
```

## Deploying

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pizzafox/steam-equity-website)

The built files are a static site using just HTML, CSS, and JS.
You can build the project with the following command:

```sh
npm run build
```

This will bundle and minify files into the `public` directory.
