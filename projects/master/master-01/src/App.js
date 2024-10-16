import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import ApiGet from './components/ApiGet.js';
import ApiPost from './components/ApiPost.js';
import ApiPut from './components/ApiPut.js';
import ApiDelete from './components/ApiDelete.js';
import ApiDelete2 from './components/ApiDelete2.js';
import ApiGoogleCalendar from './components/ApiGoogleCalendar.js';
import API from './components/API.js';
import NavbarComponents from './components/NavbarComponents.js';
import MouseTracker from './components/MouseTracker.js';
import Hooks from './components/Hooks.js';
import Reactstrap from './components/Reactstrap.js'
import JwtHttp from './components/JwtHttp.js'
import JwtHttps from './components/JwtHttps.js'
import JwtAuthentication from './components/JwtAuthentication.js'
import NavbarJwt from './components/NavbarJwt.js';
function App() {
  return (
    <div className="container">
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/apis' component={API} />
        <Route path='/api-get' component={ApiGet} />
        <Route path='/api-post' component={ApiPost} />
        <Route path='/api-put' component={ApiPut} />
        <Route path='/api-delete' component={ApiDelete} />
        <Route path='/api-delete-2' component={ApiDelete2} />
        <Route path='/api-google-calendar' component={ApiGoogleCalendar} />
        <Route path='/components' component={NavbarComponents} />
        <Route path='/mouse-tracker' component={MouseTracker} />
        <Route path='/hooks' component={Hooks} />
        <Route path='/reactstrap' component={Reactstrap} />
        <Route path='/jwt-http' component={JwtHttp} />
        <Route path='/jwt-https' component={JwtHttps} />
        <Route path='/jwt-authentication' component={JwtAuthentication} />
        <Route path='/jwt' component={NavbarJwt} />
      </Switch>
    </div>
  );
}
export default App;