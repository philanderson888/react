import React from 'react'
class Child extends React.Component {
    render(){
        return(
            <>
                <p>Child Component</p>
                <p>{this.props.data} </p>
            </>
        );
    }
}
export default Child