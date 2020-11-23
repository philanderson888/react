# React with JWT

## Author

@philanderson888
November 2020

## Contents

- [React with JWT](#react-with-jwt)
  - [Author](#author)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Background to JWT](#background-to-jwt)
  - [JWT structure](#jwt-structure)
  - [Back End in Node!](#back-end-in-node)
  - [Install back end](#install-back-end)
  - [JWT token](#jwt-token)
  - [React front end](#react-front-end)
  - [HTTPS](#https)
  - [Providing A Token As Authorization](#providing-a-token-as-authorization)
  - [Flow 2 - JWT](#flow-2---jwt)

## Introduction

Goal is to have a back-end with JWT tokens and a react front end storing those tokens

Benefit of JWT is its stateless nature - there is no need to store the token on the server so that we can have
- one server to create and issue the token
- another server to verify the token is valid

Secure - JWT is sent in a cookie

Insecure - JWT is sent in the `authorization` http header and using https only otherwise man in the middle attack can occur

An issue is that if we store the token in the localstorage of the client, this makes it susceptible to XSS cross-site scripting attack.  So we must set `HttpOnly` and `secure` flags of the cookie which we are storing in localstorage.

If we set an expiry of 10 minutes we can refresh after that time.  We use a JWT refresh token with a longer expiry and is used to issue a new short-term JWT token every time that one expires.  Refresh tokens are not sent to the client but are stored in a back-end database.  Also every time a new access token is generated, a new refresh token also is issued and the existing one is trashed.

## Background to JWT

JWT is used for user authentication and to exchange information

Steps for user authentication

1. Client sends username and password to server over https
2. Server verifies credentials
3. Server issues token
4. Server sends token to client
5. Client stores this token in the browser as a cookie
6. Every request from the client from now on includes this cookie 
7. Server extracts the token from the cookie on every request from the client
8. Server validates the token on every request
9. Server provides the information requested

## JWT structure

Header is encded in base64url

```json
{ 
  "alg":"RS256",
  "typ":"JWT"
}
```

Payload contains `claims` and expiry in seconds, and is encoded with base64url

*Note this is not encrypted so passwords are not stored here*

```json
{
  "id":"1234",
  "name":"Phil",
  "role":"author",
  "exp":3600
}
```

Signature is a hash, or MAC Message Authentication Code to verify token has not been modified

Signature generated from header + payload + secret

We can either use symmetric (HMAC) or asymmetric (RS256) to verify





- Payload
  - {
  - }
- Signature

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

also adding in 

```powershell
yarn add cookie-parser body-parser
```

```js
const fs = require('fs');
const http = require('http')
const https = require('https');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
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
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
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
const foodData = [
    { id: 1, description: 'burritos' },
    { id: 2, description: 'quesadillas' },
    { id: 3, description: 'churos' }
];
const foods = (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Request-Method','*');
    response.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(foodData));
}
app.get('/',homePage);
app.get('/jwt',jwt);
// foods now requires a token
app.use(expressJwt({
    secret:jwtSecret,
    algorithms:['HS256'] 
}));
app.get('/foods',foods);
const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials,app)
httpServer.listen(3001);
httpsServer.listen(3002);
console.log('http listening on 3001 and https on 3002');
```

## Providing A Token As Authorization

In the client we can test this out with `curl`

```powershell
curl 
  --location 
  --request GET 'http://localhost:3001'
  --header 'Accept: application/json' 
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGhpbGFuZGVyc29uIiwiaWF0IjoxNjA2MTIxNjQ3fQ.6zJljxMjhbo1Zv_QJEJQ3zp2PjkcFOqADIQeCNNBdWY'
  --data-raw ''
```


curl --location --request GET 'https://localhost:3001' --header 'Accept: application/json' --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGhpbGFuZGVyc29uIiwiaWF0IjoxNjA2MTIzNTIxfQ.OXkZYBaHi2i3kzTwO6WP2CZ1dk3inaeWIJnriRU5AOA'



## Flow 2 - JWT

This is using a different tutorial to see how we get on!  

August 2020 so definitely up to date!

https://livecodestream.dev/post/2020-08-11-a-practical-guide-to-jwt-authentication-with-nodejs/



