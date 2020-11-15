import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
const MapWithAMarker = withScriptjs(withGoogleMap( () =>
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: -34.397, lng: 150.644 }} >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  )); 
class SimpleMap02 extends React.Component {
    constructor(){
        super()       
        let googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
        this.state = {
            error:null,
            isLoaded:false,
            map:'',
            map2: '',
            mapwithamarker: null,
            googleMapsUrl,
            buttonText: 'show map',
            buttonMap2Text: 'show map 2',
            address: '',
            city: '',
            area: '',
            state: '',
            zoom: 3,
            height: 400,
            mapPosition: {
                lat: 0,
                lng: 0,
            },
            markerPosition: {
                lat:0,
                lng:0,
            }
        }

    }
    componentDidMount(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position=>{
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                })
            })
        }
        this.setState({
            error:null,
            isLoaded:true,
        })
    }
    showMap = () => {
        console.clear()
        let buttonMap2Text='show map 2';
        let map = '';
        let map2 = '';
        let buttonText = '';
        if(this.state.buttonText==='show map'){
            buttonText = 'hide map'
            map = 
                <MapWithAMarker 
                    googleMapURL={this.state.googleMapsUrl} 
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "400px" }} />}
                    mapElement={<div style={{ height: "100%" }} />}     
                />
        } else {
            buttonText = 'show map'
        }
        
        this.setState({
            error:null,
            map,
            map2,
            buttonText,
            buttonMap2Text,
        })
    }  
    showMap2 = () => {
        console.clear()
        let buttonText = 'show map';
        let map = '';
        let map2 = ''
        let buttonMap2Text = ''
        if (this.state.buttonMap2Text === 'show map 2') {
            buttonMap2Text = 'hide map 2'
            map2 = 
                <MapWithAMarker 
                    googleMapURL={this.state.googleMapsUrl} 
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "400px" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    defaultZoom={20} 
                    zoom={this.state.zoom}
                />
        } else {
            buttonMap2Text = 'show map 2'
        }
        this.setState({
            error:null,
            map,
            map2,
            buttonText,
            buttonMap2Text,
        })
    } 
    zoomIn = () => {
        console.clear()
        let buttonText = 'show map';
        let buttonMap2Text = 'hide map 2';
        let map = '';
        let zoom = this.state.zoom + 0.5;
        console.log(`zoom`,zoom)
        let map2 = 
                <MapWithAMarker 
                    googleMapURL={this.state.googleMapsUrl} 
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "400px" }} />}
                    mapElement={<div style={{ height: "100%" }} />} 
                    zoom={zoom}
                />
        console.log(`map2`,map2)
        this.setState({
            error:null,
            map,
            map2,
            buttonText,
            buttonMap2Text,
            zoom,
        })
    }
    zoomOut = () => {

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
                    <h3>Google Map With older <a href="https://tomchentw.github.io/react-google-maps">react-google-maps</a> API</h3>
                    <div>
                        <button className="buttonSeparate" type='button' onClick={this.showMap}>{this.state.buttonText}</button>
                        <button className="buttonSeparate" type='button' onClick={this.showMap2}>{this.state.buttonMap2Text}</button>
                        <button className="buttonSeparate" type='button' onClick={this.zoomIn}>Zoom In</button>
                        <button className="buttonSeparate" type='button' onClick={this.zoomOut}>Zoom Out</button>
                        <div id='map'><p>{this.state.map}</p></div>
                        <div id='map2'><p>{this.state.map2}</p></div>
                    </div>
                </div> 
            )
        }
    }
}
export default SimpleMap02