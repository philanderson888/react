import React from 'react'
import axios from 'axios'
class ApiGoogleCalendar extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            users:[],
            user:null,
            name:'',
            id:'',
            idMax:'',
            clientId:'clientId',
            apiKey:'apikey',
            gapi:'gapi',
            DISCOVERY_DOCS:'discovery docs',
            SCOPES:'scope',
            apiData:'some api data here'
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(data=>{
                const users = data
                let idMax = users.reduce( (max, user) => parseInt(user.id)>max ? parseInt(user.id) : max, parseInt(users[0].id))
                console.log(`Max ID value is ${idMax}`)
                this.setState({
                    error:null,
                    isLoaded:true,
                    users,
                    user:null,
                    name:'',
                    idMax
                })
            },
            error=>{
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        );
    }
    onChangeUserName = event => {
        this.setState({name:event.target.value})
        console.log(event.target.value)
    }
    onClearUsers = () => {
        this.setState({users:[]})
    }
    onAddUser = () => {
        let user = {
            name:this.state.name
        }
        let users = this.state.users
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response => {
                user = response.data
                const idMax = this.state.idMax + 1
                user.id = idMax
                console.log(user)
                users = [...this.state.users, user]
                console.log(users)
                console.log(`id max is ${idMax}`)
                this.setState({ 
                    user,
                    users,
                    idMax
                })
            });
    }
    removeUser = async event => {
        const id = event.target.value
        const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`
        console.log(`attempting to delete ${userUrl}`)
        const response = await axios.delete(userUrl)
        console.log(`response has status ${response.status}`)
        console.log(response)
        console.log(response.data)
        let users = this.state.users.filter(user=>user.id !== parseInt(id))
        console.log(users)
        this.setState({
            users,
            id:'',
            firstName:'',
            user:null
        })
    }
    onEditUser = async () => {
        const users = this.state.users
        const user = this.state.user
        const id = user.id
        console.log(`user before editing ${user} with id ${id}`)
        console.log(this.state.user)
        const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`
        user.name = this.state.name;
        console.log(`about to submit user ${id} new name ${user.name}`)
        const response = await axios.put(userUrl,user)
        console.log(`response has status ${response.status}`)
        console.log(response)
        console.log(response.data)
        this.setState({
            users,
            user,
            name:user.name,
            id
        })
    }
    selectUserForEditing = async event => {
        const users = this.state.users
        const id = event.target.value
        const user = this.state.users.filter(user=>user.id===parseInt(id))[0]
        const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`
        console.log(`attempting to update ${userUrl}`)
        console.log(`selecting user with id ${id} for editing with name ${user.name}`)
        this.setState({
            users,
            id,
            name:user.name,
            user
        })
    }
    getCalendarData = () => {
        const clientId = process.env.REACT_APP_CLIENT_ID;
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiData= this.state.apiData + ', and some more'
        const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
        const scope = "https://www.googleapis.com/auth/calendar.readonly";        
        let gapi = window.gapi.loaded_0;
        if(gapi==null) gapi = 'gapi is null'
        window.gapi.load('client:auth2',()=>{
            gapi='gapi client is loading'
            window.gapi.client.init({
                apiKey,
                clientId,
                discoveryDocs,
                scope
            })
        })
        this.setState({
            clientId,
            apiKey,
            gapi,
            apiData
        })
    }
    render(){
        const { error, isLoaded, users } = this.state
        if(error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return(
                <div>
                    <h2>API Update User</h2>
                    <p>Max user id is {this.state.idMax}</p>
                    <ul>
                        {users.map(user=>(
                            <li key={user.id}>
                                {user.id} - {user.name} &nbsp; 
                                <input type="image" src="https://cdn0.iconfinder.com/data/icons/glyphpack/19/edit-512.png" className="iconEdit" value={user.id} onClick={this.selectUserForEditing} /> &nbsp;
                                <input type="image" src="data:image/png;base64,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" className="iconDelete" value={user.id} onClick={this.removeUser} />
                            </li>
                        ))}
                    </ul>
                    <input type="text" value={this.state.name} onChange={this.onChangeUserName} placeholder='Full Name' />
                    <button type='button' onClick={this.onAddUser} disabled={!this.state.name}>Add User</button>
                    <button type='button' onClick={this.onEditUser} disabled={!this.state.name}>Edit User</button>
                    <button type='button' onClick={this.onClearUsers}>Clear Users</button>
                    <div>
                        <button type='button' onClick={this.getCalendarData}>API Calendar</button>
                        <div id='client-id'>{this.state.clientId}</div>
                        <div id='api-key'><p>{this.state.apiKey}</p></div>
                        <div id='window-gapi'><p>{this.state.gapi}</p></div>
                        <div id='props'>Props - {this.props.data}</div>
                        <div id='discovery-docs'><p>{this.state.discoveryDocs}</p></div>
                        <div id='scope'><p>{this.state.scope}</p></div>
                        <div id='api-calendar'>{this.state.apiData}</div>
                    </div>
                </div> 
            )
        }
    }
}
export default ApiGoogleCalendar
