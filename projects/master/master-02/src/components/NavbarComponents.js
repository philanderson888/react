import React from 'react'
import { Link } from 'react-router-dom'
class NavbarComponents extends React.Component {
    render(){
        return(
            <div>
                <h1>React Components</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/mouse-tracker">Mouse Tracker</Link>&nbsp;|&nbsp;
                <Link to="/hooks">Hooks</Link>&nbsp;|&nbsp;
                <Link to="/reactstrap">Reactstrap</Link>
            </div>
        )
    }
}
export default NavbarComponents