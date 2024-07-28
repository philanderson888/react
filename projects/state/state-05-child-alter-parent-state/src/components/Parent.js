import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            data: "This is parent data"
        }
        this.changeState = this.changeState.bind(this)
    }
    changeState(){
        this.setState(state=>({
            data:"This is altered parent data"            
        }))
    }
    render(){
        return(
            <div>
                <p>Here is a Parent with some data - {this.state.data}</p>
                <button onClick={this.changeState}>Change parent state from parent</button>
                <Child action={this.changeState} />
            </div>
        )
    }
}
export default Parent