import React from 'react'
import axios from 'axios';
import NavbarJWT from './NavbarJwt'
import Cookies from 'js-cookie';
class JwtAuthentication extends React.Component {
    constructor() {
        super()
        this.state = {
            users:[],
            user: {
                username:'bob',
                password:'123',
            },
            token:Cookies.get('token'),
        }
    }
    componentDidMount() {        
        Cookies.set('test22','test cookie22')
        Cookies.set('token',sessionStorage.getItem('token'));
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
    login = () => {
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
        axios.post('http://localhost:3001/signin',user,{headers})
            .then(response => {
                console.log(`response.data`,response.data);
                console.log(`response`,response);
                console.log(`all cookies`,Cookies.get())
                console.log(`token from server received `,Cookies.get('token'));
                // axios returns cookies sent from the server, back to the server again
                //axios.defaults.withCredentials=true;
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
    onAddUser = () => {
        let user = this.state.user
        let users = this.state.users
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response => {
                user = response.data
                user.id = this.state.users.length+1
                console.log(user)
                users = [...this.state.users, user]
                console.log(users)
                this.setState({ 
                    user,
                    users
                })
            });
    }
    render() {
        const { users } = this.state;
        return (
            <div>
                <NavbarJWT />
                <h2>JWT Authentication</h2>
                <h4>First get list of users</h4>
                <p>This is just to prove the API is working OK!</p>
                <ul>
                    {users.map(user=>(
                        <li key={user.username}>User <strong>{user.username}</strong> has password <strong>{user.password}</strong></li>
                    ))}
                </ul>
                <p>Enter credentials</p>
                <input type='text' value={this.state.user.username} onChange={this.onTypeUsername} placeholder='Username' />
                <input type="text" value={this.state.user.password} onChange={this.onTypePassword} placeholder='password' />
                <button type='button' onClick={this.login} disabled={!this.state.user.username || !this.state.user.password}>Login</button>
            </div>
        );
    }
}
export default JwtAuthentication