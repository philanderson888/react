import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

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

import './App.css';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand
} from 'reactstrap';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="App">

        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><img src="https://t3.ftcdn.net/jpg/08/00/94/00/360_F_800940067_mPKc0BZajI78OneOWbOhczI1jkguExua.jpg" alt="logo" width="50" /></NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Signup</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api">API</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api-get">API Get</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api-post">API Post</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api-put">API Put</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api-delete">API Delete</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api-delete-2">API Delete 2</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api-google-calendar">API Google Calendar</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/mouse-tracker">Mouse Tracker</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/hooks">Hooks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/reactstrap">Reactstrap</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/jwt-http">JWT HTTP</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/jwt-https">JWT HTTPS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/jwt-authentication">JWT Authentication</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components">Navbar Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/jwt">Navbar JWT</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
      <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='/api' element={<API />} />
          <Route path='/api-get' element={<ApiGet />} />
          <Route path='/api-post' element={<ApiPost />} />
          <Route path='/api-put' element={<ApiPut />} />
          <Route path='/api-delete' element={<ApiDelete />} />
          <Route path='/api-delete-2' element={<ApiDelete2 />} />          
          <Route path='/api-google-calendar' element={<ApiGoogleCalendar />} />
          <Route path='/mouse-tracker' element={<MouseTracker />} />
          <Route path='/hooks' element={<Hooks />} />          
          <Route path='/reactstrap' element={<Reactstrap />} />
          <Route path='/jwt-http' element={<JwtHttp />} />
          <Route path='/jwt-https' element={<JwtHttps />} />
          <Route path='/jwt-authentication' element={<JwtAuthentication />} />
          <Route path='/components' element={<NavbarComponents />} />
          <Route path='/jwt' element={<NavbarJwt />} />          
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}