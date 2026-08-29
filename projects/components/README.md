# components

[components](/README.md#components)

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






## Component As A Class

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
