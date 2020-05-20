const express = require ('express')
const mongoose = require ('mongoose')
const path = require ('path')
const config = require ('config') 

const app = express()

app.use(express.json())

const db = process.env.REACT_APP_mongoURI
const testKey = config.get('testKey');
console.log(`testKey from config\default.json is ${testKey}`)

mongoose
    .connect(db, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true})
    .then( () => { 
        console.log('MongoDB connected')  
    })
    .catch(err => {
        console.log(err)
    })


// routing
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auth = require ('./routes/api/auth');
app.use('/api/items',items);
app.use('/api/users',users);
app.use ('/api/auth',auth);

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