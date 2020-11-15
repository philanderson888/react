import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  )); 
class SimpleMapUsingOlderLibrary extends React.Component {
    constructor(){
        super()       
        let googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
        this.state = {
            error:null,
            isLoaded:false,
            map:'',
            mapwithamarker: null,
            googleMapsUrl,
            buttonText: 'show map',
        }

    }
    componentDidMount(){
        this.setState({
            error:null,
            isLoaded:true,
        })
    }
    showMap = () => {
        console.clear()
        let map = '';
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
                    <h3>Google Map With older <a href="https://tomchentw.github.io/react-google-maps">react-google-maps</a> API</h3>
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
export default SimpleMapUsingOlderLibrary