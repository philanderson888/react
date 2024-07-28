import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';
// loading = true when data is being loaded from api
const initialState = {
    items: [],
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        // note that action.payload holds the id
        case DELETE_ITEM:
            return {
                ...state,
                items:state.items.filter(listItem=>listItem._id !== action.payload)
            }
        // [action.payload] holds new item coming in on ADD
        case ADD_ITEM: {
            return {
                ...state,
                items: [action.payload, ...state.items]  
            }
        }
        case ITEMS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state;
    }
}


