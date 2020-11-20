# React

## Contents

- [React](#react)
  - [Contents](#contents)
  - [Overview](#overview)
  - [Single File React HTML Pages](#single-file-react-html-pages)
  - [Standalone Projects](#standalone-projects)
  - [Resources](#resources)
  - [Terms](#terms)
  - [Introduction And Getting Started](#introduction-and-getting-started)
  - [JSX](#jsx)
  - [Rendering](#rendering)
  - [Components](#components)
  - [Routing Between Components](#routing-between-components)
  - [Elements](#elements)
  - [API](#api)
  - [API Google Calendar](#api-google-calendar)
  - [API Google Maps](#api-google-maps)
  - [Lifecycle](#lifecycle)
  - [React Native](#react-native)
  - [React Hooks](#react-hooks)
  - [React With JWT](#react-with-jwt)

## Overview

This is a teaching repository for React created by Facebook.

The repo is sorted into [single file react projects](SingleHtmlFiles) which can be run as standalone files ie they have React imported as a CDN into a single HTML file.  

This repository is a combination of my own learning, also learning React from Udemy's web developer course of 2018, and also from Egghead which has a course on React.

Also I have a much more complex set of standalone projects built with the `create-react-app` [here](StandaloneProjects).

## Single File React HTML Pages

[Single File React HTML Pages](SingleHtmlFiles/README.md)

## Standalone Projects

[React Projects Built With `create-react-app`](StandaloneProjects/README.md)

[API Projects](StandaloneProjects/api)

## Resources

[reactforbeginners.com](https://reactforbeginners.com/)

[Flavio Copes React Beginners Handbook](https://www.freecodecamp.org/news/react-beginner-handbook)

[React Learning Path](https://medium.com/free-code-camp/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6)

[Build This Game On React Docs Tutorial](https://reactjs.org/tutorial/tutorial.html)

[FreeCodeCamp React Tutorial](https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/)

Free React Course https://scrimba.com/learn/learnreact

[Live Play Around With React And Learn Basics - All In Browser](https://jscomplete.com/playground)

Examples - https://www.jqwidgets.com

[Facebook React Tutorial] https://facebook.github.io/react/tutorial/tutorial.html

## Terms

- HOC Higher Order Component
- Render props - used to share state between components
- reducer - function which determines changes to state.  
- reducer - pure function, takes previous state and action and returns next state
- Redux - manages state changes
  
## Introduction And Getting Started

[Introduction And Getting Started](notes/introduction-and-getting-started.md)

## JSX

We can read about JSX in detail here

https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components 
## Rendering

[Rendering Components](notes/rendering-components.md)

## Components

[Components](notes/components.md)

## Routing Between Components

[Routing](notes/routing.md)



## Elements

[Elements](elements.md)

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