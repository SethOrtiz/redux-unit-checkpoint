import {
  loadingPosts,
  postsFetchError,
  fetchPosts,
  loadingPostComments,
  postCommentsFetchError,
  fetchPostComments,
  postingComment,
  commentFailedToPost,
  commentPostSuccess
} from "./actions";

export function getPosts() {
  return async function(dispatch) {
    dispatch(loadingPosts());
    try {
      const res = await fetch(`http://localhost:8082/api/posts`);
      if (!res.ok) {
        throw new Error();
      }
      const postsJson = await res.json();
      dispatch(fetchPosts(postsJson));
    } catch (e) {
      dispatch(postsFetchError());
    }
  };
}

export function getPostComments() {
  return async function(dispatch) {
    dispatch(loadingPostComments());
    try {
      const res = await fetch(`http://localhost:8082/api/comments`);
      if (!res.ok) {
        throw new Error();
      }
      const commentsJson = await res.json();
      dispatch(fetchPostComments(commentsJson));
    } catch (e) {
      dispatch(postCommentsFetchError());
    }
  };
}

export function addComment(content, post_id) {
  return async function(dispatch) {
    dispatch(postingComment());
    try {
      const res = await fetch(`http://localhost:8082/api/comments`, {
        method: "POST",
        body: JSON.stringify({
          content,
          post_id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        const newCommentJson = await res.json();
        dispatch(commentPostSuccess(newCommentJson));
      }
    } catch (e) {
      dispatch(commentFailedToPost());
      console.log(e)
    }
  };
}
