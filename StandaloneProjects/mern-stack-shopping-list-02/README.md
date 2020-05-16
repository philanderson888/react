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

