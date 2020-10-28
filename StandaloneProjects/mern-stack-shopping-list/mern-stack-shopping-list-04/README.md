# MERN Stack Shopping List Application

## Contents

- [MERN Stack Shopping List Application](#mern-stack-shopping-list-application)
  - [Contents](#contents)
  - [Author](#author)
  - [Introduction](#introduction)
    - [Video URLs](#video-urls)
    - [Features](#features)
  - [Install](#install)
  - [Libraries](#libraries)
  - [database mlab](#database-mlab)
  - [server.js](#serverjs)
  - [Run](#run)
  - [model in models\Item.js](#model-in-modelsitemjs)
  - [api at routes\api\items.js](#api-at-routesapiitemsjs)
  - [post data](#post-data)
  - [POSTMAN](#postman)
  - [delete](#delete)
  - [update](#update)
  - [Create React App](#create-react-app)
    - [package.json](#packagejson)
    - [nodemon](#nodemon)
    - [run](#run-1)
  - [concurrently (set in server)](#concurrently-set-in-server)
    - [server](#server)
    - [client](#client)
    - [concurrently](#concurrently)
  - [stop the browser opening new 3000 port window each time in the client app](#stop-the-browser-opening-new-3000-port-window-each-time-in-the-client-app)
    - [.env (in client)](#env-in-client)
  - [React app](#react-app)
    - [remove index.css and content of App.css](#remove-indexcss-and-content-of-appcss)
    - [Strip out App.js](#strip-out-appjs)
  - [Start to build React app](#start-to-build-react-app)
    - [Add Bootstrap](#add-bootstrap)
    - [Add components\AppNavbar.js](#add-componentsappnavbarjs)
    - [Add it to App.js](#add-it-to-appjs)
  - [Add Shopping List in components\ShoppingList.js](#add-shopping-list-in-componentsshoppinglistjs)
    - [import into App.js](#import-into-appjs)
    - [Display items now in ShoppingList](#display-items-now-in-shoppinglist)
    - [add delete](#add-delete)
    - [Add fade in App.css which is global CSS](#add-fade-in-appcss-which-is-global-css)
  - [Store data in redux reducer](#store-data-in-redux-reducer)
    - [install redux on client](#install-redux-on-client)
    - [add src\store.js](#add-srcstorejs)
    - [create reducers\index.js](#create-reducersindexjs)
    - [Add store and reducer to App.js](#add-store-and-reducer-to-appjs)
    - [add reducers\itemReducer.js](#add-reducersitemreducerjs)
    - [create actions\types.js - hold types or constants which we export](#create-actionstypesjs---hold-types-or-constants-which-we-export)
    - [import action types into itemReducer.js](#import-action-types-into-itemreducerjs)
    - [add actions\itemActions.js](#add-actionsitemactionsjs)
    - [Now remove fixed state from ShoppingList component](#now-remove-fixed-state-from-shoppinglist-component)
      - [ShoppingList.js](#shoppinglistjs)
      - [add a delete action update delete and add buttons now](#add-a-delete-action-update-delete-and-add-buttons-now)
        - [Recap](#recap)
      - [add delete action](#add-delete-action)
        - [shoppingList](#shoppinglist)
      - [Now work on ADD item at components\itemModal.js](#now-work-on-add-item-at-componentsitemmodaljs)
      - [Import into App.js](#import-into-appjs-1)
      - [Update itemActions.js](#update-itemactionsjs)
      - [Update itemReducer.js](#update-itemreducerjs)
    - [We have now got adding an item working as well.  Because I am not sure what has changed I am going to paste all the relevant file here](#we-have-now-got-adding-an-item-working-as-well-because-i-am-not-sure-what-has-changed-i-am-going-to-paste-all-the-relevant-file-here)
      - [App.js](#appjs)
      - [itemActions.js](#itemactionsjs)
      - [itemReducer.js](#itemreducerjs)
      - [itemModal.js (in part)](#itemmodaljs-in-part)
  - [Connect The Back End](#connect-the-back-end)
    - [Add LOADING type](#add-loading-type)
    - [Amend reducer by emptying the array](#amend-reducer-by-emptying-the-array)
    - [amend itemActions.js](#amend-itemactionsjs)
    - [install axios on client!](#install-axios-on-client)
    - [itemAction](#itemaction)
    - [itemReducer.js](#itemreducerjs-1)
  - [Add an item to the API database now](#add-an-item-to-the-api-database-now)
    - [itemModal - remove uuid](#itemmodal---remove-uuid)
    - [itemActions.js](#itemactionsjs-1)
    - [itemModal](#itemmodal)
  - [Work On The Delete](#work-on-the-delete)
    - [ShoppingList - change id to _id](#shoppinglist---change-id-to-id)
    - [itemActions](#itemactions)
    - [itemReducer](#itemreducer)
  - [App is now working with everything apart from update which I could probably add in if I wanted.](#app-is-now-working-with-everything-apart-from-update-which-i-could-probably-add-in-if-i-wanted)
  - [Update in the evening.](#update-in-the-evening)
  - [Deploy To Heroku](#deploy-to-heroku)
    - [public\index.html - rename the `title`](#publicindexhtml---rename-the-title)
    - [Build the React application with `npm run build`](#build-the-react-application-with-npm-run-build)
    - [Edit server.js for any other route apart from /api/items route to be redirected to our front end React application which is fair enough!](#edit-serverjs-for-any-other-route-apart-from-apiitems-route-to-be-redirected-to-our-front-end-react-application-which-is-fair-enough)
    - [Edit server `package.json`](#edit-server-packagejson)
  - [On to Heroku!  Use the `Heroku Cli`](#on-to-heroku-use-the-heroku-cli)
  - [Ignoring the build failures for now; carrying on with the rest of the app!](#ignoring-the-build-failures-for-now-carrying-on-with-the-rest-of-the-app)
  - [JWT](#jwt)
  - [models\User.js](#modelsuserjs)
  - [Add routing in routes\api\users.js](#add-routing-in-routesapiusersjs)
    - [Register this route in server.js](#register-this-route-in-serverjs)
  - [Post a new user in users.js](#post-a-new-user-in-usersjs)
    - [BodyParser is no longer required by express so can remove it in `server.js` and remove body parser](#bodyparser-is-no-longer-required-by-express-so-can-remove-it-in-serverjs-and-remove-body-parser)
    - [Upgrading the mongo connector in server.js](#upgrading-the-mongo-connector-in-serverjs)
    - [install `bcryptjs`](#install-bcryptjs)
  - [Create a new user using Postman in users.js](#create-a-new-user-using-postman-in-usersjs)
  - [Get users in users.js](#get-users-in-usersjs)
  - [Now look at jwt.io tokens](#now-look-at-jwtio-tokens)
  - [Storing keys in config\default.json](#storing-keys-in-configdefaultjson)
  - [Obtaining a JWT Token when we register a new user in users.js](#obtaining-a-jwt-token-when-we-register-a-new-user-in-usersjs)
    - [JWT.IO analysis of token](#jwtio-analysis-of-token)
  - [Authentication when we log in - using routes\api\auth.js](#authentication-when-we-log-in---using-routesapiauthjs)
    - [server.js routes](#serverjs-routes)
    - [full auth.js returning a token in postman](#full-authjs-returning-a-token-in-postman)
  - [Validate Password as plain text against password stored in bcrypt](#validate-password-as-plain-text-against-password-stored-in-bcrypt)
    - [Invalid username / password is rejected](#invalid-username--password-is-rejected)
    - [Create authenticated routes at middleware\auth.js](#create-authenticated-routes-at-middlewareauthjs)
    - [add middleware into routes\api\items.js](#add-middleware-into-routesapiitemsjs)
    - [test protected route in `routes\api\items.js` using Postman](#test-protected-route-in-routesapiitemsjs-using-postman)
    - [Provide a token manually using Postman](#provide-a-token-manually-using-postman)
  - [Check for the current user in `auth.js`](#check-for-the-current-user-in-authjs)
  - [Summary So Far](#summary-so-far)
  - [Pick up again from where we left off](#pick-up-again-from-where-we-left-off)
  - [Run the app on 5000 (server) and 3000 (client)](#run-the-app-on-5000-server-and-3000-client)
  - [Work on `state`](#work-on-state)
  - [client\src\actions\types.js](#clientsrcactionstypesjs)
  - [client\src\actions\reducers\index.js](#clientsrcactionsreducersindexjs)
  - [client\src\actions\reducers\errorReducer.js](#clientsrcactionsreducerserrorreducerjs)
  - [client\src\actions\reducers\authReducer.js](#clientsrcactionsreducersauthreducerjs)
    - [Running app](#running-app)
  - [client\src\actions\authActions.js](#clientsrcactionsauthactionsjs)
  - [client\src\actions\errorActions.js](#clientsrcactionserroractionsjs)
  - [add to App.js and ensure we call the authActions every time](#add-to-appjs-and-ensure-we-call-the-authactions-every-time)
  - [amend back end auth.js by one line](#amend-back-end-authjs-by-one-line)
    - [What is working?](#what-is-working)
  - [Build out login and registration components in client\src\components\auth folder\RegisterModal.js](#build-out-login-and-registration-components-in-clientsrccomponentsauth-folderregistermodaljs)
    - [In RegisterModal.js 1) On Click call an action in the authActions file called Register 2) Add as prop](#in-registermodaljs-1-on-click-call-an-action-in-the-authactions-file-called-register-2-add-as-prop)
    - [Create function inside src\actions\authActions.js](#create-function-inside-srcactionsauthactionsjs)
    - [update onSubmit in RegisterModal.js](#update-onsubmit-in-registermodaljs)
    - [display error to user on fail to submit](#display-error-to-user-on-fail-to-submit)
    - [Getting Tokens Working](#getting-tokens-working)
  - [Log Out in src\components\auth\Logout.js](#log-out-in-srccomponentsauthlogoutjs)
  - [Log out in `authActions.js`](#log-out-in-authactionsjs)
    - [Add Logout To AppNavbar.js](#add-logout-to-appnavbarjs)
  - [Finish the register and logout all working fine!](#finish-the-register-and-logout-all-working-fine)


## Author

Philip Anderson

16 May 2020

## Introduction

Using [@TraversyMedia](https://www.youtube.com/user/TechGuyWeb) for this tutorial which is actually quite long to build a full stack MERN app which taps into MongoDB hosted on MLAB.

Attempting to rebuild from scratch every time, just for a season to get my skils up and running

### Video URLs

Video series is https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE

1. Intro https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE
2. API https://www.youtube.com/watch?v=5yTazHkDR4o&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=2
3. Set up React front end 
   https://www.youtube.com/watch?v=R54neaLznFA&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=3
4. Connect the React front end to the server.js API back end for GET
5. Connect the React front end to the server.js API back end for POST
6. Connect the React front end to the server.js API back end for DELETE
7. 

### Features

- ReactStrap
- ReactTransitionGroup
- Heroku
- Redux
- Reducer

## Install

```json
{
  "name": "mern-stack-shopping-list-02",
  "version": "1.0.2",
  "description": "tutorial to learn react with mongo",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "serve": "nodemon server.js"
  },
  "author": "philip anderson",
  "license": "MIT"
}
```

## Libraries

```powershell
yarn add express body-parser mongoose concurrently; yarn add -D nodemon
```

## database mlab

```
New => Amazon => Sandbox => EU => done
Create user
Copy mongo URI 
```


## server.js

```js
const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')

//const items = require('./routes/api/items')

const app = express()

app.use(bodyParser.json())

db = process.env.REACT_APP_mongoURI

mongoose
    .connect(db, {useNewUrlParser:true})
    .then( () => { 
        console.log('MongoDB connected')  
    })
    .catch(err => {
        console.log(err)
    })


// anything matching this route referred to items variable
//app.use('/api/items',items)

const port = process.env.REACT_APP_PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`) 
}) 
```

## Run

```powershell
clear;cd C:\github\react\StandaloneProjects\mern-stack-shopping-list-02; yarn serve
```

## model in models\Item.js

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = Item = mongoose.model('item',ItemSchema)
```

## api at routes\api\items.js

```js
const express = require('express')
const router = express.Router()
// Item model
const Item = require('../../models/Item')
// @route GET api/items
// @desc get all items
// @access Public
// note that / represents api/items as it's already been reached to this point
// sort by date descending 
router.get('/', (req, res) => {
    Item.find()
        .sort({date:-1})
        .then(items => res.json(items))
})
module.exports = router
```

We can now obtain data at [http://localhost:5000/api/items](http://localhost:5000/api/items)

## post data

```js
// @route POST api/items
// @desc add an item
// @access Public
router.post('/',(req,res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})
```

## POSTMAN

POST to http://localhost:3000/api/items
content-type:application/json

body RAW

```json
{
    "name": "Test",
}
```

Can now add items

## delete

```js
// @route DELETE api/items/:id
// @desc delete item
// @access Public
router.delete('/:id',(req,res) => {
    Item.findByIdAndDelete(req.params.id)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})
```

```
DELETE http://localhost:3000/api/items/5ebeec711c502d0188165bb0
```

## update

```js
// @route PUT api/items/:id
// @desc update item
// @access Public
router.put('/:id',(req,res) => {
    const updatedItem = new Item({
        _id:req.params.id,
        name: req.body.name,
        date:req.body.date,
        __v:req.body.__v
    })
    Item.findByIdAndUpdate(req.params.id,updatedItem)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})
```

## Create React App

```
npx create-react-app client; cd client; yarn start
```

### package.json

```json
scripts:{
  "serve": "nodemon react-scripts start",
},
"proxy":"http://localhost:5000",
```

### nodemon

```
 yarn add -D nodemon
```

### run

```
clear;cd C:\github\react\StandaloneProjects\mern-stack-shopping-list-02\client;yarn serve
```

## concurrently (set in server)

### server

```json
  "scripts": {
    "start": "node server.js",
    "serve": "nodemon server.js",
    "client":"npm start --prefix client" 
  },
```

### client

```js
  "scripts": {
    "start": "react-scripts start",
    "serve": "nodemon start",
  },
```

### concurrently

```json
  "scripts": {
    "start": "node server.js",
    "serve": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run serve\" \"npm run client\""
  },
```

## stop the browser opening new 3000 port window each time in the client app

### .env (in client)

```
BROWSER=none
```

## React app

### remove index.css and content of App.css

### Strip out App.js

```js
import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Hello World!!!!</h1>
    </div>
  );
}
export default App;
```

## Start to build React app

https://www.youtube.com/watch?v=R54neaLznFA&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=3 at 11:25

Note: uuid creates temporary id before connect to api and get id from there

```
cd client; yarn add bootstrap reactstrap uuid react-transition-group
```

### Add Bootstrap

```
import 'bootstrap/dist/css/bootstrap.min.css' 
```

Bootstrap is now active

### Add components\AppNavbar.js

see [https://reactstrap.github.io/components/alerts/ etc for components](https://reactstrap.github.io/components/navbar/)

```js
import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
class AppNavbar extends Component {
    state = {
        isOpen:false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    // mb-5 is margin-bottom:5 below the navbar
    // ml-auto aligns links to right
    render(){
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5" >
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="http://www.bbc.co.uk">BBC</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}
export default AppNavbar
```

### Add it to App.js

```js
import React from 'react';
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
function App() {
  return (
    <div className="App">
      <AppNavbar />
    </div>
  );
}
export default App;
```

We can now see our Navbar!


## Add Shopping List in components\ShoppingList.js

https://www.youtube.com/watch?v=fcna-jJtAXk&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=4


```js
import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem,Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid} from 'uuid';

// uuid generates id
class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'Steak' },
            { id: uuid(), name: 'Water' }
        ]
    }
    // pull out items from this.state and put it into an object
    // if(name) checks it item is present in field
    // ... is spread operator which I think picks up values from another array and inserts them here 
    render(){
        const { items } = this.state
        return(
            <Container>
               <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick= {()=>{
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state => ({
                                items: [ ...state.items, {id: uuid() , name } ]
                            }))
                        }
                    }}
                    >Add Item
                </Button>
            </Container>
        );
    }
}
export default ShoppingList;
```

### import into App.js

```js
import React from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}
export default App;
```

We can now see the existing and new items in state using Chrome React Dev Tools 

<img src="react-state.png" />

### Display items now in ShoppingList

```js
import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem,Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid} from 'uuid';
// uuid generates id
class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'Steak' },
            { id: uuid(), name: 'Water' }
        ]
    }
    // pull out items from this.state and put it into an object
    // if(name) checks it item is present in field
    // ... is spread operator which I think picks up values from another array and inserts them here 
    render(){
        const { items } = this.state
        return(
            <Container>
               <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick= {()=>{
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state => ({
                                items: [ ...state.items, {id: uuid(), name} ]
                            }))
                        }
                    }}
                    >Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( ({id,name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                  <Button>&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
export default ShoppingList;
```

We can now see the items on the page as we add them.  Nice!

### add delete 

```js
import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem,Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid} from 'uuid';
// uuid generates id
class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'Steak' },
            { id: uuid(), name: 'Water' }
        ]
    }
    // pull out items from this.state and put it into an object
    // if(name) checks it item is present in field
    // ... is spread operator which I think picks up values from another array and inserts them here 
    render(){
        const { items } = this.state
        return(
            <Container>
               <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick= {()=>{
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state => ({
                                items: [ ...state.items, {id: uuid(), name} ]
                            }))
                        }
                    }}
                    >Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( ({id,name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {/* delete button deletes item by creating a new array from every item */}
                                    {/* which does not map deleted item */}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={ () => {
                                            this.setState(state => ({
                                                items: state.items.filter(listItem => listItem.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
export default ShoppingList;
```

We can now add and delete items

### Add fade in App.css which is global CSS

```css
.remove-btn{
    margin-right:0.5rem;
}
.fade-enter{
    opacity:0.01;
}
.fade-enter-active{
    opacity:1.0;
    transition: opacity 250ms ease-in;
}
.fade-exit{
    opacity:1;

}

.fade-exit-active{
    opacity:0.01;
    transition: opacity 250ms ease-in;
}
```


## Store data in redux reducer

https://www.youtube.com/watch?v=iI5h4-pChho&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=5

Back end is now complete with shopping list and add and delete items

Redux adds a separate modal component which interacts with redux state

### install redux on client 

https://redux.js.org/

```
cd client;yarn add redux react-redux redux-thunk
```

add Redux to Chrome Dev Tools

### add src\store.js

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {};
const middleware = [ thunk ];
// spread operator adds in array items as parameters to method nicely
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;
```

### create reducers\index.js

A reducer is a place we combine different ?middleware?

```js
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
export default combineReducers({
    item: itemReducer
});
```

### Add store and reducer to App.js

```js
import React from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}
export default App;
```

### add reducers\itemReducer.js

itemReducer is where we check our actions eg GET, POST which dispatches to our reducer

### create actions\types.js - hold types or constants which we export

```js
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
```

### import action types into itemReducer.js

```js
import {v4 as uuid} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' }
    ]
}
export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}
```

### add actions\itemActions.js

```js
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';
export const getItems = () => {
    return {
        type:GET_ITEMS
    }
}
```

### Now remove fixed state from ShoppingList component

1. Remove state array 
2. ...lost interest at this point!

#### ShoppingList.js

```js
import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem,Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid} from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
// uuid generates id
class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }
    // pull out items from this.state and put it into an object
    // if(name) checks it item is present in field
    // ... is spread operator which I think picks up values from another array and inserts them here 
    render(){
        // item is whole object
        // items is array within item!?!?!    ie  this.props.item.items
        const { items } = this.props.item;
        return(
            <Container>
               <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick= {()=>{
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state => ({
                                items: [ ...state.items, {id: uuid(), name} ]
                            }))
                        }
                    }}
                    >Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( ({id,name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {/* delete button deletes item by creating a new array from every item */}
                                    {/* which does not map deleted item */}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={ () => {
                                            this.setState(state => ({
                                                items: state.items.filter(listItem => listItem.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
ShoppingList.propTypes = {
    getItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
});
export default connect(mapStateToProps, { getItems })(ShoppingList);
```

We are now getting data from state.

*Note : Add and Delete are not working yet*

#### add a delete action update delete and add buttons now

https://www.youtube.com/watch?v=TO6akRGXhx8&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=6

##### Recap

OK so we have 

- local store with list, add and delete working
- redux state with list working

#### add delete action

##### shoppingList

update the reducer

```js
// note that action.payload holds the id
case DELETE_ITEM:
    return {
        ...state,
        items:state.items.filter(listItem=>listItem.id !== action.payload)
    }
```

remove uuid and add button in shoppingList

```js
import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem,Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
// uuid generates id
class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };
    // pull out items from this.state and put it into an object
    // if(name) checks it item is present in field
    // ... is spread operator which I think picks up values from another array and inserts them here 
    render(){
        // item is whole object
        // items is array within item!?!?!    ie  this.props.item.items
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( ({id,name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {/* delete button deletes item by creating a new array from every item */}
                                    {/* which does not map deleted item */}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this,id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
ShoppingList.propTypes = {
    getItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
});
export default connect(mapStateToProps, { getItems, addItem, deleteItem })(ShoppingList);
```

#### Now work on ADD item at components\itemModal.js

We are adding a modal from reactstrap.github.io

```js
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
// by default modal is not open so set to false
class ItemModal extends Component {
    state = { 
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    // e is an event parameter 
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render(){
        return(
            <div>
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                {/* name matches field from state */}
                                {/* onChange fired on every keystroke */}
                                <Input type="text" name="name" placeholder="Add shopping item"
                                   onChange={this.onChange} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default connect()(ItemModal);
```

#### Import into App.js

```js
import React from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';

import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
import { Container } from 'reactstrap';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>    
      </div>
    </Provider>
  );
}
export default App;
```

We now should have an add modal popping up although doing nothing.

```js
import React, { Component } from 'react';
import { v4 as uuid} from 'uuid';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
// by default modal is not open so set to false
class ItemModal extends Component {
    state = { 
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    // e is an event parameter 
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuid(),
            name: this.state.name
        }
        // add item via addItem action
        this.props.addItem(newItem);
        // close modal
        this.toggle();
    }
    render(){
        return(
            <div>
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                {/* name matches field from state */}
                                {/* onChange fired on every keystroke */}
                                <Input type="text" name="name" placeholder="Add shopping item"
                                   onChange={this.onChange} />
                                   <Button color="dark" block style={{ marginTop:'2rem' }}  >Add New Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default connect()(ItemModal);
```

#### Update itemActions.js

```js

```

#### Update itemReducer.js

```js
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';
export const getItems = () => {
    return {
        type:GET_ITEMS
    }
}
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id 
    }
}
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}
```

### We have now got adding an item working as well.  Because I am not sure what has changed I am going to paste all the relevant file here

#### App.js

```js
import React from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';

import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
import { Container } from 'reactstrap';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>    
      </div>
    </Provider>
  );
}
export default App;
```

#### itemActions.js

```js
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';
export const getItems = () => {
    return {
        type:GET_ITEMS
    }
}
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id 
    }
}
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item

    }
}
```

#### itemReducer.js

```js
import {v4 as uuid} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' },
        { id: uuid(), name: 'Juice' }
    ]
}
export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        // note that action.payload holds the id
        case DELETE_ITEM:
            return {
                ...state,
                items:state.items.filter(listItem=>listItem.id !== action.payload)
            }
        {/* // [action.payload] holds new item coming in on ADD */}    
        case ADD_ITEM: {
            return {
                ...state,
                items: [action.payload, ...state.items]  
            }
        }
        default:
            return state;
    }
}
```


#### itemModal.js (in part)

```js
// e is an event parameter 
onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}
onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        id: uuid(),
        name: this.state.name
    }
    // add item via addItem action
    this.props.addItem(newItem);
    // close modal
    this.toggle();
}
...
<Form onSubmit={this.onSubmit}>
    <FormGroup>
        <Label for="item">Item</Label>
        {/* name matches field from state */}
        {/* onChange fired on every keystroke */}
        <Input type="text" name="name" placeholder="Add shopping item"
            onChange={this.onChange} />
            <Button color="dark" block style={{ marginTop:'2rem' }}  >Add New Item</Button>
    </FormGroup>
</Form>
```


## Connect The Back End

The front end is now fully working and the back end is fully working so we want to connect them up.

https://www.youtube.com/watch?v=431EvDGKwks&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=7


### Add LOADING type

```js
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ITEMS_LOADING = 'ITEMS_LOADING';
```


### Amend reducer by emptying the array

```js
import {v4 as uuid} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';
// loading = true when data is being loaded from api
const initialState = {
    items: [],
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        // note that action.payload holds the id
        case DELETE_ITEM:
            return {
                ...state,
                items:state.items.filter(listItem=>listItem.id !== action.payload)
            }
        {/* // [action.payload] holds new item coming in on ADD */}    
        case ADD_ITEM: {
            return {
                ...state,
                items: [action.payload, ...state.items]  
            }
        }
        case ITEMS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state;
    }
}
```

### amend itemActions.js

```js
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
export const getItems = () => {
    return {
        type:GET_ITEMS
    }
}
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id 
    }
}
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item

    }
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
```

### install axios on client!

```
cd client;yarn add axios
```

### itemAction

```js
import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
// dispatch sends the type along with the request for data
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('./api/items')
        .then( res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )        
}
```

### itemReducer.js

```js
import {v4 as uuid} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';
// loading = true when data is being loaded from api
const initialState = {
    items: [],
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        // note that action.payload holds the id
        case DELETE_ITEM:
            return {
                ...state,
                items:state.items.filter(listItem=>listItem.id !== action.payload)
            }
        {/* // [action.payload] holds new item coming in on ADD */}    
        case ADD_ITEM: {
            return {
                ...state,
                items: [action.payload, ...state.items]  
            }
        }
        case ITEMS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state;
    }
}
```

And now we have the API data showing on our app!

Happy days!

Although it seems harder work than Vue

!!!

Just my personal opinion I think!!!

## Add an item to the API database now

### itemModal - remove uuid

### itemActions.js

```js
// res.data is the new item 
export const addItem = (item) => dispatch => {
    axios
        .post('/api/items', item)
        .then( res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
}
```

### itemModal

```js
onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        name: this.state.name
    }
    // add item via addItem action
    this.props.addItem(newItem);
    // close modal
    this.toggle();
}
```

Items are now adding and permanently staying in the database

## Work On The Delete

### ShoppingList - change id to _id

### itemActions

```js
export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then( res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
}
```

### itemReducer

```js
case DELETE_ITEM:
    return {
        ...state,
        items:state.items.filter(listItem=>listItem._id !== action.payload)
    }
{/* // [action.payload] holds new item coming in on ADD */}    
```


## App is now working with everything apart from update which I could probably add in if I wanted.

## Update in the evening.

Up to this point I have coded everything, over 3000 lines of code in one day.  I've had a sleep and am ready for another session to see if I can continue on this series to complete as much as possible of it today, which involves the next stage of deployment to heroku.

I could maybe even try and deploy this to my favourite as well because I know how it all works ie deploy to Netlify!!!

Note that actually my server back end does not need to be running all of the time and actually could be well suited to using it as a serverless function running in the cloud which should be quite easy I would  have throught.  But that will have to wait for today.

Also I am not too sure about how to build both a server and a client so they are both running together.  My instinct tells me to separate them out so they are two completely separate applications, then run them in completely separate spaces and just get them to talk to each other since effectively we can just change the URLs required and that should not be too much of a hassle.  

Anyway despite these ideas for tonight it's best probably not to be too adventurous but just to follow Brad Traversy as he teaches me how to get things done!

Happy coding and Happy days!

I took a dump of the code and notes written today and it gave me a count of 3536 words plus what I have just written (around 3799 words!) so that is good going !  

Let's see how far I can get with this application all in one day.  It's 652pm now so another couple of hours to go.

:)

Phil Anderson 16 May 2020

:)

Coding is great!!!


*Note that everything up to now refers to the version 2 but I have cloned the whole thing and made version 3*

## Deploy To Heroku

### public\index.html - rename the `title`

### Build the React application with `npm run build`

```js
yarn build
```

Also checking out a bit of reading here on deployment https://create-react-app.dev/docs/deployment/

Finally with our build we do not want to do the build locally and push to Heroku - no!  We want to delay the build and have it as a post-deployment script which runs after we have pushed the files up to Heroku.  This makes sense as it will keep the file sizes down.

So we can for now remove the `build` folder we have just created, to save space.

### Edit server.js for any other route apart from /api/items route to be redirected to our front end React application which is fair enough!

```js
const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const path = require ('path')

const items = require('./routes/api/items')

const app = express()

app.use(bodyParser.json())

db = process.env.REACT_APP_mongoURI

mongoose
    .connect(db, {useNewUrlParser:true})
    .then( () => { 
        console.log('MongoDB connected')  
    })
    .catch(err => {
        console.log(err)
    })


// anything matching this route referred to items variable
app.use('/api/items',items)

console.log(`Node environment is ${process.env.NODE_ENV}`);
// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static('client\build'))
    // any path not met by app.use /api/items above will use this route in production
    app.get('*',(req, res) => {
        // path.resolve takes us to /client/build/index.html file to see react website
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000 // process.env.REACT_APP_PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`) 
}) 
```

### Edit server `package.json`

```json
// don't run the build script if in production
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build -- prefix client"
```
 
I am not sure if these commands will work or fail in Heroku since I've been using the `yarn` equivalents.  It should not be too hard to fix if it does fail, we will see.

## On to Heroku!  Use the `Heroku Cli` 

Download the Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli

Also have an account at [heroku.com](https://dashboard.heroku.com/apps)

```js
// from root server folder
code .gitignore // add react
git init; git add .; git commit -m "Initial Commit"
heroku login
heroku create
// https://polar-island-76270.herokuapp.com/
// verify git setup for remote
git remote -v
heroku git:remote -a polar-island-76270
git push heroku master0
```

Now the build succeeded.

The API back-end server at https://polar-island-76270.herokuapp.com/api/items is giving information!!!!

Wow!!!  This is great!!!!

The react app has not come up though so I can look into this.

There are a couple of places where I think the failure could have occurred

1) Path to Mlab database
2) NPM build scripts have been amended to suit by me - I think this is by far and away the most likely thing that has gone wrong, and the easiest to fix!

## Ignoring the build failures for now; carrying on with the rest of the app!

This is a minor point and one which I can work on later.  For now I want to press forward with some of the more interesting parts of the application like security and authentication.


## JWT 

https://www.youtube.com/watch?v=USaB1adUHM0&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=9

This is the next part of the tutorial which is exciting.

Use JWT to protect routes

## models\User.js

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    register_date:{
        type:Date,
        default:Date.now
    }
}) 
module.exports = User = mongoose.model('user',UserSchema)
```

## Add routing in routes\api\users.js

Need to be able to register a user

```js
const express = require('express')
const router = express.Router()
// Item model
const Item = require('../../models/User')
// @route GET api/users
// @desc Register new user
// @access Public
// note that / represents api/users as it's already been reached to this point
// sort by date descending 
router.get('/', (req, res) => {
    res.send('register');
})
module.exports = router
```

### Register this route in server.js

```js
const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const path = require ('path')

const app = express()

app.use(bodyParser.json())

db = process.env.REACT_APP_mongoURI

mongoose
    .connect(db, {useNewUrlParser:true, useCreateIndex:true})
    .then( () => { 
        console.log('MongoDB connected')  
    })
    .catch(err => {
        console.log(err)
    })


// routing
const items = require('./routes/api/items')
const users = require('./routes/api/users')
app.use('/api/items',items)
app.use('/api/users',users)

console.log(`Node environment is ${process.env.NODE_ENV}`);
// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static('client/build'))
    // any path not met by app.use /api/items above will use this route in production
    app.get('*',(req, res) => {
        // path.resolve takes us to /client/build/index.html file to see react website
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000 // process.env.REACT_APP_PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`) 
}) 
```

## Post a new user in users.js

```js
router.post('/',(req,res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        register_date: req.body.register_date
    })
    res.send('register')
    newUser.save()
        .then(user => res.json(user))
})
```

### BodyParser is no longer required by express so can remove it in `server.js` and remove body parser

```js
yarn remove body-parser
```

```js
app.use(express.json())
```

### Upgrading the mongo connector in server.js

```js
mongoose
    .connect(db, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true})
    .then( () => { 
        console.log('MongoDB connected')  
    })
    .catch(err => {
        console.log(err)
    })
```

### install `bcryptjs`

```js
yarn add bcryptjs
```

```js
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
// Item model
const Item = require('../../models/User')
// @route GET api/users
// @desc Register new user
// @access Public
// note that / represents api/users as it's already been reached to this point
// sort by date descending 
router.get('/', (req, res) => {
    res.send('register');
})
// router.get('/', (req, res) => {
//     User.find()
//         .sort({date:-1})
//         .then(users => res.json(users))
// })
// @route POST api/users
// @desc add a user
// @access Public
router.post('/',(req,res) => {
    const { name, email, password } = req.body;
    // validation
    if(!name || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    } 
    // check for existing user
    User.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({msg: 'User already exists'})
            const newUser = new User({ name, email, password });
        })
        // create salt and hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err,hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user=>{
                        res.json({
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        })
                    });
            });
        });

})
// @route DELETE api/items/:id
// @desc delete item
// @access Public
router.delete('/:id',(req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})
// @route PUT api/items/:id
// @desc update item
// @access Public
router.put('/:id',(req,res) => {
    const updatedUser = new User({
        _id:req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        register_date:req.body.date,
        __v:req.body.__v
    })
    User.findByIdAndUpdate(req.params.id,updatedItem)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})
module.exports = router
```

## Create a new user using Postman in users.js

```js
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
// Item model
const Item = require('../../models/User')
// @route GET api/users
// @desc Register new user
// @access Public
// note that / represents api/users as it's already been reached to this point
// sort by date descending 
router.get('/', (req, res) => {
    res.send('register');
})
// @route POST api/users
// @desc add a user
// @access Public
router.post('/',(req,res) => {
    const { name, email, password } = req.body;
    // validation

    if(!name || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    } 
    // check for existing user
    User.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({msg: 'User already exists'})
            const newUser = new User({ name, email, password });
                    // create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user=>{
                            res.json({
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        });
                });
            });
        });
});
module.exports = router
```


## Get users in users.js

We can now get all users created

```js
router.get('/', (req, res) => {
    User.find()
        .sort({date:-1})
        .then(users => res.json(users))
})
```

## Now look at jwt.io tokens

Goal is to get a token when register a new user straight away

jwt.io

jwt looks like this

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

We can decode separately the pieces.

If we go to https://www.base64decode.org/ we can decode 

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 decodes to {"alg":"HS256","typ":"JWT"}

eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ decodes to {"sub":"1234567890","name":"John Doe","iat":1516239022}

and the last part does not decode 

So the encoding type and also the payload data are both unencrypted within the JWT Token.

To generate JWT we can use `yarn add jsonwebtoken`

```js
yarn add jsonwebtoken config
```

## Storing keys in config\default.json

```json
{
    "testKey": "testValue",
    "jwtSecret": "sl_myJwtSecret"
}
```

```js
const testKey = config.get('testKey');
console.log(`testKey from config\default.json is ${testKey}`)
```

## Obtaining a JWT Token when we register a new user in users.js

```js
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// Item model
const User = require('../../models/User')
// @route GET api/users
// @desc Register new user
// @access Public
// note that / represents api/users as it's already been reached to this point
// sort by date descending 
router.get('/', (req, res) => {
    User.find()
        .sort({date:-1})
        .then(users => res.json(users))
})

// @route POST api/users
// @desc add a user
// @access Public
router.post('/',(req,res) => {
    const { name, email, password } = req.body;
    // validation

    if(!name || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    } 
    // check for existing user
    User.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({msg: 'User already exists'})
            const newUser = new User({ name, email, password });
                    // create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user=>{
                            jwt.sign({id:user.id},config.get('jwtSecret'),{expiresIn:3600},(err, token) =>{
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email,
                                        password: user.password,
                                        register_date: user.register_date,
                                        jwt
                                    } 
                                })
                            });

                        });
                });
            });
        });
});

// @route DELETE api/items/:id
// @desc delete item
// @access Public
router.delete('/:id',(req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})

// @route PUT api/items/:id
// @desc update item
// @access Public
router.put('/:id',(req,res) => {
    const updatedUser = new User({
        _id:req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        register_date:req.body.date,
        __v:req.body.__v
    })
    User.findByIdAndUpdate(req.params.id,updatedItem)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})
module.exports = router
```

When we POST a new user

```json
{
    "name": "Paul",
    "email": "phil@phil5.com",
    "password": "myPassword2"
}
```

we now get back a token

```json
{
    "token": "...this is a JSON web token here",
    "user": {
        "id": "5ec0dd61f8901f31389a3729",
        "name": "Paul",
        "email": "phil@phil5.com",
        "password": "...password here",
        "register_date": "2020-05-17T06:44:49.943Z"
    }
}
```

so I am registering a user, using bcrypt to create a salted password and also generating a jwt token as well in the process of user registration

### JWT.IO analysis of token

I can now take my token and paste it into jwt.io

We can see clearly

Header
    algorithm:   HS256
    type: JWT
Data
    id: 5ec0f8e4f8901f31389a372e
    created time: 1589704932
    expiry time: 1589708532
Signature

With the times we can convert them to regular time by using `UNIX TIME` for example the site at https://www.unixtimestamp.com/index.php will convert `1589704932` to `05/17/2020 @ 8:42am (UTC)` and expiry 1589708532 to 05/`17/2020 @ 9:42am (UTC)` ie 1 hour from now.

The id is the actual id of the user and is the same as the userid generated by the post request on Postman!

So this is starting to get interesting!  In which order do things happen?

Do we create a user on Mongo, where it creates a userid?  And then this is passed into the JWT to create a token for that userid which lasts an hour and we can now use to validate requests for data to the web api from the front end?  I think so although not 100% but it will become clear as I go.

Very exciting anyway to be entering into this world because this is the crux and the heart of security!

We now have completed `registration and obtaining a JWT token upon registration of a new user`

## Authentication when we log in - using routes\api\auth.js

```js

```

### server.js routes

```js
// routing
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auth = require ('./routes/api/auth');
app.use('/api/items',items);
app.use('/api/users',users);
app.use ('/api/auth',auth);
```

We know it's working because in `auth.js` we can POST and get

```js
router.post('/',(req,res) => {
    const { email, password } = req.body;
    // validation
    return res.status(200).json(req.body);
```

### full auth.js returning a token in postman

```js
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// Item model
const User = require('../../models/User')

// @route POST api/auth
// @desc log in a user
// @access Public
router.post('/',(req,res) => {
    const { email, password } = req.body;
    // validation
    if(!email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    } 
    // check for existing user
    User.findOne({email})
        .then(user => {
            // user check
            if(!user) return res.status(400).json({msg: 'User does not exist'})
            // password check comparing our (password) with database existing (user.password)
            // note that bcrypt will do the technical part of the hashing/salting etc
            bcrypt.compare(password,user.password)
                .then (isMatch => {
                    // isMatch is false
                    if(!isMatch) return res.status(400).json({ msg:'Invalid credentials' });
                    // isMatch is true 
                    jwt.sign({id:user.id},config.get('jwtSecret'),{expiresIn:3600},(err,token)=>{
                        if(err) throw err;
                        res.json({
                            reqBody: req.body,
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                password: user.password
                            }
                        })
                    });
                })
        });
});
module.exports = router
```

## Validate Password as plain text against password stored in bcrypt

```
"password": "myPassword2"
"password": "$2a$10$YUAG17QL5PFuagiOcZgavercsYnQ41afLCjp1PlUFkRSAk5vlxdjO"

Actually yes 

using 

https://www.devglan.com/online-tools/bcrypt-hash-generator

entering in myPassword2 and $2a$10$cg8.YEgdQ2vhUSXsPA.RGu5b0f/VPo.yJ.InRZ5FzYVtooEuQ/7oi yields a match

This is because bcrypt adds a random salt to the password every time, but includes this salt in the hashed password so it's possible for bcrypt to work out if there is a match
```

### Invalid username / password is rejected

Yes we are getting back either `user does not exist` or `invalid credentials` depending if the username or password is incorrect.

### Create authenticated routes at middleware\auth.js

```js
const config = require ('config');
const jwt = require ('jsonwebtoken');
// middleware 
// goal is to get token from the header request
function auth(req,res,next){
    const token = req.header('x-auth-token');
    if(!token) res.status(401).json({msg: 'No token, authorization denied'});
    try{
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        req.user = decoded;
        next();    
    }
    catch(e){
        res.status(400).json({msg:"invalid token"})
    }
}
module.exports = auth;
```

### add middleware into routes\api\items.js

We can now put this middleware into our `routes` for example the `items` route we want a `post` and `delete` to be authenticated, for example.

```js
const auth = require('../../middleware/auth');
// @route POST api/items
// @desc add an item
// @access Public
router.post('/',auth, (req,res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})
```

### test protected route in `routes\api\items.js` using Postman

Yes the route `http://localhost:5000/api/items` is now protected and returns 

```json
{
    "msg": "No token, authorization denied"
}
```

as desired, even though GET is working OK.

### Provide a token manually using Postman

Now in Postman we can go back to our Post User Login with Email and Password ie validate login which is returning a token

Post to http://localhost:5000/api/auth using 

```json
{
    "email": "phil@phil10.com",
    "password": "myPassword2"
}
```

and get back our token.  

Copy this token and go back to 

POST to http://localhost:5000/api/items  (ie create a new item)

and add in the Headers `x-auth-token` value equal to the token

We now get back a new shopping list item which we have Posted.

## Check for the current user in `auth.js`

Because the server is stateless we constantly have to send our token with every request which is going to get validated each time by the server before a request is processed.

so bring in `auth` middleware into the `auth` route!

***Care - we have auth.js as middleware and as a route, which I do not like!  Easy to get things wrong!***

*
```js
const auth = require ('../../middleware/auth');
// @route GET api/auth/user
// @desc  GET user data 
// @access Private
// select a user minus the password
router.get('/user',auth,(req,res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})
```

To test this out we go to http://localhost:5000/api/auth and grab the token and id for the relevant user.

We now go to http://localhost:5000/api/auth/user and add the header `x-auth-token` and add the token value.

We now run a GET request to this URL ie http://localhost:5000/api/auth/user 

If we now click on the `body` tab and `pretty` we should be able to see the response pertaining to that user.

Happy days!  We can now send a token and have it return the user related to that token.   That's in a manual fashison ie sending the token manually.  

We can now try a token for a different user and validate the different user is returned when we use a different token. 

Happy days!



Can we now send a token programatically?


## Summary So Far

So far I have followed this video series

https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE

1. Intro
2. Create API Backend
3. Create React Front End
4. Build out Shopping List components
5. Track state with Redux
6. As 5
7. Connect our backend API to the database
8. Deploy to Heroku (only bothered to get the server running not the client - can fix later)
9. Generate a back-end token upon user registration and verification of the token on login
10. I have reached now to this point where I can integrate the Auth state into the react app
    https://www.youtube.com/watch?v=qyomEaXQJFk&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=10
    We are putting the work done in the back end now into our front end ie the `auth` middleware etc.

## Pick up again from where we left off
a) Back end has API talking to Mongo
b) Back end has token generation on registration of a new user
c) Back end has token validation on login of a user
d) Check also that the token is valid and it matches the desired user
e) Finally we are protecting our shopping list items list unless we are logged in with a valid token

That is where we have reached.

We now wish to use the react front end to connect in to the back end with user registration, user login and validation of specific routes ie in this case the shopping list of items which will be protected unless the user has logged in.  So that is the work we have in front of us.

## Run the app on 5000 (server) and 3000 (client)

```js
cd C:\github\react\StandaloneProjects\mern-stack-shopping-list-03\; yarn dev
```
We are getting data at

```json
// api
http://localhost:5000/api/items
http://localhost:5000/api/users
// react
http://localhost:3000/
```

The only difference is that now the add and delete items which are protected routes and not working even though they were working before.  This is because we have now added `auth` as middleware to each route and the route is now failing.

The error coming back on add and delete is 401 which is what has been sent by the API server and it shows we now have protection on our routes which is good.

We need to 

    1) Register
    2) Login
    3) Handle the state of the user ie if logged in or not

## Work on `state`

two new reducers

a) auth reducer

b) error reducer

two new actions files

a) auth
b) error


*Note: at this point I stop working on `mern-stack-shopping-list-03` and move on to `mern-stack-shopping-list-04` and move on at this point

## client\src\actions\types.js

```js
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ITEMS_LOADING = 'ITEMS_LOADING';
export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
```

## client\src\actions\reducers\index.js

```js
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer
});
```

## client\src\actions\reducers\errorReducer.js

```js
import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';
const initialState = {
    msg: {},
    status: null,
    id: null
}
export default function(state = initialState, action){
    switch(action.type){
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state; 
    }
}
```

## client\src\actions\reducers\authReducer.js


```js
 import {
     USER_LOADED, USER_LOADING, 
     AUTH_ERROR,
     LOGIN_SUCCESS, LOGIN_FAIL, 
     LOGOUT_SUCCESS,LOGOUT_FAIL,
     REGISTER_SUCCESS, REGISTER_FAIL
 } from '../actions/types';
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}
// user_loaded runs every time with every request to see if we are logged in or not
export default function(state = initialState, action) {
    switch (action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false 
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default: 
            return state;
    }
}
```

### Running app

```js
cd c:\github\react\StandaloneProjects\mern-stack-shopping-list-04\;yarn dev
```


## client\src\actions\authActions.js

```js
import axios from 'axios';
import { returnErrors } from './errorActions';
import {    USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, 
            LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL
} from './types'
// check token and load user
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    // get token from localStorage
    const token = getState().auth.token;
    // headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    // if token then add to headers
    // this is the critical line which adds the token into the header of the http request!!!!
    if(token){
        config.headers['x-auth-token'] = token;
    }
    // res.data holds user object and token
    axios.get('/api/auth/user', config)
        .then(res => 
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};
```

## client\src\actions\errorActions.js

```js
import { GET_ERRORS, CLEAR_ERRORS } from './types';
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    };
};
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
```

## add to App.js and ensure we call the authActions every time

```js
import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions';
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>    
        </div>
      </Provider>
    );  
  }
}
export default App;
```

## amend back end auth.js by one line

```js
const config = require ('config');
const jwt = require ('jsonwebtoken');
// middleware 
// goal is to get token from the header request
function auth(req,res,next){
    const token = req.header('x-auth-token');
    if(!token) 
        return res.status(401).json({msg: 'No token, authorization denied'});
    try{
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        req.user = decoded;
        next();    
    }
    catch(e){
        res.status(400).json({msg:"invalid token"})
    }
}
module.exports = auth;
```


### What is working?

At this point we can see

```
http://localhost:5000/api/users
http://localhost:5000/api/items
http://localhost:3000/
```

 
## Build out login and registration components in client\src\components\auth folder\RegisterModal.js

```js
import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
// by default modal is not open so set to false
class RegisterModal extends Component {
    state = { 
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    // e is an event parameter 
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        // close modal
        this.toggle();
    }
    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">Register</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                {/* name matches field from state */}
                                {/* onChange fired on every keystroke */}
                                <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onChange} />
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} />
                                 <Button color="dark" block style={{ marginTop:'2rem' }}>Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
// get items from reducer
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
export default connect(mapStateToProps, { })(RegisterModal);
```

Import RegisterModal.js into AppNavbar.js

```js
import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
import RegisterModal from './auth/RegisterModal'
class AppNavbar extends Component {
    state = {
        isOpen:false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    // mb-5 is margin-bottom:5 below the navbar
    // ml-auto aligns links to right
    render(){
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5" >
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <RegisterModal />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}
export default AppNavbar
```

We now have the registration component popping up correctly as a modal 

### In RegisterModal.js 1) On Click call an action in the authActions file called Register 2) Add as prop 

```js
import { register } from '../../actions/authActions'

static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { register })(RegisterModal);
```

### Create function inside src\actions\authActions.js

```js
import axios from 'axios';
import { returnErrors } from './errorActions';
import {    USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, 
            LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL
} from './types'
// check token and load user
// whenever we need the token call tokenConfig(getState) which gets token
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    // res.data holds user object and token
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => 
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};
// Register User
// using {} destructures an object
export const register = ({name, email, password}) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'appplication/json'
        }
    }
    // Request body
    // res.data has user and token 
    // check authReducer for REGISTER_FAIL
    // use returnErrors method in actions\errorActions 
    const body = JSON.stringify({name, email, password})
    axios.post ('/api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        })

}

// setup config / headers and token
export const tokenConfig = getState => {
   // get token from localStorage
   const token = getState().auth.token;
   // headers
   const config = {
       headers: {
           "Content-type": "application/json"
       }
   }
   // if token then add to headers
   // this is the critical line which adds the token into the header of the http request!!!!
   if(token){
       config.headers['x-auth-token'] = token;
   }
    
   return config;
}
```

### update onSubmit in RegisterModal.js

```js
onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const newUser = { name, email, password };
    // try to register new user
    this.props.register(newUser);
}
```

### display error to user on fail to submit

```js
import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { register } from '../../actions/authActions'
// by default modal is not open so set to false
class RegisterModal extends Component {
    state = { 
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }
    // built-in lifecycle hook
    // error is available to us because we imported it in at const mapStateToProps
    componentDidUpdate(prevProps){
        const error = this.props; 
        // see if error has changed
        if (error !== prevProps.error){
            if (error.id === 'REGISTER_FAIL'){
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState ({ msg:null })
            }
        }
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    // e is an event parameter 
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;
        const newUser = { name, email, password };
        // try to register new user
        this.props.register(newUser);
    }
    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">Register</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        { this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> :  null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                {/* name matches field from state */}
                                {/* onChange fired on every keystroke */}
                                {/* className="mb-3" adds margin bottom 3 */}
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onChange} className="mb-3" />
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} className="mb-3" />
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} className="mb-3" />
                                <Button color="dark" block style={{ marginTop:'2rem' }}>Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
// get items from reducer
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
// register is a prop
export default connect(mapStateToProps, { register })(RegisterModal);
```



### Getting Tokens Working

I had to add in some logic to pass in the tokens into the headers.

For example itemActions.js

```js
import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import { tokenConfig } from './authActions'
// dispatch sends the type along with the request for data
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('./api/items')
        .then( res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )        
}
// res.data is the new item 
export const addItem = (item) => dispatch => {
    const config = {
        headers: {
            "x-auth-token" : localStorage.getItem('token')
        }
    }
    console.log(`attempting to POST in itemActions.js ie item is ${JSON.stringify(item)} 
            and headers are ${JSON.stringify(config)}}`)
    axios
        .post('/api/items', item, config)
        .then( res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
}
export const deleteItem = (id) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token" : localStorage.getItem('token')
        }
    }
    console.group(`attempting to DELETE AN ITEM in itemActions.js ie item ID is ${id}`)
    console.log(`and headers are ${JSON.stringify(config)}`);
    console.groupEnd();
    axios
        .delete(`/api/items/${id}`, config)
        .then( res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
```

Now I think all I need are the logout and login buttons and then we have finished the app completely!!! Happy days!!!

## Log Out in src\components\auth\Logout.js

The next thing is to get us to log out.

```js
import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

export class Logout extends Component {
    static propTypes = {
        logout: this.propTypes.func.isRequired
    };
    render(){
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="#" />
            </Fragment>
        );
    }
}
export default connect( null , { logout })(Logout);
```

## Log out in `authActions.js`

```js
// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}
```

### Add Logout To AppNavbar.js

```js
import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap'
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout';
class AppNavbar extends Component {
    state = {
        isOpen:false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    // mb-5 is margin-bottom:5 below the navbar
    // ml-auto aligns links to right
    render(){
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5" >
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <RegisterModal />
                            </NavItem>
                            <NavItem>
                                <Logout />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}
export default AppNavbar
```

## Finish the register and logout all working fine!

I have now got the register and the logout all working fine.

Just beware I think I have copied some incorrect versions of files above, with tiny tweaks needed, so I might need to delete the lot of them and just write over them with correct versions.

But I have tweaked so many files I am not sure if it is worth putting the code in this readme at the moment.  Maybe I can come back and tidy up later on closer analysis.  

But I have done well so far.

I think this would be a great place to pause and can I now add in the login function as well???

Yes, let's do this in the final version 5 of this repo!




























