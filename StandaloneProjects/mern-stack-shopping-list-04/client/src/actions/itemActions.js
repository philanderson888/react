import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
// dispatch sends the type along with the request for data
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('./api/items')
        .then( res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )        
}
// res.data is the new item 
export const addItem = (item) => dispatch => {
    const config = {
        headers: {
            "x-auth-token" : localStorage.getItem('token')
        }
    }
    console.log(`attempting to POST in itemActions.js ie item is ${JSON.stringify(item)} 
            and headers are ${JSON.stringify(config)}}`)
    axios
        .post('/api/items', item, config)
        .then( res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
}
export const deleteItem = (id) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token" : localStorage.getItem('token')
        }
    }
    console.group(`attempting to DELETE AN ITEM in itemActions js ie item ID is ${id}`);
    console.log(`and headers are ${JSON.stringify(config)}`);
    console.groupEnd();
    axios
        .delete(`/api/items/${id}`, config)
        .then( res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
