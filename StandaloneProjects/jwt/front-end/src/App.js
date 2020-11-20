import React, {useState} from 'react';
import axios from 'axios';
const url = 'http://localhost:3001';
function App() {
  const [foods, setFoods] = useState([{id:1,description:"description"},{id:2,description:"description2"}]);
  const [myarray,setMyarray] = useState([1,2,3])
  const [jwt, setJwt] = useState('here is a jwt token')
  const getFoods = () => {
      axios.get(`${url}/foods`)
      .then((response)=> {
        console.log('food data',response.data.foods);
        console.log('one record',response.data.foods[0].description);
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
    array.push(4)
    console.log('array',array)
    setMyarray(array)  
  } 
  return (
    <div>
      <h2>Getting data from an API</h2>
      <button onClick={()=>getJwt()}>Get JWT</button>
      <button onClick={()=>getFoods()}>Get Foods</button>
      <button onClick={()=>getItems()}>Get Items</button>
      <p>{jwt}</p>
      <ul> 
        {foods.map(food=>(
          <li>{food.description}</li>
        ))}
      </ul>
      <ul>
        {myarray.map((item)=>(
          <li>{item}</li>  
        ))}
      </ul>
    </div>
  );
}
export default App;
