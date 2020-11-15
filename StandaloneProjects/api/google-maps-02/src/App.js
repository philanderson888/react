import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Map3 from './components/Map3'
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/map3' component={Map3} />
      </Switch>
    </div>
  );
}
export default App;