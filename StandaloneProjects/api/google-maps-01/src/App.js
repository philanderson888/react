import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Map from './components/Map'
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/map' component={Map} />
      </Switch>
    </div>
  );
}
export default App;