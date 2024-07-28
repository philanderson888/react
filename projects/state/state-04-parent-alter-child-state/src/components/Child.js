import React from 'react'
class Child extends React.Component {
    state = {
        name: "Child State"
    }
    changeName = () => {
        this.setState ({name:"Altered Child State"})
    }
    render(){
        return(
            <div>
              <h3>Here is a child rendering its own state as `{this.state.name}`</h3>
              <button onClick={this.changeName}>Change Name From Child</button>
            </div>
        )
    }
}
export default Child