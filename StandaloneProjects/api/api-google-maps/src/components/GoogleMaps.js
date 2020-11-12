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