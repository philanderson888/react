# React with JWT

## Author

@philanderson888
November 2020

## Contents

- [React with JWT](#react-with-jwt)
  - [Author](#author)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Back End in Node!](#back-end-in-node)
  - [Install back end](#install-back-end)
  - [JWT token](#jwt-token)
  - [React front end](#react-front-end)
  - [HTTPS](#https)

## Introduction

Goal is to have a back-end with JWT tokens and a react front end storing those tokens

## Back End in Node!

Following this tutorial https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81

## Install back end

```powershell
yarn add express express-jwt jsonwebtoken cors
```

server.js

```js
const { response } = require('express');
const express = require('express')
const app = express();
const data = {field:"value"};
app.get('/',(request,response)=>{
    response.json(data)
});
app.listen(3000);
console.log('Listening on 3000')
/*
http://localhost:3000

{
"field": "value"
}
*/
```

So we have our api data appearing

## JWT token

We can generate a JWT token with the following

```js
const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const app = express();
const data = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
  ];
const jwtSecret = 'secret123';
app.get('/jwt',(request,response)=>{
    response.json({
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret)
    })
})
app.use(jwt({secret:jwtSecret,algorithms:['HS256'] }));
app.get('/',(request,response)=>{
    response.json(data)
});
app.listen(3000);
console.log('Listening on 3000')
/*
http://localhost:3000/jwt
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGhpbGFuZGVyc29uIiwiaWF0IjoxNjA1ODEwMTY3fQ.8Kt5hl5KGZd1f8RdQllZhqNl6XFtmtLnv_QdddbEIgc"
}
*/
```


back end serving up both jwt and also the food data

```jsx
const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const app = express();
const foods = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
  ];
const jwtSecret = 'secret123';
app.get('/jwt',(request,response)=>{
    response.json({
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret)
    })
})
app.get('/',(request,response)=>{
    response.json({
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret),
        foods,
    })
});
app.use(jwt({secret:jwtSecret,algorithms:['HS256'] }));
app.listen(3001);
console.log('Listening on 3001')
/*
http://localhost:3001

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGhpbGFuZGVyc29uIiwiaWF0IjoxNjA1ODE2NjY4fQ.LWT3CoHt8X50M8Fq0rMDLiydyz2ZO9qj2qJzMdwMSpg",
    
    "foods": [
        {
        "id": 1,
        "description": "burritos"
        },
        {
        "id": 2,
        "description": "quesadillas"
        },
        {
        "id": 3,
        "description": "churos"
        }
    ]
}
*/
```


## React front end

Install

```powershell
npx create-react-app jwt
cd jwt
yarn add axios
yarn start
```

Get the basic app working without talking to the back end

```jsx
import React, {useState} from 'react';
import axios from 'axios';
const url = 'http://localhost:3001';
function App() {
  const [foods, setFoods] = useState([]);
  const [jwt,setJwt] = useState('here is a jwt token')
  const getFoods = async () => {
      //const { data } = await axios.get(`${url}/data}`);
      const data=[{description:'a food'},{description:'more food'},{description:'more food still'}]
      setFoods(data)
  }
  const getJwt = () => {
    console.log('getting jwt')
    setJwt('jwt token has arrived')
  }  
  return (
    <div>
      <h2>Getting data from an API</h2>
      <button onClick={()=>getJwt()}>Get JWT</button>
      <button onClick={()=>getFoods()}>Get Foods</button>
      <p>{jwt}</p>
      <ul> 
        {foods.map((food,i)=>(        <li>{food.description}</li>         ))}
      </ul>
    </div>
  );
}
export default App;
/*
jwt token has arrived
a food
more food
more food still
*/
```

Now connect to the back end

CORS is blocking any request at present so we have to now add this to the back end


```jsx
import React, {useState} from 'react'
import axios from 'axios'
import NavbarAPIs from './NavbarAPIs'
const url = 'http://localhost:3001';
export default function JwtHttp() {
    const [foods, setFoods] = useState([]);
    const [myarray,setMyarray] = useState([1,2,3])
    const [jwt, setJwt] = useState('here is a jwt token')
    const getFoods = () => {
        axios.get(`${url}/foods`)
        .then((response)=> {
          console.log('food data',response.data.foods);
          setFoods(response.data.foods);
        });
    }
    const getJwt = () => {
      console.log('getting jwt')
      axios.get(`${url}/jwt`)
      .then(response=>{
        console.log('token',response.data.token)
        setJwt(response.data.token)  
      })
    }  
    const getItems = () => {
      console.log('getting items')
      const array = myarray
      array.push(array.length+1)
      console.log('array',array)
      setMyarray(array)  
    } 
    return (
      <div>
        <NavbarAPIs />
        <h2>Getting data from an API</h2>
        <button onClick={()=>getJwt()}>Get JWT</button>
        <button onClick={()=>getFoods()}>Get Foods</button>
        <button onClick={()=>getItems()}>Get Items</button>
        <p>{jwt}</p>
        <ul> 
          {foods.map(food=>(
            <li key={food.id}>{food.description}</li>
          ))}
        </ul>
        <ul>
          {myarray.map((item)=>(
            <li key={item}>{item}</li>  
          ))}
        </ul>
      </div>
    );
}
/*
This works with this server

const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors')
const app = express();
app.use(cors());
const foods = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
];
const jwtSecret = 'secret123';
app.get('/jwt',(request,response)=>{
    response.json({
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret)
    })
})
app.get('/',(request,response)=>{
    response.json({
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret),
        foods,
    })
});
app.get('/foods',(request,response)=>{
    response.json({
        foods,
    })
});
app.use(jwt({secret:jwtSecret,algorithms:['HS256'] }));
app.listen(3001);
console.log('Listening on 3001')
*/
```

## HTTPS

We can now build in an `https` back end

```js
const fs = require('fs');
const http = require('http')
const https = require('https');
const express = require('express');
const cors = require('cors');
const privateKey = fs.readFileSync('key.pem');
const publicCertificate = fs.readFileSync('cert.pem');
const credentials = {
    key: privateKey,
    cert: publicCertificate
}
const expressJwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = 'secret123';
const app = express();
app.use(cors());
app.use(expressJwt({secret:jwtSecret,algorithms:['HS256'] }));
const homePage = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    const data = {
        helloworld:"you are now receiving data over https"
    }
    response.end(JSON.stringify(data));
}
const jwt = (request, response) => {
    const data = {
        token: jsonwebtoken.sign({user:'philanderson'},jwtSecret)
    }
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(data));
}
const foods = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
];
const getFood = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(foods));
}
app.get('/',homePage);
app.get('/jwt',jwt);
app.get('/getFood',getFood);
const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials,app)
httpServer.listen(3001);
httpsServer.listen(3002);
console.log('http listening on 3001 and https on 3002');
```
