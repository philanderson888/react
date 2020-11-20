import React, {useState} from 'react'
import axios from 'axios'
import NavbarAPIs from './NavbarAPIs'
const url = 'https://localhost:443';
export default function Jwt() {
    const [root,setRoot] = useState({helloworld:"Data not yet retrieved from server"});
    const getRoot = () => {
      axios.get(`${url}`)
      .then((response)=> {
        console.log('root data',response.data);
        setRoot(response.data);
      });
  }
    return (
      <div>
        <NavbarAPIs />
        <h2>Getting data from an API</h2>
        <button onClick={()=>getRoot()}>Get Data From Root Path</button>
        <p>{root.helloworld}</p>
      </div>
    );
}

/*

This works with this server

const https = require('https');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const credentials = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
app.use(cors());
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
const httpsServer = https.createServer(credentials,homePage)
httpsServer.listen(443);
console.log('listening on 443 for https secure requests')

*/