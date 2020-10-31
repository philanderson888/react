import React from 'react'
class APIGet extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoaded:false,
            error:null,
            users:[]
        }
    }
    render(){
        return(
            <div>
                <h2>API Get Users</h2>
            </div>
        )
    }
}
export default APIGet