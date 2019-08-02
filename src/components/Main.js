import React, { Component } from "react";
import FormContainer from "../redux/containers/FormContainer";
import { Container, Row, Col } from "reactstrap";
import CommentContainer from "../redux/containers/CommentContainer";
import FilterContainer from "../redux/containers/FilterContainer";
 import { ToastContainer} from 'react-toastify';
 
class Main extends Component {

  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    const { error, loading, posts, search } = this.props;
    const searchedPosts = posts.filter(
      post => post.title.toLowerCase().includes(search.toLowerCase()) === true
    );
    return (
      <Container>
      <ToastContainer toastClassName="toastStyle"  autoClose={2000}/>
        <Row>
          <Col lg="8">
            <Container className="mt-5">
              <h5>Popular Posts</h5>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col lg="8">
            <Container>
              <div>
                {error && (
                  <div>
                    <img
                      src="https://thumbs.gfycat.com/BewitchedShamefulDobermanpinscher-max-1mb.gif"
                      alt="error animated gif"
                      style={{ width: "80%" }}
                    />
                  </div>
                )}
                {loading && (
                  <Container>
                    <img
                      src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"
                      alt="loading spinner"
                      style={{ width: "80%" }}
                    />
                  </Container>
                )}
                {posts.length > 0 && (
                  <div>
                    {searchedPosts.map(post => {
                      return (
                        <CommentContainer
                          key={post.id}
                          {...post}
                          postId={post.id}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </Container>
          </Col>
          <Col lg="4">
            <Container className=" mt-3 card-lux ">
              <FilterContainer />
              <FormContainer />
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
