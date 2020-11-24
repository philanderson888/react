import React, {useState} from 'react'
import axios from 'axios'
import NavbarJwt from './NavbarJwt'
const url = 'https://localhost:3002';
export default function JwtHttps() {
    const [root,setRoot] = useState({helloworld:"Data not yet retrieved from server"});
    const [foods, setFoods] = useState([]);
    const [myarray,setMyarray] = useState([1,2,3])
    const [jwt, setJwt] = useState('here is a jwt token')
    const getRoot = () => {
      axios.get(`${url}`)
      .then((response)=> {
        console.log('root data',response.data);
        setRoot(response.data);
      });
  }
    const getFoods = () => {
        axios.get(`${url}/foods`)
        .then((response)=> {
          console.log('food data',response.data);
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
      const array = myarray
      array.push(array.length+1)
      console.log('array',array)
      setMyarray(array)  
    } 
    return (
      <div>
        <NavbarJwt />
        <h2>Getting data from an API</h2>
        <button onClick={()=>getRoot()}>Get Data From Root Path</button>
        <button onClick={()=>getJwt()}>Get JWT</button>
        <button onClick={()=>getFoods()}>Get Foods</button>
        <button onClick={()=>getItems()}>Get Items</button>
        <p>{jwt}</p>
        <p>{root.helloworld}</p>
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