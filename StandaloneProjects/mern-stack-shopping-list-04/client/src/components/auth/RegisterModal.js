import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'
// by default modal is not open so set to false
class RegisterModal extends Component {
    state = { 
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired 
    }
    // built-in lifecycle hook
    // error is available to us because we imported it in at const mapStateToProps
    componentDidUpdate (prevProps){
        console.group(`checking if the component has updated or not`)
        const { error, isAuthenticated } = this.props; 
        console.log(`previous props error is ${JSON.stringify(prevProps.error)}`)
        console.log(`error is ${JSON.stringify(error)}`)
        // see if error has changed
        //console.log(error.msg.msg)
        if (error !== prevProps.error){
            console.log(`the error has changed`)
             if (error.id === 'REGISTER_FAIL'){
                 this.setState({ msg: error.msg.msg });
             } else {
                this.setState ({ msg:null })
            }
        }
        console.groupEnd();
        // if authenticated close modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }
    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }
    // e is an event parameter 
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;
        const newUser = { name, email, password };
        // try to register new user
        this.props.register(newUser);
    }
    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">Register</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {  this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null } 
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                {/* name matches field from state */}
                                {/* onChange fired on every keystroke */}
                                {/* className="mb-3" adds margin bottom 3 */}
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onChange} className="mb-3" />
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} className="mb-3" />
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} className="mb-3" />
                                <Button color="dark" block style={{ marginTop:'2rem' }}>Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
// get items from reducer
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
// register is a prop
export default connect (mapStateToProps, { register, clearErrors })(RegisterModal);