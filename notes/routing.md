## React Router

## Contents

- [React Router](#react-router)
- [Contents](#contents)
- [Introduction](#introduction)
- [Examples](#examples)
- [Walkthrough](#walkthrough)

## Introduction

This covers routing between components

## Examples

See [router](../router) for examples on routing

## Walkthrough

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

