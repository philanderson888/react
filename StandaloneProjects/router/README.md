# React Router

## Router 01

[Router 01](router-01)

This example shows basic routing with `Home` and 2 components

We can now just tidy it up a bit and move the navbar to its own component

```jsx
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Component01 from './components/Component01'
import Component02 from './components/Component02'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar />
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

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    render(){
        return(
            <div>
                <h2>React Routing</h2>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/component01">Component01</Link>&nbsp;|&nbsp;
                <Link to="/component02">Component02</Link>
                <br /><br />
            </div>
        )
    }
}
export default Navbar
```

and now we have finished routing!!!