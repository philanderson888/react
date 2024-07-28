import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
// dispatch sends the type along with the request for data
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('./api/items')
        .then( res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));       
}
// res.data is the new item 
export const addItem = (item) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
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
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));       
        
}
export const deleteItem = (id) => (dispatch, getState) => {
    console.group(`attempting to DELETE AN ITEM in itemActions js ie item ID is ${id}`);
    console.log(`and headers are ${JSON.stringify(tokenConfig(getState))}`);
    console.groupEnd();
    axios
        .delete(`/api/items/${id}`, tokenConfig(getState))
        .then( res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));       
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
