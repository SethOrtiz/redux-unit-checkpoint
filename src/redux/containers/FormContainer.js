import { connect } from "react-redux";
import { addPost } from "../thunks";
import AddPostForm from "../../components/AddPostForm"

const mapStateToProps = function({ posts }) {
  return {
    postFailure: posts.postFailure,
    posting: posts.posting,
    ...posts
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    addPost: function(author, content, title, img_url) {
      dispatch(addPost(author, content, title, img_url));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostForm);