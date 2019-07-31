import {
  LOADING_POST_COMMENTS,
  POST_COMMENTS_FETCH_ERROR,
  RECEIVED_POST_COMMENTS,
  POSTING_COMMENT,
  COMMENT_FAILED_TO_POST,
  COMMENT_POST_SUCCESS
} from "../actions";

const initialState = {
  comments: [],
  loading: false,
  error: false,
  posting: false,
  postFailure: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_POST_COMMENTS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case POST_COMMENTS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_POST_COMMENTS:
      return {
        ...state,
        loading: false,
        error: false,
        comments: action.payload
      };
    case POSTING_COMMENT:
      return {
        ...state,
        posting: true,
        postFailure: false
      };
    case COMMENT_FAILED_TO_POST:
      return {
        ...state,
        posting: false,
        postFailure: true
      };
    case  COMMENT_POST_SUCCESS:
      return {
        ...state,
        posting: false,
        postFailure: false,
        comments: state.comments.concat(action.payload)
      };
    default:
      return state;
  }
}

export default reducer;
