import { connect } from "react-redux";
import { searchPosts } from "../actions";
import PostFilter from "../../components/PostFilter";

const mapStateToProps = function({ posts }) {
  return {
    search: posts.search,
    ...posts
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    searchPosts: function(searchValue) {
      dispatch(searchPosts(searchValue));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFilter);
