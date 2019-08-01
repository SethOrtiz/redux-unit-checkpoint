////////////// Post Fetch //////////////////////

export const LOADING_POSTS = "LOADING_POSTS";
export function loadingPosts() {
  return {
    type: LOADING_POSTS
  };
}

export const POSTS_FETCH_ERROR = "POSTS_FETCH_ERROR";
export function postsFetchError() {
  return {
    type: POSTS_FETCH_ERROR
  };
}

export const RECEIVED_POSTS = "RECEIVED_POSTS";
export function fetchPosts(posts) {
    return {
    type: RECEIVED_POSTS,
    payload: posts
  };
}

//////////// Comments Fetch /////////////

export const LOADING_POST_COMMENTS = "LOADING_POST_COMMENTS";
export function loadingPostComments() {
  return {
    type: LOADING_POST_COMMENTS
  };
}

export const POST_COMMENTS_FETCH_ERROR = "POST_COMMENTS_FETCH_ERROR";
export function postCommentsFetchError() {
  return {
    type: POST_COMMENTS_FETCH_ERROR
  };
}

export const RECEIVED_POST_COMMENTS = "RECEIVED_POST_COMMENTS";
export function fetchPostComments(comments) {
    return {
    type: RECEIVED_POST_COMMENTS,
    payload: comments
  };
}

///////////////     Increase Vote    //////////////////////

export const LOADING_UP_VOTE = "LOADING_UP_VOTE";
export function loadingUpVote() {
  return {
    type: LOADING_UP_VOTE
  };
}

export const INCREASE_VOTE_ERROR = "INCREASE_VOTE_ERROR";
export function increaseVoteError() {
  return {
    type: INCREASE_VOTE_ERROR
  };
}

export const INCREASE_VOTE = "INCREASE_VOTE";
export function increaseVote(updatedPost, postId) {
    return {
    type: INCREASE_VOTE,
    updatedPost,
    postId
  };
}

///////////////     Decrease Vote    //////////////////////

export const LOADING_DOWN_VOTE = "LOADING_DOWN_VOTE";
export function loadingDownVote() {
  return {
    type: LOADING_DOWN_VOTE
  };
}

export const DECREASE_VOTE_ERROR = "DECREASE_VOTE_ERROR";
export function decreaseVoteError() {
  return {
    type: DECREASE_VOTE_ERROR
  };
}

export const DECREASE_VOTE = "DECREASE_VOTE";
export function decreaseVote(updatedPost, postId) {
    return {
    type: DECREASE_VOTE,
    updatedPost,
    postId
  };
}

///////////////       Add Post      //////////////////////

export const POSTING_POST = "POSTING_POST";
export function postingPost() {
    return {
    type: POSTING_POST
  };
}

export const POST_FAILED_TO_POST = "POST_FAILED_TO_POST";
export function postFailedToPost() {
  return {
    type: POST_FAILED_TO_POST
  };
}

export const POST_POST_SUCCESS = "POST_POST_SUCCES";
export function postPostSuccess(newPostJson) {
    return {
    type: POST_POST_SUCCESS,
    payload: newPostJson
  };
}

///////////////    Add Comment  //////////////////////

export const POSTING_COMMENT = "POSTING_COMMENT";
export function postingComment(postId) {
    return {
    type: POSTING_COMMENT
  };
}

export const COMMENT_FAILED_TO_POST = "COMMENT_FAILED_TO_POST";
export function commentFailedToPost() {
  return {
    type: COMMENT_FAILED_TO_POST
  };
}

export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCES";
export function commentPostSuccess(newCommentJson) {
    return {
    type: COMMENT_POST_SUCCESS,
    payload: newCommentJson
  };
}

//////////////////    Filter by Title  //////////////////////

export const SEARCH_VALUE = "SEARCH_VALUE";
export function searchPosts(searchValue) {
    return {
    type: SEARCH_VALUE,
    searchValue
  };
}

//////////////////   Sort by Votes  //////////////////////

export const SORT_BY_VOTES = "SORT_BY_VOTES";
export function sortByVotes() {
    return {
    type: SORT_BY_VOTES
  };
}