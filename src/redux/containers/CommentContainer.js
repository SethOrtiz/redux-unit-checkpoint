import { connect } from "react-redux";
import { getPostComments } from '../thunks'
import Post from '../../components/Post'

const mapStateToProps = function({ comments }) {
    return {
        error: comments.error,
        loading: comments.loading,
        ...comments
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        getComments: function() {
            dispatch(
                getPostComments()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)