import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
// by default modal is not open so set to false
class ItemModal extends Component {
    state = { 
        modal: false,
        name: ''
    }
    toggle = () => {
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
        const newItem = {
            name: this.state.name
        }
        // add item via addItem action
        this.props.addItem(newItem);
        // close modal
        this.toggle();
    }
    render(){
        return(
            <div>
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                {/* name matches field from state */}
                                {/* onChange fired on every keystroke */}
                                <Input type="text" name="name" placeholder="Add shopping item"
                                   onChange={this.onChange} />
                                   <Button color="dark" block style={{ marginTop:'2rem' }}  >Add New Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);