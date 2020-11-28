import React from 'react'
import axios from 'axios';
import NavbarJWT from './NavbarJwt'
import Cookies from 'js-cookie';
class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            users:[],
            user: {
                username:'bob',
                password:'1234',
            },
            token:Cookies.get('token'),
        }
    }
    componentDidMount() {        
        const headers = {"Content-Type":"application/json"};
        let token = this.state.token;
        if(!token) {
            token = sessionStorage.getItem('token');
        }
        console.log(`token in componentDidMount is `, token)
        if(token){
            headers["Authorization"] = `Token ${token}`
        }
        fetch(`http://localhost:3001/users`,{headers})
            .then(response => response.json())
            .then(users => {
                this.setState({
                    users,
                })
            })
        this.setState({
            token,
        })
    }
    register = () => {
        const user = this.state.user;
        console.log('about to post this user to back end for validation',user);
        let headers = {"Content-Type":"application/json"};
        const token = sessionStorage.getItem('token');
        console.log(`token sending with login request is `,token)
        if(token){
            headers = {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`,
            }
            Cookies.set('token',sessionStorage.getItem('token'));
        }
        console.log('headers about to be sent to ths server with login credentials',headers)
        axios.post('http://localhost:3001/register',user,{headers})
            .then(response => {
                console.log(`new user created - `,response.data);
                console.log(`all cookies`,Cookies.get())
                console.log(`token from server received `,Cookies.get('token'));
                // axios returns cookies sent from the server, back to the server again
                //axios.defaults.withCredentials=true;
                console.log(`registration success!`)   
                console.log(`log in success ! now redirecting to login page`)
                setTimeout(() => window.location.replace(`/login`),4000);                
        });
    }
    onTypeUsername = event => {
        const password = this.state.user.password;
        this.setState({
            user:{
                username: event.target.value,
                password,
            }
        });
        console.log(event.target.value);
    }
    onTypePassword = event => {
        const username = this.state.user.username;
        this.setState({
            user: {
                username,
                password:event.target.value,
            }
        })
    }
    render() {
        const { users } = this.state;
        return (
            <div>
                <NavbarJWT />
                <h2>Register New User</h2>
                <h4>Users</h4>
                <p>Proves API works !</p>
                <ul>
                    {users.map(user=>(
                        <li key={user.username}>User <strong>{user.username}</strong> has password <strong>{user.password}</strong></li>
                    ))}
                </ul>
                <p>Create username and password</p>
                <input type='text' value={this.state.user.username} onChange={this.onTypeUsername} placeholder='Username' />
                <input type="text" value={this.state.user.password} onChange={this.onTypePassword} placeholder='password' />
                <button type='button' onClick={this.register} disabled={!this.state.user.username || !this.state.user.password}>Register</button>
            </div>
        );
    }
}
export default Register