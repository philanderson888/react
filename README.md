# React

## Contents

- [React](#react)
  - [Contents](#contents)
  - [Overview](#overview)
  - [Single File React HTML Pages](#single-file-react-html-pages)
  - [Standalone Projects](#standalone-projects)
  - [Resources](#resources)
  - [Terms](#terms)
  - [Introduction](#introduction)
  - [NPM Node Package Manager](#npm-node-package-manager)
  - [NPX Node Package Execute](#npx-node-package-execute)
  - [Starter Code](#starter-code)
  - [Component (think of as a class)](#component-think-of-as-a-class)
    - [CreateElement From Component (think of instantiating a class)](#createelement-from-component-think-of-instantiating-a-class)
    - [Render Method](#render-method)
    - [Rendering An Element In Raw HTML](#rendering-an-element-in-raw-html)
  - [Elements](#elements)
  - [Render Method](#render-method-1)
  - [React Clock](#react-clock)
  - [Components](#components)
  - [Display Component](#display-component)
  - [Multiple Components](#multiple-components)
  - [Component As A Separate File](#component-as-a-separate-file)
  - [Passing Data To Components](#passing-data-to-components)
  - [Component As A Class](#component-as-a-class)
  - [createElement](#createelement)
  - [React Router](#react-router)
  - [API](#api)
  - [API Google Calendar](#api-google-calendar)
  - [API Google Maps](#api-google-maps)
  - [JSX](#jsx)
  - [React Native](#react-native)

## Overview

This is a teaching repository for React created by Facebook.

The repo is sorted into [single file react projects](SingleHtmlFiles) which can be run as standalone files ie they have React imported as a CDN into a single HTML file.  

This repository is a combination of my own learning, also learning React from Udemy's web developer course of 2018, and also from Egghead which has a course on React.

Also I have a much more complex set of standalone projects built with the `create-react-app` [here](StandaloneProjects).

## Single File React HTML Pages

[Single File React HTML Pages](SingleHtmlFiles/README.md)

## Standalone Projects

[React Projects Built With `create-react-app`](StandaloneProjects/README.md)

[API Projects](StandaloneProjects/api/README.md)

## Resources

[reactforbeginners.com](https://reactforbeginners.com/)

[React Learning Path](https://medium.com/free-code-camp/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6)

[Build This Game On React Docs Tutorial](https://reactjs.org/tutorial/tutorial.html)

[FreeCodeCamp React Tutorial](https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/)

Free React Course https://scrimba.com/learn/learnreact

[Live Play Around With React And Learn Basics - All In Browser](https://jscomplete.com/playground)

Examples - https://www.jqwidgets.com

[Facebook React Tutorial] https://facebook.github.io/react/tutorial/tutorial.html

## Terms

- HOC Higher Order Component
  
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

React Setup

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
## Component (think of as a class)

Component
Input
Props
Output
Returns a HIERARCHY OF VIEWS to display via RENDER method

```js
// Sample Component code
class ShoppingList extends React.Component {
  render() {
    return (
      Shopping List for {this.props.name}
    );
  }
}
```

### CreateElement From Component (think of instantiating a class)

```js
return React.createElement('div', 
	{className: 'shopping-list'},
  	React.createElement('h1', ...),
  	React.createElement('ul', ...)
);
```

### Render Method

Returns a description of what you want to render
Returns a REACT ELEMENT which is a lightweight description of what to render
Create REACT ELEMENT using JSX language
Any Javascript expression can go inside the JSX expression
Every REACT ELEMENT is a REAL JAVASCRIPT OBJECT
React uses these instructions to render the screen





### Rendering An Element In Raw HTML

Before we talk about React let's talk about how raw HTML renders an element which goes something like this

```js
<div id="root"></div>
<script type="text/javascript">
  const rootElement = document.getElementById('root')
  const element = document.createElement('div')
  element.textContent='Hello World'
  element.className='container'
  rootElement.appendChild(element)
</script>
```


## Elements

An element can be

```jsx
const element = <div />;
```

or be user-defined with `props` passed to it

```jsx
const element = <Welcome name="Phil" />;
```



## Render Method

Returns a description of what you want to render

Returns a REACT ELEMENT which is a lightweight description of what to render

Create REACT ELEMENT using JSX language

```js
return React.createElement('div', 
  {className: 'shopping-list'},
  React.createElement('h1', ...),
  React.createElement('ul', ...)
);
```

Any Javascript expression can go inside the JSX expression

Every REACT ELEMENT is a REAL JAVASCRIPT OBJECT

React uses these instructions to render the screen




## React Clock

Here is a basic clock

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

The setInterval function calls function tick() every second.

This function tick() calls ReactDOM.render() so this gets called every second.

It renders the chosen element, in this case `hello world` plus a time string, to the screen at the position of the `div` element with id `root`.

React will compare the previous and current rendition of the screens in the virtual DOMs which it creates. It will then only render the changes, making for a more efficient screen re-render.

We can see this visually by `inspecting` the clock with Chrome Dev Tools and expanding to see the relevant HTML element. We can see the rest of the DOM is static but this little bit updates on every clock tick.




## Components

Components are HTML/CSS/Javascript code segments.

`props` can be passed in

`render` generates the output

	



A component can be defined most simply as a function

```jsx
function DisplayThis(props){
  return <h1>Display This {props.name}</h1>;
}
```

which is the same as

```jsx
class DisplayThis extends React.Component {
  render() {
    return <h1>Display This {this.props.name}</h1>
  }
}
const element = <DisplayThis name="Phil" />;
ReactDOM.render(
  element, document.getElementById('root')
);
```

## Display Component

We display a component thus

```jsx
create-react-app component-01
cd component-01
```

index.js is thus, and delete all other files!

```js
import React from 'react';
import ReactDOM from 'react-dom';
class DisplayThis extends React.Component {
  render() {
    return <h1>Display This {this.props.name}</h1>
  }
} 
const element = <DisplayThis name="Phil" />;
ReactDOM.render(
  element, document.getElementById('root')
);
```

## Multiple Components

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

class Component01 extends React.Component {
  render() {
    return <h1>This is a component displaying here {this.props.name}</h1>
  }
} 

class Component02 extends React.Component {
  render() {
    return <h1>This is a component displaying here {this.props.name}</h1>
  }
}

class Component03 extends React.Component {
  render() {
    return <h1>This is a component displaying here {this.props.name}</h1>
  }
}

const element = 
  <>
    <Component01 name="Component01" />
    <Component02 name="Component02" />
    <Component03 name="Component03" />
  </>;

ReactDOM.render(
  element, document.getElementById('root')
);
```

## Component As A Separate File

See [Component 03](StandaloneProjects\components\README.md)

## Passing Data To Components

See [Component 04](StandaloneProjects\components\README.md)

## Component As A Class 

We can write a component as a class as well as a function

See [Component 04 and find Component02](StandaloneProjects\components\README.md)

## createElement

```js
return React.createElement('div', 
	{className: 'shopping-list'},
  	React.createElement('h1', ...),
  	React.createElement('ul', ...)
);
```

## React Router

See [router](router) for examples on routing

We can now route between components!

```js
create-react-app router-01;cd router-01;yarn start
yarn add react-router-dom
```

Remove all extra data and add 2 components

```jsx
import Component01 from './components/Component01'
import Component02 from './components/Component02'
function App() {
  return (
    <div>
      <h2>React Routing</h2>
      <Component01 />
      <Component02 />
    </div>
  );
}
export default App;
```

```jsx
import React from 'react';
class Component01 extends React.Component {
    render() {
        return(<div>Component01</div>);  
    }
}
export default Component01    
```

Now can we add routing between those components?

index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

App.js

```jsx
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Component01 from './components/Component01'
import Component02 from './components/Component02'
function App() {
  return (
    <div>
      <h2>React Routing</h2>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/component01">Component01</Link>&nbsp;|&nbsp;
      <Link to="/component02">Component02</Link>
      <br /><br />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/component01' component={Component01} />
        <Route path='/component02' component={Component02} />
      </Switch>
    </div>
  );
}
export default App;
```

Home component etc

```jsx
import React from 'react'
class Home extends React.Component {
    render() {
        return(<div>Home</div>)
    }
}
export default Home
```

We now have perfect routing

<p align="center"><img src="images/routing.png" /></p>




## API

[API](notes/api.md)

## API Google Calendar

[API Google Calendar](notes/api-google-calendar.md)

## API Google Maps

[API Google Maps](notes/api-google-maps.md)

## JSX

We can read about JSX in detail here

https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components 

## React Native

This is probably a whole new repo in itself but I am going to make a start here!

[React Native](notes/react-native.md)

