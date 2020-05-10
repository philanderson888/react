# ReactJS 

## Contents

- [ReactJS](#reactjs)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Resources](#resources)
  - [Background](#background)
  - [Hello World](#hello-world)
  - [Component (think of as a class)](#component-think-of-as-a-class)
    - [CreateElement From Component (think of instantiating a class)](#createelement-from-component-think-of-instantiating-a-class)
    - [Render Method](#render-method)
- [Please see further details in the folders below:](#please-see-further-details-in-the-folders-below)
  - [Single Html Files](#single-html-files)
  - [Standalone Projects](#standalone-projects)

## Introduction

This repository is a combination of my own learning, also learning React from Udemy's web developer course of 2018, and also from Egghead which has a course on React.

## Resources

[reactforbeginners.com](https://reactforbeginners.com)


## Background

React updates the view (render) when underlying data changes

A view exists for every 'state' of the app
    'Declarative' views
    'Encapsulated components' which manage their own state

Render using
	Javascript
	JSX which uses XML to store data



## Hello World

React Setup

https://reactjs.org/tutorial/tutorial.html


```powershell
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```

## Component (think of as a class)

Component
	Input
		Props 
	Output
		Returns a HIERARCHY OF VIEWS to display via RENDER method

```jsx
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

```jsx
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



# Please see further details in the folders below:

## [Single Html Files](SingleHtmlFiles)

## [Standalone Projects](StandaloneProjects)