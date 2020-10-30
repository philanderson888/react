import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Component01 from './components/Component01'
import Component02 from './components/Component02'
import Navbar from './components/Navbar'
import State01 from './components/State01'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/component01' component={Component01} />
        <Route path='/component02' component={Component02} />
        <Route path='/state01' component={State01} />
      </Switch>
    </div>
  );
}
export default App;
