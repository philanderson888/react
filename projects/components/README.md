# Components

## Component 01

[Component 01](component-01/README.md)

Just displaying a single component

[Component 02](component-02)

only one file `index.js` and removed all of the others

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

## Component 03

This aims to build a component as a separate sub-file

```js
create-react-app component-03
cd component-03
yarn start
```

Index.js

```jsx
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

App.js which imports App2 component also

```jsx
import App2 from './App2'
function App() {
  return (
    <div className="App">
      Component App
      <App2 />
      <App2 />
      <App2 />
      <App2 />
      <App2 />
    </div>
  );
}
export default App;
```

App2.js 

```jsx
function App2() {
    return (
        <div className="App2">
        Component App2
        </div>
    );
}
export default App2;
```

Which renders

```jsx
/*
Component App
Component App2
Component App2
Component App2
Component App2
Component App2
*/
```

## Component 04

This shows passing data down from one component into another

```js
create-react-app component-04
```

We pass `name` data down from root `index` to component `App`

index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App name="This is the root element called 'app'"/>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Now display the data as props in `App`

```js
function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
    </div>
  );
}
export default App;
```

and now also into a sub-component also

App.js

```jsx
import Component01 from './Component01'
function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <Component01 name='Component 01 displaying data' />
    </div>
  );
}
export default App;
```

Component01.js

```jsx
import Component01 from './Component01'
function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <Component01 name='Component 01 displaying data' />
    </div>
  );
}
export default App;
```

## Component As A Class

We can write a component as a class rather than as a function

We already see the component as a function

```jsx
import Component01 from './Component01'
function App(data) {
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <Component01 name='Component 01 displaying data' />
    </div>
  );
}
export default App;
```

but we also see it as a class so let's make it happen!

Let's create it

```js
create-react-app component-05-component-as-class;cd component-05-component-as-class;yarn start
```

Remove all of the extra files not needed

```jsx
function App() {
  return (
    <>
    </>
  );
}
export default App;
```

```jsx
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

Add firstly a function component

```jsx
function ComponentA(){
    return(
        <div>
            This is component A
        </div>
    );
}
export default ComponentA
```

And now a class component

```jsx
import React from 'react'
class ComponentB extends React.Component {
    render() {
        return <div>This is component B</div>
    }
}
export default ComponentB
```

And display them both

```jsx
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
function App() {
  return (
    <>
      This is a react app!
      <ComponentA name='componentA' />
      <ComponentB name='componentB' />
    </>
  );
}
export default App;
```

Now pass data to them both

```jsx
function ComponentA(props){
    return(
        <div>
            This is component A displaying props as '{props.name}'
        </div>
    );
}
export default ComponentA
```

```jsx
import React from 'react'
class ComponentB extends React.Component {
    render() {
        return <div>This is component B displaying props as '{this.props.name}'</div>
    }
}
export default ComponentB
```
which now renders as

```jsx
/*
This is a react app!
This is component A displaying props as 'componentA'
This is component B displaying props as 'componentB'
*/
```