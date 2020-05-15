# MERN Stack Shopping List Application With Traversy Media

## Author

Philip Anderson
15 May 2020

## Contents

- [MERN Stack Shopping List Application With Traversy Media](#mern-stack-shopping-list-application-with-traversy-media)
  - [Author](#author)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Features contained in the application](#features-contained-in-the-application)
    - [Getting Started](#getting-started)
  - [create package.json](#create-packagejson)
  - [add libraries](#add-libraries)
  - [add nodemon to startup script](#add-nodemon-to-startup-script)
    - [server.js](#serverjs)
    - [mlab.com](#mlabcom)
    - [server.js](#serverjs-1)
    - [connect](#connect)
  - [Create API](#create-api)
    - [create models\Item.js](#create-modelsitemjs)
  - [Routes in routes\api\items.js](#routes-in-routesapiitemsjs)
    - [server.js at this point](#serverjs-at-this-point)
  - [Test with Postman](#test-with-postman)
  - [Amend to POST request in items.js](#amend-to-post-request-in-itemsjs)
    - [Test with Postman](#test-with-postman-1)
  - [Delete items in Items.js](#delete-items-in-itemsjs)
    - [Run the delete from POSTMAN](#run-the-delete-from-postman)
      - [items.js](#itemsjs)
      - [server.js](#serverjs-2)
  - [router PUT update an item as well](#router-put-update-an-item-as-well)

## Introduction

This is a tutorial designed to build a MERN stack app ie MongoDB, Express API, React front end and NodeJS.

The tutorial I am following is that of [Traversy Media](https://www.youtube.com/user/TechGuyWeb) and the video series link is here https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE.

Happy days!!!

## Features contained in the application

- ReactStrap to use bootstrap in React
- ReactTransitionGroup for fade transitions
- Heroku Deployment
- No Authentication
- React app contained in `client` folder
- Node server in `server.js` node file
- api used for routes
- using `build` folder for `production`
- using routes
  - fetch items
  - create items
  - delete items
- model has
  - ItemSchema 
    - name
    - date
- model using mongoose
- config has mongoURI to either remote or local mongodb
- react client has
  - AppNavbar with ReactStrap
  - ItemModal 
    - connects to Redux
    - Add item
    - Submit item which fires off an action in actions file
  - ShoppingList
    - action
    - list group items
    - CSSTransition
  - Actions file makes all requests to database
  - Reducer to get types

### Getting Started

Here are instructions to get started with a quick react app

https://github.com/bradtraversy/react_express_starter

actually this is a fully blown react series which I am going to leave for now! 

## create package.json

```js
npm init
```

## add libraries

```js
# concurrently runs client and server together
yarn add express body-parser mongoose concurrently
yarn add -D nodemon
```

## add nodemon to startup script

```json
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  },
```

### server.js

```js
const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const app = express()
app.use(bodyParser.json())
```

### mlab.com

```
New => Amazon => Sandbox => EU => done
Create user
Copy mongo URI 
```

### server.js

```js
const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')

const app = express()

app.use(bodyParser.json())

let db = require('./config/keys').mongoURI
//db = process.env.REACT_APP_mongoURI

mongoose
    .connect(db, {useNewUrlParser:true})
    .then( () => { 
        console.log('MongoDB connected')  
    })
    .catch(err => {
        console.log(err)
    })


//const port = process.env.PORT
let port = require('./config/keys').PORT
//const port = REACT_APP_PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`) 
})
```

### connect 


```js
clear;yarn run server
```

## Create API

### create models\Item.js

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


## Routes in routes\api\items.js

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

### server.js at this point

```js
const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')

const items = require('./routes/api/items')

const app = express()

app.use(bodyParser.json())

let db = require('./config/keys').mongoURI
//db = process.env.REACT_APP_mongoURI

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

//const port = process.env.PORT
let port = require('./config/keys').PORT
//const port = REACT_APP_PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`) 
})
```

## Test with Postman

```
http://localhost:3000/api/items  # get back [] empty array
```

GET is working

## Amend to POST request in items.js

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
// router.get('/', (req, res) => {
//     Item.find()
//         .sort({date:-1})
//         .then(items => res.json(items))
// })

// note : item is name of model
// bodyparser can use req.body.name
router.post('/',(req,res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})
module.exports = router
```

### Test with Postman

```
POST to http://localhost:3000/api/items
content-type:application/json
```

body is set to RAW

```json
{
    "name": "Test",
}
```

Get back

```
{
    "_id": "5ebeec711c502d0188165bb0",
    "name": "Test",
    "date": "2020-05-15T19:24:33.270Z",
    "__v": 0
}
```

so an item has been created! 

We can now find a record in the database

```json
{
    "_id": {
        "$oid": "5ebeec711c502d0188165bb0"
    },
    "name": "Test",
    "date": {
        "$date": "2020-05-15T19:24:33.270Z"
    },
    "__v": 0
}
```

## Delete items in Items.js

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


// @route POST api/items
// @desc new item
// @access Public
// note : item is name of model
// bodyparser can use req.body.name
router.post('/',(req,res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})


// @route DELETE api/items/:id
// @desc delete item
// @access Public
router.delete('/:id',(req,res) => {
    Item.findByIdAndDelete(req.params.id)
        .then( () => res.json({success:true}))
        .catch(err => res.status(404).json({success:false}))
})

module.exports = router
```

### Run the delete from POSTMAN

```
DELETE http://localhost:3000/api/items/5ebeec711c502d0188165bb0
```

```json
{
    "success": true
}
```


Happy days!

At this point we have GET POST and DELETE all working!

#### items.js

```js

```

#### server.js

```
const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')

const items = require('./routes/api/items')

const app = express()

app.use(bodyParser.json())

let db = require('./config/keys').mongoURI
//db = process.env.REACT_APP_mongoURI

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

//const port = process.env.PORT
let port = require('./config/keys').PORT
//const port = REACT_APP_PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`) 
}) 
```

## router PUT update an item as well

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