## Introduction

Statement by creators of React at Facebook 

*React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.*

React updates the view (render) when underlying data changes

A view exists for every 'state' of the app

'Declarative' views

'Encapsulated components' which manage their own state

Render using

	Javascript

	JSX which uses XML to store data

## Goals

- Performance
- Most important renders are done first
- Tooling - Chrome extension now with profilter to optimise

## Issues

- Wrapper Hell
- Giant Components
- Function vs Class
 
## 2023 setup

https://reactjs.org/tutorial/tutorial.html

```js
choco install yarn
yarn global add create-react-app

// or
npm install -g create-react-app
create-react-app my-app
// or
npx create-react-app my-app
cd my-app
npm start
```

## NPM Node Package Manager

NPM install scripts located in `package.json`

```json
{
    "name": "Your app",
    "version":  "1.0.0",
    "scripts":  {
        "your-package":  "your-package-name"
     }
}
```

NPM links are created at `node_modules/.bin` and globally at `%AppData%/npm`

## NPX Node Package Execute

NPX was created in 2010 to manage packages

NPX comes with NPM



## Starter Code

Strip back all of the React boilerplate code and just get your bare minimum

```jsx
create-react-app myapp; cd myapp;yarn start
// remove all extra css and tests and leave 
// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
// App.js
function App() {
  return (
    <div>
    </div>
  );
}
export default App;
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## setup 2024

create react app has been deprecated in favour of other more sophisticated ways of setting up a react app

next js is a favourite now, one of several, so we can use this to scaffold a new app

according to react's own documentation 

https://react.dev/learn/start-a-new-react-project

`we recommend picking one of the react-powered frameworks popular in the community` ... and `next js` is the first one on the list!

## installing next js app 2024

this was the 2023 version

```js
npx create-react-app my-app
pnpm dlx create-react-app my-app
```

## installing next js using pnpm

pnpm saves us space by only having one reference to any given library

### install pnpm

```js
npm install -g pnpm
pnpm --version
```

### create next js app using pnpm

```js
pnpm create next-app my-app
pnpm create next-app my-typescript-app --template typescript
```

so we run

```js
pnpm create next-app event-01
cd event-01
pnpm run dev
```

