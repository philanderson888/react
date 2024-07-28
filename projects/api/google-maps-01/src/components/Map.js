import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
const MapWithAMarker = withScriptjs(withGoogleMap( () =>
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: -25.397, lng: 150.644 }} >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
)); 
class Map extends React.Component {
    constructor(){
        super()       
        const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
        this.state = {
            error:null,
            isLoaded:false,
            map:'',
            MapWithAMarker,
            googleMapsUrl,
            buttonText: 'show map',
            buttonTextVanillaJS: 'show map using vanillaJS',
            buttonText2: 'show map',
            address: '',
            city: '',
            area: '',
            state: '',
            zoom: 5,
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
        let map = '';
        let buttonText = ''
        if (this.state.buttonText === 'show map') {
            buttonText = 'hide map'
            map = 
                <MapWithAMarker 
                    googleMapURL={this.state.googleMapsUrl} 
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div className={"mapContainer"} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    defaultZoom={20} 
                    zoom={this.state.zoom}
                    defaultCenter={ {lat: -35.397, lng: 150.644} }
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
                    <h3>Google Map API</h3>
                    <div>
                        <button className="buttonSeparate" type='button' onClick={this.showMap}>{this.state.buttonText}</button>
                        <div id='map'><p>{this.state.map}</p></div>
                    </div>
                </div> 
            )
        }
    }
}
export default Map