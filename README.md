# React, TypeScript, Electron Example

## Setup

- Run `npm install` / `yarn install`

## Run

## Trades API

(You will need to run the trades API as per trades readme)

## React App

- Run `npm run dev:react` / `yarn dev:react`

You can then access the application via `http://localhost:4000/`.

## Optional Run in Electron

If you wish to run the app in Electron

- Uncomment webpack.react.config Line 10:
   `// target: 'electron-renderer',`

- Run `npm run dev:react` / `yarn dev:react`

In a seperate command prompt:
- Run `npm run dev:electron` / `yarn dev:electron`

You can then access the application via the Electron app.
