import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem,Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
// uuid generates id
class ShoppingList extends Component {
    static propTypes = {
        getItem: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };
    // pull out items from this.state and put it into an object
    // if(name) checks it item is present in field
    // ... is spread operator which I think picks up values from another array and inserts them here 
    render(){
        // item is whole object
        // items is array within item!?!?!    ie  this.props.item.items
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( ({_id,name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {/* delete button deletes item by creating a new array from every item */}
                                    {/* which does not map deleted item */}
                                    { this.props.isAuthenticated 
                                        ? <Button className="remove-btn" color="danger" size="sm" 
                                              onClick={this.onDeleteClick.bind(this,_id)}>&times;
                                            </Button>
                                        : null
                                    }
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { getItems, addItem, deleteItem })(ShoppingList);
