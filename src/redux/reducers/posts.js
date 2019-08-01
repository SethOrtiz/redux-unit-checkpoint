import {
  LOADING_POSTS,
  POSTS_FETCH_ERROR,
  RECEIVED_POSTS,
  POSTING_POST,
  POST_FAILED_TO_POST,
  POST_POST_SUCCESS,
  LOADING_UP_VOTE,
  INCREASE_VOTE,
  INCREASE_VOTE_ERROR,
  LOADING_DOWN_VOTE,
  DECREASE_VOTE,
  DECREASE_VOTE_ERROR,
  SEARCH_VALUE,
  SORT_BY_VOTES
} from "../actions";

const initialState = {
  posts: [],
  loading: false,
  error: false,
  posting: false,
  postFailure: false,
  voteUpdating: false,
  voteError: false,
  search: ""
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
    case LOADING_UP_VOTE:
      return {
        ...state,
        countUpdating: true,
        voteError: false
      };
    case INCREASE_VOTE_ERROR:
      return {
        ...state,
        countUpdating: false,
        voteError: true
      };
    case INCREASE_VOTE:
      return {
        ...state,
        countUpdating: false,
        voteError: false,
        posts: state.posts.map(post => {
          if (post.id === action.postId) {
            post = action.updatedPost;
          }
          return post;
        })
      };
    case LOADING_DOWN_VOTE:
      return {
        ...state,
        countUpdating: true,
        voteError: false
      };
    case DECREASE_VOTE_ERROR:
      return {
        ...state,
        countUpdating: false,
        voteError: true
      };
    case DECREASE_VOTE:
      return {
        ...state,
        countUpdating: false,
        voteError: false,
        posts: state.posts.map(post => {
          if (post.id === action.postId) {
            post = action.updatedPost;
          }
          return post;
        })
      };
    case SEARCH_VALUE:
      return {
        ...state,
        search: action.searchValue
      };
    case SORT_BY_VOTES:
      return {
        ...state,
        posts: state.posts.sort((a, b) => b.votes - a.votes)
      };
    default:
      return state;
  }
}

export default reducer;
