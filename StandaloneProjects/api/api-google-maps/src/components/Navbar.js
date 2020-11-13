import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render(){
        return(
            <div>
                <h1>Google Maps Application</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/simple-map-older-library">Simple Map Using Older Library</Link>&nbsp;|&nbsp;
                <Link to="/simple-map-02">Simple Map Continued</Link>&nbsp;|&nbsp;
                <Link to="/simple-map-current-library">Simple Map Using Current Library</Link>
            </div>
        )
    }
}
export default Navbar