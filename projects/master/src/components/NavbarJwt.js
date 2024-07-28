import React from 'react'
import { Link } from 'react-router-dom'
class NavbarJwt extends React.Component {
    render() {
        return (
            <div>
                <h1>JWT JSON Web Tokens</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/jwt-http">Http</Link>&nbsp;|&nbsp;
                <Link to="/jwt-https">Https</Link>&nbsp;|&nbsp;
                <Link to="/jwt-authentication">JWT Authentication</Link>
            </div>
        )
    }
}
export default NavbarJwt