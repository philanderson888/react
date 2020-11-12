import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import GoogleMaps from './components/GoogleMaps'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/map' component={GoogleMaps} />
      </Switch>
    </div>
  );
}
export default App;