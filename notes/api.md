# API

## Contents

- [API](#api)
  - [Contents](#contents)
  - [Resources](#resources)
  - [Introduction](#introduction)
  - [API Get with `fetch`](#api-get-with-fetch)
  - [API Post](#api-post)
  - [API Put](#api-put)
  - [Async Delete](#async-delete)
  - [API Delete](#api-delete)
  - [API Insert with Max ID](#api-insert-with-max-id)
  - [API Edit](#api-edit)

## Resources

https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

https://www.youtube.com/watch?v=T3Px88x_PsA&ab_channel=BenAwad

https://api.randomuser.me
## Introduction

This looks at 

- HTTP GET
- HTTP POST
- HTTP DELETE
- HTTP PUT

using `fetch` and `axios`

## API Get with `fetch`

Using https://reactjs.org/docs/faq-ajax.html as a lead document

```js
create-react-app api-fetch-01;cd api-fetch-01
// strip out to bare minimum
```

```jsx
import React from 'react'
class Parent extends React.Component {
    constructor(){
        super()
        this.state={
            error:null,
            isLoaded:false,
            todos:[]
        }
    }  
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            this.setState({
                isLoaded:true,
                todos:data
            })
            console.log(this.state)
        },
        error => {
            this.setState({
                isLoaded:true,
                error
            });
        });
    }
    render(){
        return(
            <div>
                This is an API client
            </div>
        )
    }
}
export default Parent
/*
Object
error: null
isLoaded: true
todos: Array(200)
[0 … 99]
0: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
1: {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false}
2: {userId: 1, id: 3, title: "fugiat veniam minus", completed: false}
*/
```

Now to render the data also

```jsx
render(){
    const { error, isLoaded, todos } = this.state;
    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading . . . </div>
    } else {
        return(
            <ul>
                {todos.map(todo=>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        )    
    }
}
/*
API Client
delectus aut autem
quis ut nam facilis et officia qui
fugiat veniam minus
*/
```

## API Post

Now can we POST data?

Let's use https://jsonplaceholder.typicode.com/users for now although I'm not sure if we can actually return a new user id

First of all set up the code to read data using API Get 

```jsx
import React from 'react'
class ApiPost extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            users:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    isLoaded:true,
                    users:data
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
    render(){
        const { error, isLoaded, users } = this.state
        if(error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return(
                <div>
                    <h2>API Post New User</h2>
                    <ul>
                        {users.slice(0,3).map(user=>(
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div> 
            )
        }
    }
}
export default ApiPost
```

Next to do a `post` we install `axios`

```js
yarn add axios
yarn start
```

and after a lot of work we end up with a working API POST page

```jsx
import React from 'react'
import axios from 'axios'
class ApiPost extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            users:[],
            user:null,
            fullName:''
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    error:null,
                    isLoaded:true,
                    users:data,
                    user:null,
                    fullName:''
                })
            },
            error=>{
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        );
        const user = {name:"Bob"};
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response => {
                console.log(response);
                console.log(response.data)
                this.setState({ 
                    user:response.data
                    
                }); 
            });
    }
    onClearUsers = () => {
        this.setState({users:[]})
    }
    onChangeUserName = event => {
        this.setState({fullName:event.target.value})
        console.log(event.target.value)
    }
    onAddUser = () => {
        let user = {
            name:this.state.fullName
        }
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
    render(){
        const { error, isLoaded, users } = this.state
        if(error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return(
                <div>
                    <h2>API Post New User</h2>
                    <ul>
                        {users.map(user=>(
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                    <input type="text" value={this.state.fullName} onChange={this.onChangeUserName} placeholder='Full Name' />
                    <button type='button' onClick={this.onAddUser} disabled={!this.state.fullName}>Add User</button>
                    <button type='button' onClick={this.onClearUsers}>Clear Users</button>
                </div> 
            )
        }

    }
}
export default ApiPost
```

## API Put

Now we can look at API Put for example at https://www.robinwieruch.de/react-state-array-add-update-remove and https://www.robinwieruch.de/react-update-item-in-list

Create a new react application

```js
create-react-app api-put-01
cd api-put-01
yarn add axios react-router-dom
yarn start
```

Add in this code

```jsx
onDeleteUserSubmit = event => {
    event.preventDefault()
    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(response=>{
            console.log(`response has status ${response.status}`)
            console.log(response)
            console.log(response.data)
            let users = this.state.users.filter(user=>{
                return user.id != this.state.id
            })
            console.log(users)
            this.setState({
                users,
                id:''
            })
        })
}
<form onSubmit={this.onDeleteUserSubmit}>
    ID<input type="text" name="id" onChange={this.onDeleteUser} />
    <button type="submit">Delete User</button>
</form>
```

The final code for a crude delete is here

```jsx
import React from 'react'
import axios from 'axios'
class ApiPost extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            users:[],
            user:null,
            fullName:'',
            id:''
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    error:null,
                    isLoaded:true,
                    users:data,
                    user:null,
                    fullName:''
                })
            },
            error=>{
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        );
        const user = {name:"Bob"};
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response => {
                console.log(response);
                console.log(response.data)
                this.setState({ 
                    user:response.data
                    
                }); 
            });
    }
    onChangeUserName = event => {
        this.setState({fullName:event.target.value})
        console.log(event.target.value)
    }
    onClearUsers = () => {
        this.setState({users:[]})
    }
    onAddUser = () => {
        let user = {
            name:this.state.fullName
        }
        let users = this.state.users
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response => {
                user = response.data
                const idMax = this.state.idMax+1
                user.id = this.state.idMax
                console.log(user)
                users = [...this.state.users, user]
                console.log(users)
                this.setState({ 
                    user,
                    users,
                    idMax
                })
            });
    }
    onDeleteUser = event => {
        this.setState({id:event.target.value})
    }
    onDeleteUserSubmit = event => {
        event.preventDefault()
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(response=>{
                console.log(`response has status ${response.status}`)
                console.log(response)
                console.log(response.data)
                let users = this.state.users.filter(user=>{
                    return user.id != this.state.id
                })
                console.log(users)
                this.setState({
                    users,
                    id:''
                })
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
                    <h2>API Delete User</h2>
                    <ul>
                        {users.map(user=>(
                            <li key={user.id}>{user.id} - {user.name}</li>
                        ))}
                    </ul>
                    <input type="text" value={this.state.fullName} onChange={this.onChangeUserName} placeholder='Full Name' />
                    <button type='button' onClick={this.onAddUser} disabled={!this.state.fullName}>Add User</button>
                    <button type='button' onClick={this.onClearUsers}>Clear Users</button>
                    <form onSubmit={this.onDeleteUserSubmit}>
                        ID<input type="text" name="id" onChange={this.onDeleteUser} />
                        <button type="submit">Delete User</button>
                    </form>
                </div> 
            )
        }

    }
}
export default ApiDelete
```

## Async Delete

We can modify the code slightly to have an async delete.  Just taking this tutorial as a lead for this work, although creating my own example from the lead in the tutorial https://www.robinwieruch.de/react-remove-item-from-list

```jsx
onDeleteUserSubmit = async event => {
    event.preventDefault()
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
    console.log(`response has status ${response.status}`)
    console.log(response)
    console.log(response.data)
    let users = this.state.users.filter(user=>user.id != this.state.id)
    console.log(users)
    this.setState({
        users,
        id:'',
        firstName:'',
        user:null
    })
}
```

## API Delete

We can now move forwards with deleting a user by adding a button on every user which stores the id of that user, to make it much easier to delete a user

```jsx
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
render(){
    const { error, isLoaded, users } = this.state
    if(error) {
        return <div>Error : {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return(
            <div>
                <h2>API Delete User</h2>
                <ul>
                    {users.map(user=>(
                        <li key={user.id}>{user.id} - {user.name}<button value={user.id} onClick={this.removeUser}>delete</button></li>
                    ))}
                </ul>
                <input type="text" value={this.state.fullName} onChange={this.onChangeUserName} placeholder='Full Name' />
                <button type='button' onClick={this.onAddUser} disabled={!this.state.fullName}>Add User</button>
                <button type='button' onClick={this.onClearUsers}>Clear Users</button>
                <form onSubmit={this.onDeleteUserSubmit}>
                    ID<input type="text" name="id" onChange={this.onDeleteUser} />
                    <button type="submit">Delete User</button>
                </form>
            </div> 
        )
    }
}
```

## API Insert with Max ID

We now have a problem in that when we delete a user, we are taking the new id from the length of the array.  This was OK before we started deleting users!

To fix this I have added a new idMax item in state, and we want to update this
- on creation - go through the array and find the max value
- on adding a new user - increment this max value by 1 and again keep it in state

Here is the new code to add a user and refer to the maximum id so we are not bothered when we start deleting users

```jsx
import React from 'react'
import axios from 'axios'
class ApiDelete2 extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            users:[],
            user:null,
            fullName:'',
            id:'',
            idMax:''
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
                    fullName:'',
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
        this.setState({fullName:event.target.value})
        console.log(event.target.value)
    }
    onClearUsers = () => {
        this.setState({users:[]})
    }
    onAddUser = () => {
        let user = {
            name:this.state.fullName
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
    onDeleteUser = event => {
        this.setState({id:event.target.value})
    }
    onDeleteUserSubmit = async event => {
        event.preventDefault()
        const id = this.state.id
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
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
    render(){
        const { error, isLoaded, users } = this.state
        if(error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return(
                <div>
                    <h2>API Delete User</h2>
                    <p>Max user id is {this.state.idMax}</p>
                    <ul>
                        {users.map(user=>(
                            <li key={user.id}>{user.id} - {user.name}<button value={user.id} onClick={this.removeUser}>delete</button></li>
                        ))}
                    </ul>
                    <input type="text" value={this.state.fullName} onChange={this.onChangeUserName} placeholder='Full Name' />
                    <button type='button' onClick={this.onAddUser} disabled={!this.state.fullName}>Add User</button>
                    <button type='button' onClick={this.onClearUsers}>Clear Users</button>
                    <form onSubmit={this.onDeleteUserSubmit}>
                        ID<input type="text" name="id" onChange={this.onDeleteUser} />
                        <button type="submit">Delete User</button>
                    </form>
                </div> 
            )
        }

    }
}
export default ApiDelete2
```

Now even when we remove a user we are retaining the maximum user value

The final stage now is to change our delete button into a proper `delete` icon

index.html

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>API Put Data</title>
    <style>
      .iconDelete{
        width:0.7vw;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

And the full application up to this point which lists, adds and deletes users is

```jsx
import React from 'react'
import axios from 'axios'
class ApiDelete2 extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            users:[],
            user:null,
            fullName:'',
            id:'',
            idMax:''
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
                    fullName:'',
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
        this.setState({fullName:event.target.value})
        console.log(event.target.value)
    }
    onClearUsers = () => {
        this.setState({users:[]})
    }
    onAddUser = () => {
        let user = {
            name:this.state.fullName
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
    render(){
        const { error, isLoaded, users } = this.state
        if(error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return(
                <div>
                    <h2>API Delete User</h2>
                    <p>Max user id is {this.state.idMax}</p>
                    <ul>
                        {users.map(user=>(
                            <li key={user.id}>{user.id} - {user.name} &nbsp; 
                                <input type="image" src="data:image/png;base64,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" className="iconDelete" value={user.id} onClick={this.removeUser} />
                            </li>
                        ))}
                    </ul>
                    <input type="text" value={this.state.fullName} onChange={this.onChangeUserName} placeholder='Full Name' />
                    <button type='button' onClick={this.onAddUser} disabled={!this.state.fullName}>Add User</button>
                    <button type='button' onClick={this.onClearUsers}>Clear Users</button>
                </div> 
            )
        }

    }
}
export default ApiDelete2
```

<p align="center"><img src="images/api-create-read-delete.png" /></p>

## API Edit 

Now let's see if we can edit a user!!!

The full and final application is here!!!

```jsx
import React from 'react'
import axios from 'axios'
class ApiPut extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            users:[],
            user:null,
            name:'',
            id:'',
            idMax:''
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
                </div> 
            )
        }
    }
}
export default ApiPut
```


