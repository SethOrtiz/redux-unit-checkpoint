import React, { Component } from "react";
import AddPostForm from "./AddPostForm";
import FilterPosts from "./FilterPosts";
import { Container, Row, Col, Button } from "reactstrap";
import CommentContainer from "../redux/containers/CommentContainer";

class Main extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    const { error, loading, posts } = this.props;
    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{ size: 8, offset: 1 }}>
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button color="secondary">Add Post</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={{ size: 11, offset: 1 }}>
            <AddPostForm />
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{ size: 9, offset: 1 }}>
            <div>
              <h1>Posts</h1>
              {error && (
                <div>
                  <img
                    src="https://thumbs.gfycat.com/BewitchedShamefulDobermanpinscher-max-1mb.gif"
                    alt="error animated gif"
                    style={{ width: "256px" }}
                  />
                </div>
              )}
              {loading && (
                <div>
                  <img
                    src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"
                    alt="loading spinner"
                    style={{ width: "256px" }}
                  />
                </div>
              )}
              {posts.length > 0 && (
                <div>
                  {posts.map(post => {
                    return <CommentContainer key={post.id} {...post} />;
                  })}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
