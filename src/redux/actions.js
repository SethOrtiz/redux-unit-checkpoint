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
export function fetchPostComments(postId, comments) {
    return {
    type: RECEIVED_POST_COMMENTS,
    payload: comments
  };
}
