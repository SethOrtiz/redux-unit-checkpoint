import { connect } from "react-redux";
import { getPostComments, addComment } from '../thunks'
import Post from '../../components/Post'

const mapStateToProps = function({ comments }) {
    return {
        error: comments.error,
        loading: comments.loading,
        postFailure: comments.postFailure,
        posting: comments.posting,
        ...comments
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        getPostComments: function() {
            dispatch(
                getPostComments()
            )
        },
        addComment: function(content, postId) {
            dispatch(
                addComment(content, postId)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)