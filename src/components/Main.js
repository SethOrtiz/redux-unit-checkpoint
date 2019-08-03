import React, { Component } from "react";
import FormContainer from "../redux/containers/FormContainer";
import { Container, Row, Col } from "reactstrap";
import CommentContainer from "../redux/containers/CommentContainer";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer toastClassName="toastStyle" autoClose={2000} />
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
            <div>
              <div className="space-picture mt-3" />
              <Container className="card-lux ">
                <div>
                  <h3 style={{ margin: "0.75em 0" }}>Join the fun</h3>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto cum aperiam voluptate, ab natus quis praesentium
                    aut omnis nobis quisquam libero eveniet iste dicta.
                  </p>
                </div>
                <FormContainer />
              </Container>
            </div>
            <div>
              <Container className="card-lux mt-3">
                <div>
                  <h3 style={{ margin: "0.75em 0" }}>About this project</h3>
                  <h6>Technologies </h6>
                  <ul className="subtitle">
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>Redux-Thunk</li>
                    <li>React-Moment</li>
                    <li>Reactstrap</li>
                    <li>Bootstrap</li>
                  </ul>
                  <h6>Features</h6>
                  <ul className="subtitle">
                    <li>View posts</li>
                    <li>Toggle forms</li>
                    <li>Create posts</li>
                    <li>See the post's time of creation</li>
                    <li>Up-vote/ Down-vote</li>
                    <li>Filter based on post title</li>
                    <li>Add comments</li>
                    <li>Forms validate in real time</li>
                    <li>Posts dynamically reorder according to their votes</li>
                  </ul>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
