import React from 'react'
import { Link } from 'react-router-dom'
class NavbarJwt extends React.Component {
    render() {
        return (
            <div>
                <h1>User Authentication</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/jwt-http">Http</Link>&nbsp;|&nbsp;
                <Link to="/jwt-https">Https</Link>&nbsp;|&nbsp;
                <Link to="/register">Register</Link>&nbsp;|&nbsp;
                <Link to="/login">Log in</Link>&nbsp;|&nbsp;
                <Link to="/secure-data">Secure Data</Link>
            </div>
        )
    }
}
export default NavbarJwt