import React, {useState} from 'react'
import axios from 'axios'
import NavbarJwt from './NavbarJwt'
const url = 'http://localhost:3001';
export default function JwtHttp() {
    const [foods, setFoods] = useState([]);
    const [myarray,setMyarray] = useState([1,2,3])
    const [jwt, setJwt] = useState('here is a jwt token')
    const getFoods = () => {
        axios.get(`${url}/foods`)
        .then((response)=> {
          console.log('response',response);
          console.log('response.data',response.data);
          setFoods(response.data);
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
      const array = [...myarray] 
      array.push(array.length+1)
      console.log('array',array)
      setMyarray(array)  
    } 
    return (
      <div>
        <NavbarJwt />
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
          {myarray.map(item=>(
            <li>{item}</li>  
          ))}
        </ul>
      </div>
    );
}
/*
This works with these servers

https://github.com/philanderson888/nodejs/tree/master/projects/jwt/jwt

for example

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











