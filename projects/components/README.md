# components

## contents

- [components](#components)
  - [contents](#contents)
  - [october 2024 update](#october-2024-update)
  - [component 01](#component-01)
  - [component 02](#component-02)
  - [Component 03](#component-03)
  - [Component 04](#component-04)
  - [Component As A Class](#component-as-a-class)


## october 2024 update

finding react has made some breaking changes

so reinstalled the framework from scratch

```js
pnpm create react-app component-01a && cd component-01a && rm -rf package-lock.json && rm -rf node_modules && pnpm install && pnpm start
```

and modified `index.js` to suit

## component 01

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


## component 02

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



## Component 03

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
