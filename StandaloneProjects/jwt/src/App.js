import React, {useState} from 'react';
import axios from 'axios';
const url = 'http://localhost:3001';
function App() {
  const [foods, setFoods] = useState([]);
  const [jwt, setJwt] = useState('here is a jwt token')
  const getFoods = () => {
      axios.get(`${url}/foods`)
      .then((response)=> {
        console.log('food data',response.data.foods);
        console.log('one record',response.data.foods[0].description);
        setFoods(response.data.foods[0].description);
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
  return (
    <div>
      <h2>Getting data from an API</h2>
      <button onClick={()=>getJwt()}>Get JWT</button>
      <button onClick={()=>getFoods()}>Get Foods</button>
      <p>{jwt}</p>
      <ul> 
        {foods}
      </ul>
    </div>
  );
}
export default App;
