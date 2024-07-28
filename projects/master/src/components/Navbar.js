import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render(){
        return(
            <div>
                <h1>Learning React</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/components">Components</Link>&nbsp;|&nbsp;
                <Link to="/apis">API</Link>&nbsp;|&nbsp;
                <Link to="/jwt">JWT</Link>
            </div>
        )
    }
}
export default Navbar