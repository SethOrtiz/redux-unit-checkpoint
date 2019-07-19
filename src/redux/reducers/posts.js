
import { LOADING_POSTS, POSTS_FETCH_ERROR, RECEIVED_POSTS } from '../actions'

const initialState = {
    posts: [],
    loading: false,
    error: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case LOADING_POSTS:
            return {
                ...state,
                loading: true,
                error: false
            }
        case POSTS_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case RECEIVED_POSTS:
            return {
                ...state,
                loading: false,
                error: false,
                posts: action.payload
            }
        default:
            return state;
    }
}

export default reducer