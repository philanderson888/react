import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            data: "here is some data",
            isToggleOn:true
        }
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState(state=>({
            data: state.data + "some data, ",
            isToggleOn:!state.isToggleOn
        }))
    } 
    render(){
        return(
            <>
                <h2>Parent Component</h2>
                <Child data={this.state.data}/>
                <button onClick={this.changeState}>Change State {this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </>
        );
    }
}
export default Parent