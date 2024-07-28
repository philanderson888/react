import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h1>Google Maps</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/map3">Map 3</Link>
            </div>
        )
    }
}
export default Navbar;