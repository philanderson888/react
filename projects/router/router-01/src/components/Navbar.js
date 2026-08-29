import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <div>
                <h2>React Routing</h2>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/about">About</Link>&nbsp;|&nbsp;
                <Link to="/dashboard">Dashboard</Link>&nbsp;|&nbsp;
                <Link to="/nothing-here">Nothing Here</Link>
            </div>
        )
    }
}
export default Navbar
