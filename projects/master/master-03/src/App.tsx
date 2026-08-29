import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import ApiGet from './components/ApiGet';
import ApiPost from './components/ApiPost';
import ApiPut from './components/ApiPut';
import ApiDelete from './components/ApiDelete';
import ApiDelete2 from './components/ApiDelete2';
import ApiGoogleCalendar from './components/ApiGoogleCalendar';
import API from './components/API';
import MouseTracker from './components/MouseTracker';
import Hooks from './components/Hooks';
import Reactstrap from './components/Reactstrap'
import JwtHttp from './components/JwtHttp'
import JwtHttps from './components/JwtHttps'
import JwtAuthentication from './components/JwtAuthentication'
import NavbarJWT from './components/NavbarJwt'
import NavbarComponents from './components/NavbarComponents'

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
                        <NavLink href="/">Login / Signup</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api">API</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components">React Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/jwt">Navbar JWT</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
      <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
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
          <Route path='/jwt' element={<NavbarJWT />} />
          <Route path='/components' element={<NavbarComponents />} />
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


