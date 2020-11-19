# State

## Contents

- [State](#state)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [State inside one component](#state-inside-one-component)
    - [Passing state between components](#passing-state-between-components)
    - [Child Component With Own State](#child-component-with-own-state)
    - [Alter Child State From Parent](#alter-child-state-from-parent)
  - [Alter Parent State From Child](#alter-parent-state-from-child)
  - [State With Input](#state-with-input)
  - [Buttons](#buttons)


## Introduction

This is a walkthrough for react components holding state, also including passing data between parent and child components

Code is at [../state/README.md](../state/README.md)

## State inside one component

Props are `immutable`

State is `mutable`

State must be used in components declared as a `Class`

Let's create state in a component

```jsx
import React from 'react'
class State01 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: "State Data"
        }
    }
    render(){
        return <div>Component To Track State showing data '{this.state.data}'</div>;
    }
}
export default State01
/*
Component To Track State showing data 'State Data'
*/
```

### Passing state between components

Now let's create a sub-component and pass state to it

```js
create-react-app state-02;cd state-02;yarn add react-router-dom
```

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

We create the parent component

```jsx
import ParentComponent from 'components/ParentComponent.js'
function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}
export default App;
```

```jsx
import ParentComponent from './components/ParentComponent.js'
function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}
export default ParentComponent;
```

```jsx
import React from 'react';
class ParentComponent extends React.Component {
    render() {
        return (<div>This is the parent component</div>);
    }
}
export default ParentComponent
/*
This is the parent component
*/
```

Now let's add a child component

```jsx
import React from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends React.Component {
    render() {
        return (
            <div>
                This is the parent component
                <ChildComponent />
            </div>
        );
    }
}
export default ParentComponent
/*
This is the parent component
This is the Child component
*/
```

Now let's see if we can pass state data to the child

```jsx
import React from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            data: "This is some data"
        }
    }
    render() {
        return (
            <div>
                This is the parent component
                <ChildComponent text='This is some text' />
                <ChildComponent text={this.state.data} />
            </div>
        );
    }
}
export default ParentComponent
```

```jsx
import React from 'react';
class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <p>This is the Child component with data from parent - {this.props.text}</p>
            </div>
        );
    }
}
export default ChildComponent
/*
This is the parent component
This is the Child component with data from parent - This is some text
This is the Child component with data from parent - This is some data
*/
```

So we are now able to pass data or 'state' from one component down to another one.

The idea is that if the state updates, then so does the state in the child component.

Let's see if we can set this up by clicking a button in the parent to change state and see what happens in the child component display

```js
create-react-app state-03;cd state-03;yarn start
// remove all extra css and tests
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

Now if we push some data from `Parent`

```jsx
import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            data: "here is some data"
        }
    }
    render(){
        return(
            <>
                <h2>Parent Component</h2>
                <Child data={this.state.data}/>
            </>
        );
    }
}
export default Parent
```

to Child

```jsx
import React from 'react'
class Child extends React.Component {
    render(){
        return(
            <>
                <p>Child Component</p>
                <p>{this.props.data}</p>
            </>
        );
    }
}
export default Child
```

This is all working fine

```jsx
/*
Parent Component
Child Component
here is some data
*/
```

So what now if we add a button in the parent to change the data in the parent and see if this propogates down to the child immediately.

We use the `setState` method to set the state, we don't call it directly

```jsx
import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            data: "here is some data",
            isToggleOn:true
        }
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState(state=>({
            data: state.data + " some data, ",
            isToggleOn:!state.isToggleOn
        }))
    } 
    render(){
        return(
            <>
                <h2>Parent Component</h2>
                <Child data={this.state.data}/>
                <button onClick={this.changeState}>Change State {this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </>
        );
    }
}
export default Parent
/*
Parent Component
Child Component
here is some data
Change State ON

becomes

Parent Component
Child Component
here is some data some data,
Change State OFF
*/
```

### Child Component With Own State

We can create a child component with its own state

```jsx
import React from 'react'
class Child extends React.Component {
    state = {
        name: "Child State"
    }
    render(){
        return(
            <div>
              <h3>Here is a child rendering its own state as `{this.state.name}`</h3>
            </div>
        )
    }
}
export default Child
/*
Here is a child rendering its own state as `Child State`
*/
```

### Alter Child State From Parent

We have passed state from parent to child component.

Now what if we want to alter the state of a child from the parent.

```jsx
// App.js
import Parent from './components/Parent'
function App() {
  return (
    <div>
      <h1>Here is an app</h1>
      <Parent/>
      <Parent/>
    </div>
  );
}
export default App;
// Parent.js
import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    render(){
        return(
            <div>
             <h2>Here is a parent</h2>
             <Child />
             <Child />
             <Child />
            </div>
        )
    }
}
export default Parent
// Child.js
import React from 'react'
class Child extends React.Component {
    render(){
        return(
            <div>
              <h3>Here is a child</h3>
            </div>
        )
    }
}
export default Child
/*
Here is an app
Here is a parent
Here is a child
*/
```

Now let's add state to the child with a button to alter it

```jsx
import React from 'react'
class Child extends React.Component {
    state = {
        name: "Child State"
    }
    changeName = () => {
        this.setState ({name:"Altered Child State"})
    }
    render(){
        return(
            <div>
              <h3>Here is a child rendering its own state as `{this.state.name}`</h3>
              <button onClick={this.changeName}>Change Name From Child</button>
            </div>
        )
    }
}
export default Child
/*
Here is an app
Here is a parent
Here is a child rendering its own state as `Child State`
Change Name From Child

becomes after click

Here is an app
Here is a parent
Here is a child rendering its own state as `Altered Child State`
Change Name From Child
*/
```

Now this is the child component altering its own state.

Can we achieve the same result from the parent also?

```jsx
import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.referenceChild = React.createRef();
    }
    changeChildState = ()=>{
        this.referenceChild.current.changeName()
    }
    render(){
        return(
            <div>
             <h2>Here is a parent</h2>
             <Child ref={this.referenceChild} />
             <button onClick={this.changeChildState}>Change child name (held in child state) from Parent</button>
            </div>
        )
    }
}
export default Parent
```

Now we can click on both the child and parent elements, and achieve the same result of altering props in the child element



## Alter Parent State From Child

We have seen how to alter child state from parent, but what about altering the parent state from the child?

In this case we actually pass a function down into the child and activate that function, which alters the parent element.

```jsx
// app
import Parent from './components/Parent'
function App() {
  return (
    <div>
      Here is an App
      <Parent/>
    </div>
  );
}
export default App;
// parent
import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    render(){
        return(
            <div>
                Here is a Parent
                <Child/>
            </div>
        )
    }
}
export default Parent
// child
import React from 'react'
class Child extends React.Component {
    render(){
        return(
            <div>
                Here is a child
            </div>
        )
    }
}
export default 
/*
Here is an App
Here is a Parent
Here is a child
*/
```

So let's create the state in the parent which can be altered

```jsx
import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            data: "This is parent data"
        }
        this.changeState = this.changeState.bind(this)
    }
    changeState(){
        this.setState(state=>({
            data:"This is altered parent data"            
        }))
    }
    render(){
        return(
            <div>
                <p>Here is a Parent with some data - {this.state.data}</p>
                <button onClick={this.changeState}>Change parent state from parent</button>
                <Child/>
            </div>
        )
    }
}
export default Parent
/*
Here is a Parent with some data - This is altered parent data
*/
```

Now we can alter the parent state from the parent but what about altering the parent state from the child?

Just send the handler function into the child

```jsx
// Parent
import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            data: "This is parent data"
        }
        this.changeState = this.changeState.bind(this)
    }
    changeState(){
        this.setState(state=>({
            data:"This is altered parent data"            
        }))
    }
    render(){
        return(
            <div>
                <p>Here is a Parent with some data - {this.state.data}</p>
                <button onClick={this.changeState}>Change parent state from parent</button>
                <Child action={this.changeState} />
            </div>
        )
    }
}
export default Parent
// Child
import React from 'react'
class Child extends React.Component {
    render(){
        return(
            <div>
                <p>Here is a child</p>
                <button onClick={this.props.action}>Click here to alter parent state from child</button>
            </div>
        )
    }
}
export default Child
/*
Here is an App
Here is a Parent with some data - This is altered parent data
Click here to alter parent state from child
*/
```

So now we can alter state both from parent to child but also child to parent.

## State With Input

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

```jsx
import React, {useState} from 'react'
export default function MyComponent(props){
    const [name,setName] =  useState('initialValue')
    function handleNameChange(e){
        setName(e.target.value)
    }
    return(
        <section>
            <Row label="thisLabel">
                <input 
                    value={field}
                    onChange={handleNameChange}
                />
            </Row>
        </section>
    )
}
```










## Buttons

When we click a button the code to trigger an event is as follows

```jsx
import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            data: "here is some data",
            isToggleOn:true
        }
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState(state=>({
            data: state.data + "some data, ",
            isToggleOn:!state.isToggleOn
        }))
    } 
    render(){
        return(
            <>
                <h2>Parent Component</h2>
                <Child data={this.state.data}/>
                <button onClick={this.changeState}>Change State {this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </>
        );
    }
}
export default Parent
```