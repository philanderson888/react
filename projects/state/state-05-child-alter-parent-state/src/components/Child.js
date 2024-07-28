import React from 'react'
class Child extends React.Component {
    render(){
        return(
            <div>
                <p>Here is a child</p>
                <button onClick={this.props.action}>Click here to alter parent state from child</button>
            </div>
        )
    }
}
export default Child