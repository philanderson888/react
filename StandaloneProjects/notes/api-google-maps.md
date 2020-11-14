## React With Google Maps

## Contents

- [React With Google Maps](#react-with-google-maps)
- [Contents](#contents)
- [Author](#author)
- [Introduction](#introduction)
  - [react-google-maps](#react-google-maps)
- [React Google Maps](#react-google-maps-1)

## Author

Philip Anderson
November 2020
@philanderson888 GitHub

## Introduction

This API aims to take the user through using Google Maps with React.

For the `Javascript` version please visit `https://github.com/philanderson888/javascript/blob/main/api/api-google/index.html`

For the `react` version please follow below

https://www.youtube.com/watch?v=Alz13kGluL8&ab_channel=JohnAhn

```powershell
npx create-react-app api-google-maps
cd api-google-maps
yarn add react-router-dom 
yarn add react-geocode react-google-autocomplete react-google-maps
yarn start
```

Build this component and strip out all other superfluous code from the application including all CSS etc

```jsx
import React from 'react'
class GoogleMaps extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            map:'',
        }
    }
    componentDidMount(){
        this.setState({
            error:null,
            isLoaded:true
        })
    }
    showMap = () => {
        console.clear()
        this.setState({
            error:null,
            map:'a map will be shown here'
        })
    }   
    render(){
        const { error, isLoaded } = this.state
        if(error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return(
                <div>
                    <h2>Google Maps</h2>
                    <div>
                        <button className="buttonSeparate" type='button' onClick={this.showMap}>Show Map</button>
                        <div id='map'><p>{this.state.map}</p></div>
                    </div>
                </div> 
            )
        }
    }
}
export default GoogleMaps
```

At `console.developers.google.com` create a project and enable it for `Google Maps API`

Also check out the project status at `https://console.cloud.google.com/home/dashboard`

For the project, enable the `Google Maps`, `GeoCoding` and `Places` APIs

Grab the `Api KEY` and `ClientId` and add them to `.env` and ensure `.env` is in your `.gitignore`

To test out the API we can simply visit the link https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=...my...api...key...goes...here.  

You first have to enable billing at https://console.cloud.google.com/project/_/billing/enable and might have to visit https://console.developers.google.com/billing to get the billing id as well 

### react-google-maps

We can now look into using `react-google-maps`

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Google Maps</title>
    <script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
    <style>
      html{
          font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      div.container{
          width:80vw;
          margin:auto;
      }
      .buttonSeparate{
        margin:1vmin 2vmin;
        background-color: #c2c6ec;
        border-radius:2vmin;
        border:1px solid #8d95e0;
        padding:2vmin 3vmin;
        box-shadow: 1vmin 0vmin 4vmin 0.2vmin #8d95e0;
        outline:none;
      }
      .buttonSeparate:hover{
        background-color: #969ee7;
        border-color:#4f5dd3;
        
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

component

```jsx
import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  ));
class SimpleMap extends React.Component {
    constructor(){
        super()        
        let googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
        this.state = {
            error:null,
            isLoaded:false,
            map:'',
            mapwithamarker:MapWithAMarker,
            googleMapsUrl,
            buttonText: 'show map',
        }
    }
    componentDidMount(){
        this.setState({
            error:null,
            isLoaded:true
        })
    }
    showMap = () => {
        console.clear()
        let map = '';
        let buttonText = '';
        if(this.state.buttonText==='show map'){
            buttonText = 'hide map'
            map = <MapWithAMarker 
                googleMapURL={this.state.googleMapsUrl} loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        } else {
            buttonText = 'show map'
        }
        
        this.setState({
            error:null,
            map,
            buttonText,
        })
    }   
    render(){
        const { error, isLoaded } = this.state
        if(error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return(
                <div>
                    <h2>Google Map With Older <a href="https://tomchentw.github.io/react-google-maps">react-google-maps</a> API</h2>
                    <div>
                        <button className="buttonSeparate" type='button' onClick={this.showMap}>{this.state.buttonText}</button>
                        <div id='map'><p>{this.state.map}</p></div>
                        <div>{this.state.mapWithAMarkerDisplay}</div>
                    </div>
                </div> 
            )
        }
    }
}
export default SimpleMap
```

## React Google Maps

https://www.youtube.com/watch?v=Alz13kGluL8&ab_channel=JohnAhn

This is using a more up-to-date set of NPM libraries at https://www.npmjs.com/package/@react-google-maps/api

```powershell
yarn add @react-google-maps/api
```