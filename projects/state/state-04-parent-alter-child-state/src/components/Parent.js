import React from 'react'
import Child from './Child'
class Parent extends React.Component {
    constructor(){
        super()
        this.referenceChild = React.createRef();
    }
    changeChildState = ()=>{
        this.referenceChild.current.changeName()
    }
    render(){
        return(
            <div>
             <h2>Here is a parent</h2>
             <Child ref={this.referenceChild} />
             <button onClick={this.changeChildState}>Change child name (held in child state) from Parent</button>
            </div>
        )
    }
}
export default Parent