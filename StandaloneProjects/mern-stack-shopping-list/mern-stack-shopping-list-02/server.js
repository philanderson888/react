const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')

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

const port = 5000 // process.env.REACT_APP_PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`) 
}) 