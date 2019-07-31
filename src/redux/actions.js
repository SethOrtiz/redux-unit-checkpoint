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

///////////////     Add Post  //////////////////////

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
