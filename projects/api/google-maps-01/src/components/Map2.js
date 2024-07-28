import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
class Map2 extends React.Component {
    constructor(){
        super()       
        this.state = {
            error:null,
            isLoaded:false,
    }
    componentDidMount(){
        this.setState({
            error:null,
            isLoaded:true,
        })
    }  
    showMap = () => {
        console.clear()
        this.setState({
            error:null,
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
export default Map2