import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

console.group(`Logout Component Class declares propTypes and inside it is logout`);
console.groupEnd();

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };
    render(){
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="#" >Logout</NavLink>
            </Fragment>
        );
    }
}
export default connect( null , { logout })(Logout);