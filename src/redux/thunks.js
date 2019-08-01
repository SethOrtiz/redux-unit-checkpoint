import {
  loadingPosts,
  postsFetchError,
  fetchPosts,
  loadingPostComments,
  postCommentsFetchError,
  fetchPostComments,
  postingPost,
  postFailedToPost,
  postPostSuccess,
  postingComment,
  commentFailedToPost,
  commentPostSuccess,
  loadingUpVote,
  increaseVote,
  increaseVoteError,
  loadingDownVote,
  decreaseVote,
  decreaseVoteError,
  sortByVotes
} from "./actions";
  import { toast } from 'react-toastify';

export function getPosts() {
  return async function(dispatch) {
    dispatch(loadingPosts());
    try {
      const res = await fetch(`http://localhost:8082/api/posts`);
      if (!res.ok) {
        throw new Error();
      }
      const unsortedJson = await res.json();
      const postsJson = unsortedJson.sort((a, b) => b.votes - a.votes)
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

export function getUpVote(postId) {
  return async function(dispatch) {
    dispatch(loadingUpVote());
    try {
      const res = await fetch(
        `http://localhost:8082/api/posts/votes/increase/${postId}`
      );
      if (!res.ok) {
        throw new Error();
      }
      const updatedPost = await res.json();
      dispatch(increaseVote(updatedPost, postId)).then(dispatch(sortByVotes()));
    } catch (e) {
      dispatch(increaseVoteError());
    }
  };
}


export function getDownVote(postId) {
  return async function(dispatch) {
    dispatch(loadingDownVote());
    try {
      const res = await fetch(
        `http://localhost:8082/api/posts/votes/decrease/${postId}`
      );
      if (!res.ok) {
        throw new Error();
      }
      const updatedPost = await res.json();
      dispatch(decreaseVote(updatedPost, postId)).then(dispatch(sortByVotes()));;
    } catch (e) {
      dispatch(decreaseVoteError());
    }
  };
}
export function addPost(author, content, title, img_url) {
  return async function(dispatch) {
    dispatch(postingPost());
    try {
      const res = await fetch(`http://localhost:8082/api/posts`, {
        method: "POST",
        body: JSON.stringify({
          author,
          content,
          title,
          img_url
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        toast("Posted!")
        const newPostJson = await res.json();
        dispatch(postPostSuccess(newPostJson));
      }
    } catch (e) {
      dispatch(postFailedToPost());
      console.log(e);
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
      console.log(e);
    }
  };
}
