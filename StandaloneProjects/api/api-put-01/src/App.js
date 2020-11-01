import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import ApiGet from './components/ApiGet'
import ApiPost from './components/ApiPost'
import ApiPut from './components/ApiPut'
import ApiDelete from './components/ApiDelete'
import ApiDelete2 from './components/ApiDelete2'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/api-get' component={ApiGet} />
        <Route path='/api-post' component={ApiPost} />
        <Route path='/api-put' component={ApiPut} />
        <Route path='/api-delete' component={ApiDelete} />
        <Route path='/api-delete-2' component={ApiDelete2} />
      </Switch>
    </div>
  );
}
export default App;