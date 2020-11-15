## React With Google Maps

## Contents

- [React With Google Maps](#react-with-google-maps)
- [Contents](#contents)
- [Author](#author)
- [Introduction](#introduction)
  - [react-google-maps](#react-google-maps)
- [React Google Maps](#react-google-maps-1)
- [React Google Maps](#react-google-maps-2)
- [React Google Maps](#react-google-maps-3)
- [Google Maps Autocomplete](#google-maps-autocomplete)

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

## React Google Maps

Walkthrough at https://blog.logrocket.com/a-practical-guide-to-integrating-google-maps-in-react/ 

```powershell
yarn add google-map-react
```


## React Google Maps

Walkthrough at https://www.youtube.com/watch?v=h_d4HNwEleo

```powershell
yarn add google-maps-react
```

Using https://www.npmjs.com/package/google-maps-react for boilerplate code

Starter code is

```jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Map3 from './components/Map3'
import Map4 from './components/Map4'
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/map3' component={Map3} />
        <Route path='/map4' component={Map4} />
      </Switch>
    </div>
  );
}
export default App;
```

```jsx
import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h1>Google Maps</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/map3">Map 3</Link>&nbsp;|&nbsp;
                <Link to="/map4">Map 4</Link>
            </div>
        )
    }
}
export default Navbar;
```

```jsx
import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Map3 extends React.Component {
    constructor(){
        console.log('constructor activated')
        super() 
        const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            apiKey,
        };     
    }
    componentDidMount(){
        console.log('component did mount')
        this.setState({
        })
    }  
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
          <div>
            <Map className="map" google={this.props.google}
                onClick={this.onMapClicked}>
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
            </Map>
        </div>
      )
    }
}
const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
export default GoogleApiWrapper({apiKey})(Map3)
```

## Google Maps Autocomplete

Using react-places-autocomplete at https://www.npmjs.com/package/react-places-autocomplete

```powershell
yarn add react-places-autocomplete
```

Import 

```jsx
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
```

We also have to enable the Google `GeoEncoding` service

The final result is here

```jsx
import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
class Map3 extends React.Component {
  constructor() {
    console.clear();
      console.log('constructor activated')
    super()
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 51.6623,
        lng: 0.1181,
      },
      address:'',
    };
  }
  componentDidMount() {
    console.log('component did mount')
    this.setState({
    })
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  onMapClicked = (props) => {
    console.log(`map was clicked`)
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  handleChange = address => {
    console.log(`handling change`)
    this.setState({ 
      address
    });
  };

  handleSelect = address => {
    console.log(`handling selecttion of address`)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
          this.setState({ 
            address,
            mapCenter: latLng,
        })
      })
      .catch(error => console.error('Error', error));  
  };
  render() {
    return (
      <div id="googleMap">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Current location'}
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}
const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
console.log(`apikey`, apiKey)
export default GoogleApiWrapper({ apiKey })(Map3)
```
