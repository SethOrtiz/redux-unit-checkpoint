import { loadingPosts, postsFetchError, fetchPosts, loadingPostComments, postCommentsFetchError, fetchPostComments} from './actions'


export function getPosts() {
    return async function(dispatch) {
        dispatch(
            loadingPosts()
        )
        try {
            const res = await fetch(`http://localhost:8082/api/posts`)
            if (!res.ok) {
                throw new Error()
            }
            const postsJson = await res.json()
            dispatch(
                fetchPosts(postsJson)
            )
        } catch (e) {
            dispatch(
                postsFetchError()
            )
        }
    }
}


export function getPostComments(postId) {
    return async function(dispatch) {
        dispatch(
            loadingPostComments()
        )
        try {
            const res = await fetch(`http://localhost:8082/posts/${postId}/comments`)
            if (!res.ok) {
                throw new Error()
            }
            const commentsJson = await res.json()
            dispatch(
                fetchPostComments(postId, commentsJson)
            )
        } catch (e) {
            dispatch(
                postCommentsFetchError()
            )
        }
    }
}
