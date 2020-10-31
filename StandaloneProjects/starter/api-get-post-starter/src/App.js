import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import ApiGet from './components/ApiGet'
import ApiPost from './components/ApiPost'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/api-get' component={ApiGet} />
        <Route path='/api-post' component={ApiPost} />
      </Switch>
    </div>
  );
}
export default App;