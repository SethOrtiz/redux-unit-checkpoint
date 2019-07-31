import {
  LOADING_POSTS,
  POSTS_FETCH_ERROR,
  RECEIVED_POSTS,
  POSTING_POST,
  POST_FAILED_TO_POST,
  POST_POST_SUCCESS
} from "../actions";

const initialState = {
  posts: [],
  loading: false,
  error: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_POSTS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case POSTS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_POSTS:
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload
      };
    case POSTING_POST:
      return {
        ...state,
        posting: true,
        postFailure: false
      };
    case POST_FAILED_TO_POST:
      return {
        ...state,
        posting: false,
        postFailure: true
      };
    case POST_POST_SUCCESS:
      return {
        ...state,
        posting: false,
        postFailure: false,
        posts: state.posts.concat(action.payload)
      };
    default:
      return state;
  }
}

export default reducer;
