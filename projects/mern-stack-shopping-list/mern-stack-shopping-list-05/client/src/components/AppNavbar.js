import React, { Component, Fragment } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container
} from 'reactstrap'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal'
import LoginModal from './auth/LoginModal'
import Logout from './auth/Logout';
class AppNavbar extends Component {
    state = {
        isOpen:false
    }
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    // mb-5 is margin-bottom:5 below the navbar
    // ml-auto aligns links to right
    // get { isAuthenticated, user } items from const initialState in `authReducer.js`
    // authorised user can log out
    // guest user can register or log in
    render(){
        const { isAuthenticated, user  } = this.props.auth;
        const authLinks = (
            <Fragment>
                <span className="navbar-text mr-3">
                    <strong>
                        { user ? `Welcome ${user.name}` : ''  }
                    </strong>
                </span>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5" >
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar >
                            <Nav className='ml-auto' navbar>
                                { isAuthenticated ? authLinks : guestLinks }
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    auth: state.auth
});
export default connect(mapStateToProps, null)(AppNavbar);
