import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import SimpleMapUsingOlderLibrary from './components/SimpleMapUsingOlderLibrary'
import SimpleMap02 from './components/SimpleMap02'
import SimpleMapUsingCurrentLibrary from './components/SimpleMapUsingCurrentLibrary'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/simple-map-older-library' component={SimpleMapUsingOlderLibrary} />
        <Route path='/simple-map-02' component={SimpleMap02} />
        <Route path='./simple-map-current-library' component={SimpleMapUsingCurrentLibrary} />
      </Switch>
    </div>
  );
}
export default App;