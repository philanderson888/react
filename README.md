# React

## Contents

- [React](#react)
  - [Contents](#contents)
  - [overview of react](#overview-of-react)
  - [overview of this repository](#overview-of-this-repository)
  - [react as single files](#react-as-single-files)
  - [Terms](#terms)
  - [Introduction And Getting Started](#introduction-and-getting-started)
  - [JSX](#jsx)
  - [Rendering](#rendering)
  - [Components](#components)
    - [october 2024 update](#october-2024-update)
    - [component 01](#component-01)
    - [component 02](#component-02)
    - [Component 03](#component-03)
    - [Component 04](#component-04)
    - [Component As A Class](#component-as-a-class)
  - [React Router](#react-router)
    - [Router 01](#router-01)
    - [router-02 using pnpm](#router-02-using-pnpm)
    - [router-03](#router-03)
    - [router-04](#router-04)
    - [router-05](#router-05)
  - [Elements](#elements)
  - [projects](#projects)
    - [react-authentication-firebase-01](#react-authentication-firebase-01)
    - [Shopping List](#shopping-list)
    - [React with Bulma CSS](#react-with-bulma-css)
    - [ToDo List](#todo-list)
    - [Master](#master)
  - [API](#api)
  - [API Google Calendar](#api-google-calendar)
  - [API Google Maps](#api-google-maps)
  - [Lifecycle](#lifecycle)
  - [React Native](#react-native)
  - [React Hooks](#react-hooks)
  - [React With JWT](#react-with-jwt)

## overview of react

react is a javascript framework by react which has grown to be hugely popular and arguably the most widely used javascript framework in use today.

## overview of this repository

the goal of this repository is to aid in my own learning journey of react

the respository is several years old (2018) so some of the code will need refactoring before it runs

some code has been updated (october 2024)

## react as single files

visit [single-files](/single-files/) to get some starter examples of react as a single file

visit [projects] for a more comprehensive look at various projects, often with several versions as they increase in complexity

for example to get started you can try

- [hello-world](/projects/hello-world/) for starer projects
- [components](/projects/components/) for the use of simple components
- [router](/projects/) for a starter project as a multi-page app

and all these projects have been updated as of october 2024

with some older projects not yet updated we have

- [api](/projects/api/) various projects reading various api eg google maps
- [react with bulma css](/projects/react-with-bulma-css/) demo app with bulma css built into the react app
- [mern full stack shopping app](/projects/mern-stack-shopping-list/) full stack react app with mongo db
- [next js taster app](/projects/next-js-dashboard-app/) first foray into next js just getting used to the terminology and layout
- [to do](/projects/to-do-list/) of course you have to build a to do app !!! Here is is !!!
- [state](/projects/state/) looking at react state

## Terms

- HOC Higher Order Component
- Render props - used to share state between components
- reducer - function which determines changes to state.  
- reducer - pure function, takes previous state and action and returns next state
- Redux - manages state changes
  
** note - some of these notes may be out of date as they were originally written in 2018**

## Introduction And Getting Started

[Introduction And Getting Started](notes/introduction-and-getting-started.md)

## JSX

We can read about JSX in detail here

https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components 

## Rendering

[Rendering Components](/notes/rendering-components.md)

## Components

### october 2024 update

finding react has made some breaking changes

so reinstalled the framework from scratch

```js
pnpm create react-app component-01a && cd component-01a && rm -rf package-lock.json && rm -rf node_modules && pnpm install && pnpm start
```

and modified `index.js` to suit

### component 01

just rendering one component

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class DisplayThis extends React.Component {
  render() {
    return <div>
          <h1>Component ... name ...  {this.props.name}</h1>
      </div>
  }
} 

root.render(
  <React.StrictMode>
    <DisplayThis name="Component01" />
  </React.StrictMode>
);

```


### component 02

rendering multiple components

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



class Component01 extends React.Component {
  render() {
    return <h3>This is a component displaying here {this.props.name}</h3>
  }
} 

class Component02 extends React.Component {
  render() {
    return <h3>This is a component displaying here {this.props.name}</h3>
  }
}

class Component03 extends React.Component {
  render() {
    return <h3>This is a component displaying here {this.props.name}</h3>
  }
}

class DisplayThis extends React.Component {
  render() {
    return <div>
          <h3>Component ... name ...  {this.props.name}</h3>
      </div>
  }
} 

const element = 
  <>
    <Component01 name="Component01" />
    <Component02 name="Component02" />
    <Component03 name="Component03" />
    <DisplayThis name="DisplayThis" />
  </>;


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);
```



### Component 03

this creates a component as a separate file

cloning from component 02 as the start point (not cloning the libraries)

install libraries and run with

```js
pnpm install && pnpm start
```

App.js which imports App2 component also

```jsx
import './App.css';
import Child from './Child';

function App() {
  return (
    <div className="App">
      Parent Component
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
    </div>
  );
}

export default App;
```

and the child component

```js
function Child() {
    return (
      <div className="App2">
        Subcomponent 
      </div>
    );
  }
  export default Child;
```

renders as

<img src="/images/component-03.png" width="300" />


### Component 04

This shows passing data down from one component into another

We pass `name` data down from root `index` to component `App`

to get started we copy code apart from `node_modules` and `pnpm-lock.yaml` from previous project, then run

```js
pnpm install && pnpm start
```

index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App name="root element"/>
  </React.StrictMode>
);
```

we refer to the component and pass data in

```js
import ComponentFixed from "./ComponentFixed";
import ComponentWithData from "./ComponentWithData";

function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <ComponentFixed />
      <ComponentWithData data={{ name: "Component with data" }} />
    </div>
  );
}
export default App;
```

and just render out the data

```js
function ComponentWithData({data}) {
    return(
        <>
            {data.name}
        </>
    );
}
export default ComponentWithData
```

output is

<img src="/images/component-04.png" width="300" />






### Component As A Class

We can write a component as a class rather than as a function

```js
import ComponentFixed from "./ComponentFixed";
import ComponentWithData from "./ComponentWithData";
import ComponentAsClass from "./components/ComponentAsClass";
import ComponentAsFunction from "./components/ComponentAsFunction";

function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <ComponentFixed />
      <ComponentWithData data={{ name: "Component with data" }} />
      <ComponentAsFunction data={{ name: "Component A As Function" }} />
      <ComponentAsClass data={{ name: "Component B As Class" }} />
    </div>
  );
}

export default App;
```

and the component 

```js
import React from 'react'
class ComponentAsClass extends React.Component {
    render() {
        return <div>
            <p>This is component as a class<br />props are '{this.props.data.name}'</p>
        </div>
    }
}
export default ComponentAsClass
```

which looks like

<img src="/images/component-05.png" width="500" />






## React Router

[Routing](notes/routing.md)

### Router 01

original router-01 was no longer working so I built a fresh version

```js
npx create-react-app router-01
cd router-01
npm install
npm start
```

the app compiles and runs fine

add in router

control-C to stop the app running

```js
npm install --save react-router-dom
```

### router-02 using pnpm

just out of curiosity i am going to try to build the same thing with pnpm to see what happens

copy the whole app apart from `node-modules` folder

```js
pnpm install
pnpm start
```

seems to work fine


### router-03

let's try building from scratch using pnpm to see if it all works fine

```js
npx create-react-app router-03
cd router-03
rm package-lock.json
pnpm install
pnpm start
Control-C 
```


### router-04

let's see if we can automate this in one command

```js
npx create-react-app router-04 && cd router-04 && rm -rf package-lock.json rm -rf node_modules && pnpm install && pnpm start
```

seems to work fine

it's working but there does not seem to be much or any disk space improvement which is weird ... we are looking at 200MB to 300MB of node module libraries which is just insanely huge and this is repeated every time

### router-05

let me try another approach

i am going to try to use `pnpm` to install from scratch

someone else did try it here

https://dev.to/lico/set-up-create-react-app-using-pnpm-nji

so let's give it a go

```js
pnpm create react-app router-05 && cd router-05

rm -rf package-lock.json && rm -rf node_modules

pnpm install && pnpm start

pnpm create react-app router-02 && cd router-02 && rm -rf package-lock.json && rm -rf node_modules && pnpm install && pnpm start
pnpm create react-app router-05 && cd router-05 && rm -rf package-lock.json && rm -rf node_modules && pnpm install && pnpm start
```

but the folder size is the same

```bash
cd router-01 && du -s && cd .. && cd router-02 && du -s && cd .. && cd router-03 && du -s && cd .. && cd router-04 && du -s && cd .. && cd router-05 && du -s && cd ..
```

so not sure the benefits of pnpm in this instance ... puzzling ...








## Elements

[Elements](elements.md)


## projects

### [react-authentication-firebase-01](react-authentication-firebase-01)

This app follows this tutorial on YouTube [https://www.youtube.com/watch?v=unr4s3jd9qA](https://www.youtube.com/watch?v=unr4s3jd9qA)

### Shopping List

[MERN Stack Shopping List](mern-stack-shopping-list/README.md)

This is a series of apps built from Traversy Media and his, Brad Traversy, amazing walkthroughs on teaching coding in a very simple fashion, line by line, which I like.

This app builds a back end MongoDB, a back end API to expose the DB, database containing shopping items and users, creation of tokens on user registration, validation of token on user login.  Also it creates a React front end application which lists shopping items and has a user registration, login and logout page.  Shopping items can be listed without authentication but not added nor removed unless authentication has taken place.

### React with Bulma CSS

Creating an starter template in React with Bulma CSS

[react-with-bulma-css](react-with-bulma-css/README.md)


### ToDo List

[to-do-list](to-do-list/README.md)

Building a simple ToDo list application in React

Using this tutorial https://medium.com/javascript-in-plain-english/build-a-simple-todo-app-with-react-561579b39ad1

And building this app here https://codepen.io/wilstaley/pen/KKwypJW 

### Master

[Master](master)

This is a master project containing the following

- API Get/Post/Put/Delete
- Google Calendar API Get/Post/Delete
- React Hooks
- Jwt Authentication Tokens
- Navbars
- Event Tracking eg Mouse Events



## API

[API](notes/api.md)

## API Google Calendar

[API Google Calendar](notes/api-google-calendar.md)

## API Google Maps

[API Google Maps](notes/api-google-maps.md) 


## Lifecycle

lifecycle methods in a class

```jsx
// after component mounted
componentDidMount(){}
componentWillUnmount(){}
// this updates any time any part of the component updates
componentDidUpdate(){}
```

lifecycle methods in hooks

```jsx
import React, {useState, useEffect} from 'react'
export default function MyComponent(props){
  const [name, setName] = useState('some name');
  // runs after initial render and after every update
  useEffect(()=>{
    // add javascript here to update whenever any part of the component updates
    // for example could asynchronously update an api 
    axios.POST(url,name)...
  })
  return(<></>)
}
```


## React Native

This is probably a whole new repo in itself but I am going to make a start here!

[React Native](notes/react-native.md)

## React Hooks

[React Hooks](notes/hooks.md)

## React With JWT

[React with JWT](notes/jwt.md)
