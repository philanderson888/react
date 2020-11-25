import React from 'react'
import axios from 'axios';
import NavbarJWT from './NavbarJwt'
class JwtAuthentication extends React.Component {
    constructor() {
        super()
        this.state = {
            users:[],
            user: {
                username:'',
                password:'',
            },
            token:'',
            cookiePhil:'',
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3001/users`)
            .then(response => response.json())
            .then(users => {
                this.setState({
                    users
                })
            })
    }
    login = () => {
        const user = this.state.user;
        console.log('about to post this user to back end for validation',user);
        axios.post('http://localhost:3001/signin',user)
            .then(response => {
                console.log(`response.data`,response.data);
                console.log(`response`,response);
                console.log(`cookies`,document.cookie);
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