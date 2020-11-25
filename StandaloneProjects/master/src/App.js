import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ApiGet from './components/ApiGet';
import ApiPost from './components/ApiPost';
import ApiPut from './components/ApiPut';
import ApiDelete from './components/ApiDelete';
import ApiDelete2 from './components/ApiDelete2';
import ApiGoogleCalendar from './components/ApiGoogleCalendar';
import API from './components/API';
import NavbarComponents from './components/NavbarComponents';
import MouseTracker from './components/MouseTracker';
import Hooks from './components/Hooks';
import Reactstrap from './components/Reactstrap.js'
import JwtHttp from './components/JwtHttp.js'
import JwtHttps from './components/JwtHttps.js'
import JwtAuthentication from './components/JwtAuthentication'
import NavbarJwt from './components/NavbarJwt';
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