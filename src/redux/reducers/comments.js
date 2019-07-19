
import { LOADING_POST_COMMENTS, POST_COMMENTS_FETCH_ERROR, RECEIVED_POST_COMMENTS } from '../actions'

const initialState = {
    comments: [],
    loading: false,
    error: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case LOADING_POST_COMMENTS:
            return {
                ...state,
                loading: true,
                error: false
            }
        case POST_COMMENTS_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case RECEIVED_POST_COMMENTS:
            return {
                ...state,
                loading: false,
                error: false,
                comments: action.payload
            }
        default:
            return state;
    }
}

export default reducer