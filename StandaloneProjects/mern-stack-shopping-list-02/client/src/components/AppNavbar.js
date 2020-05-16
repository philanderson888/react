import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
class AppNavbar extends Component {
    state = {
        isOpen:false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    // mb-5 is margin-bottom:5 below the navbar
    // ml-auto aligns links to right
    render(){
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5" >
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="http://www.bbc.co.uk">BBC</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}
export default AppNavbar
