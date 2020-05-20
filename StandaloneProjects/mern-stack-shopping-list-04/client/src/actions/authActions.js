import axios from 'axios';
import { returnErrors } from './errorActions';
import {    USER_LOADED, USER_LOADING, AUTH_ERROR, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL
} from './types'
// check token and load user
// whenever we need the token call tokenConfig(getState) which gets token
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    // res.data holds user object and token
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => 
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};
// Register User
// using {} destructures an object
export const register = ({name, email, password}) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // Request body
    // res.data has user and token 
    // check authReducer for REGISTER_FAIL
    // use returnErrors method in actions\errorActions 
    const body = JSON.stringify({name, email, password});
    axios.post ('/api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch (returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        })

}


// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}


// setup config / headers and token
export const tokenConfig = getState => {
   // get token from localStorage
   const token = getState().auth.token;
   // headers
   const config = {
       headers: {
           "Content-type": "application/json"
       }
   }
   // if token then add to headers
   // this is the critical line which adds the token into the header of the http request!!!!
   if(token){
       config.headers['x-auth-token'] = token;
   }
    
   return config;
}