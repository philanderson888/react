import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render(){
        return(
            <div>
                <h1>React API Application</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/api-get">API Get</Link>&nbsp;|&nbsp;
                <Link to="/api-post">API Post</Link>
            </div>
        )
    }
}
export default Navbar