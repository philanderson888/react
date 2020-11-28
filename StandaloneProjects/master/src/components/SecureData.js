import React from 'react'
import NavbarJWT from './NavbarJwt'
import Cookies from 'js-cookie';
const queryString = require('query-string');
class SecureData extends React.Component {
    constructor() {
        super()
        this.state = {
            token:Cookies.get('token'),
            username:'',
        }
    }
    componentDidMount() {        
        const token = sessionStorage.getItem('token');
        Cookies.set('token',token);
        console.log(`is user logged in? token is ${token}`)
        const urlData = queryString.parse(window.location.search);
        const username = urlData.username
        this.setState({
            token,
            username,
        })
    }
    render() {
        return (
            <div>
                <NavbarJWT />
                <h2>You are logged in!</h2>
                <p>This page is for secure data only!!!</p>
                <h3>User is {this.state.username}</h3>
            </div>
        );
    }
}
export default SecureData