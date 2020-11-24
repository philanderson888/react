import React from 'react'
import NavbarJWT from './NavbarJwt'
class JwtGetUsers extends React.Component {
    constructor() {
        super()
        this.state = {
            users:[]
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
    render() {
        const { users } = this.state;
        return (
            <div>
                <NavbarJWT />
                <h2>JWT First Get List Of Users</h2>
                <p>This is just to prove the API is working OK!</p>
                <ul>
                    {users.map(user=>(
                        <li key={user.username}>{user.username}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default JwtGetUsers