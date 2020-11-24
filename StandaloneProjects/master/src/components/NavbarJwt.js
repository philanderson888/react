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
                <Link to="/jwt-get-users">JWT Users</Link>&nbsp;|&nbsp;
            </div>
        )
    }
}
export default NavbarJwt