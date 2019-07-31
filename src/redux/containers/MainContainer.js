import { connect } from "react-redux";
import { getPosts } from "../thunks";
import Main from "../../components/Main";

const mapStateToProps = function({ posts }) {
  return {
    error: posts.error,
    loading: posts.loading,
    ...posts
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getPosts: function() {
      dispatch(getPosts());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
