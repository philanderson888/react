import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    render(){
        return(
            <div>
                <h2>React Routing</h2>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/component01">Component01</Link>&nbsp;|&nbsp;
                <Link to="/component02">Component02</Link>&nbsp;|&nbsp;
                <Link to="/state01">State01</Link>
                <br /><br />
            </div>
        )
    }
}
export default Navbar