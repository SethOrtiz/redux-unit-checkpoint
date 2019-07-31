import React, { Component } from "react";
import FormContainer from "../redux/containers/FormContainer";
import { Container, Row, Col } from "reactstrap";
import CommentContainer from "../redux/containers/CommentContainer";

class Main extends Component {


  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    const { error, loading, posts } = this.props;
    return (
      <Container className="mt-4">
        <Row className="mt-4">
          <Col sm={{ size: 11, offset: 1 }}>
            <FormContainer />
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{ size: 9, offset: 1 }}>
            <div>
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
                    return <CommentContainer key={post.id} {...post} postId={post.id} />;
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
