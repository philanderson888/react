# React Hooks

## Author

@philanderson888
November 2020

## Contents

- [React Hooks](#react-hooks)
  - [Author](#author)
  - [Contents](#contents)
  - [History](#history)
  - [Introduction](#introduction)
  - [Resources](#resources)
  - [Methods](#methods)
  - [Hello World](#hello-world)
  - [React Hooks With Input](#react-hooks-with-input)
  - [`useEffect`](#useeffect)
  - [Custom Hook](#custom-hook)
  - [Context](#context)
  - [Reducer](#reducer)

## History

Introduced 2018 at ReactConf with Sophie Albert, Dan Abramov, Ryan Florence

## Introduction

- React Hooks allow state with function components
- Hooks does away with
  - classes
  - higher-order components
  - render props
- Hooks add more direct access to 
  - props
  - state
  - context
  - refs
  - lifecycle
  Hooks allows reuse of stateful logic without altering component hierarchy


## Resources

https://reactjs.org/docs/hooks-intro.html

## Methods

```jsx
useState
useEffect
useContext
// also
useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue
```

## Hello World

https://reactjs.org/docs/hooks-intro.html

`useState` is a hook which is a function provided by React to allow us to `hook` into React features from our function.

```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## React Hooks With Input

```jsx
export default MyComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      field:'my value'
    }
    this.handleNameChange = this.handleNameChange.bind(this) 
  }
}
handleFieldChange(event){
  this.setState({
    field:event.target.value,
  })
}
<input 
  value={this.state.field}
  onChange={this.handleFieldChange}
/>
```

or as a function

*note - here we are using multiple hooks*

```jsx
import React, {useState} from 'react'
export default function MyComponent(props){
    const [name,setName] =  useState('initialValue')
    const [surname,setSurname] =  useState('initialValue')
    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleSurnameChange(e){
        setName(e.target.value)
    }
    return(
        <section>
            <Row label="thisLabel">
                <input 
                    value={name}
                    onChange={handleNameChange}
                />
            </Row>
            <Row label="thisLabel">
                <input 
                    surname={field}
                    onChange={handleSurnameChange}
                />
            </Row>
        </section>
    )
}
```

## `useEffect`

useEffect is used to replace `componentDidMount(){}` and `componentWillUnmount(){}`

```jsx
import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap'
import NavbarComponents from './NavbarComponents'
export default function Hooks() {
    const [name, setName] = useState('Mary')
    const [surname, setSurname] = useState('Joyful')
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleSurnameChange = (event) => {
        setSurname(event.target.value)
    }
    useEffect(()=>{
        document.title=name + ' ' + surname
    })
    
    return (
        <div>
            <NavbarComponents />
            <section>
                <Row label="Name">{name} {surname}</Row>
            </section>
            <section>
                <Row>
                    <input
                        value={name}
                        onChange={handleNameChange}
                    />
                </Row>
                <Row>
                    <input
                        value={surname}
                        onChange={handleSurnameChange}
                    />
                </Row>
            </section>
        </div>
    )
}
```

## Custom Hook

Custom hook is a custom-built function with all of the state and handling state change for a field

```jsx
import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap'
import NavbarComponents from './NavbarComponents'
export default function Hooks() {
    const [name, setName] = useState('Mary')
    const [surname, setSurname] = useState('Joyful')
    const [width, setWidth] = useState(window.innerWidth);
    const width2 = useWindowWidth();
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleSurnameChange = (event) => {
        setSurname(event.target.value)
    }
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        document.title=name + ' ' + surname
    })
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // stops memory leak
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })
    return (
        <div>
            <NavbarComponents />
            <section>
                <Row label="Name">{name} {surname} {width}</Row>
            </section>
            <section>
                <Row>
                    <input
                        value={name}
                        onChange={handleNameChange}
                    />
                </Row>
                <Row>
                    <input
                        value={surname}
                        onChange={handleSurnameChange}
                    />
                </Row>
                <Row>
                    Width: {width}
                </Row>
                <Row>
                    Width2: {width2}
                </Row>
            </section>
        </div>
    )
}
// custom hook
const useWindowWidth = () => {
    const [width2, setWidth2] = useState(window.innerWidth);
    const handleResize2 = () => {
        setWidth2(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize2);
        // stops memory leak
        return () => {
            window.removeEventListener('resize',handleResize2)
        }
    })
    return width2;
}
```




## Context

Context uses global items like `theme` or `locale`

This is using context without hooks

```jsx
import { ThemeContext, LocaleContext } from './context'
export default class MyComponent extends React.Component {
    render(){
        return(
            <ThemeContext.Consumer>
                {
                    theme => (
                        <section className={theme}>
                            <p>some text</p>
                        </section>
                    )
                }
            </ThemeContext.Consumer>
            <LocaleContext.Consumer>
                 {
                     locale => (
                         // this bit shows a flag in the consumer's language
                        <Row label="Language">
                            {locale}
                        </Row>
                     )
                 }
            </LocaleContext.Consumer>
        )
    }
}
```

this example uses `context` with `hooks`

Note that `useContext` uses the order of declaration

```jsx
import {ThemeContext,LocaleContext} from './context'
export default function MyComponent(props){
    const theme = useContext(ThemeContext)
    const locale = useContext(LocaleContext)
    // the {locale} line returns a flag
    return (
        <section className={theme}>
            <Row>..</Row>
            
            <Row label="Language">{locale}</Row>
        </section>
    )
}
```

## Reducer

Reducer takes in state and an action and returns the state

let [state, dispatch] = useReducer((state,action)=>{

}{
  field1:1,
  field2:2,
})