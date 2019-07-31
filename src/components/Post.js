import React, { Component } from "react";
import Moment from "react-moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Collapse
} from "reactstrap";

import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const votesStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#eeeeee",
  paddingTop: "1em",
  margin: "none",
  width: "7%",
  borderRadius: "3px"
};

class Post extends Component {
  state = {
    collapse: false,
    newCommentValue: ""
  };

  //////////////    fetch comments    //////////////////
  componentDidMount = () => {
    this.props.getPostComments();
  };

  ////////////////   show comments   /////////////////
  toggle = () => {
    this.setState(prevState => {
      return {
        collapse: !prevState.collapse
      };
    });
  };
  ///////////////  post a comment    ////////////////
  handleChange = (e) => {
    this.setState({
        newCommentValue: e.target.value
      }
    )};

  handleSubmit = e => {
    this.props.addComment(this.state.newCommentValue, this.props.postId);
    e.preventDefault();
  };

  render() {
    const { error, loading, postFailure, posting, comments, postId } = this.props;

    const postComments = comments.filter(comment => comment.post_id === postId);
    return (
      <Row className="mt-3">
        <Col style={{ display: "flex" }}>
          <div style={votesStyle}>
            <div>
              <FaArrowUp />
            </div>
            <strong> {this.props.votes >= 0 ? this.props.votes : 0}</strong>
            <div>
              <FaArrowDown />
            </div>
          </div>
          <span style={{ width: "93%" }}>
            <Card>
              Posted by {this.props.author}{" "}
              <Moment fromNow>{this.props.createdAt}</Moment>
              <CardImg
                top
                width="100%"
                src={this.props.img_url}
                alt="Card image"
              />
              <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle />
                <CardText>{this.props.content}</CardText>
                <hr />
                <button
                  style={{ backgroundColor: "white", border: "none" }}
                  onClick={this.toggle}
                >
                  <FaComment /> {postComments.length} Comments
                </button>
                <Collapse isOpen={this.state.collapse} id="commentContainer">
                  <Form
                    inline
                    style={{ marginTop: "1em" }}
                    onSubmit={this.handleSubmit}
                  >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Input
                        type="text"
                        name="comment"
                        id="comment-field"
                        placeholder="Enter a comment here"
                        value={this.state.newCommentValue}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                    {postFailure && (
                      <div>
                        {console.log(error)}
                        <img
                          src="https://thumbs.gfycat.com/BewitchedShamefulDobermanpinscher-max-1mb.gif"
                          alt="error animated gif"
                          style={{ width: "50px" }}
                        />
                      </div>
                    )}
                    {posting && (
                      <div>
                        <img
                          src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"
                          alt="loading spinner"
                          style={{ width: "50px" }}
                        />
                      </div>
                    )}
                  </Form>
                  <ul className="mt-2">
                    {error && (
                      <div>
                        {console.log(error)}
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
                    {postComments.length > 0 && (
                      <div>
                        {postComments.map(comment => {
                          return <li key={comment.id}>{comment.content}</li>;
                        })}
                      </div>
                    )}
                  </ul>
                </Collapse>
              </CardBody>
            </Card>
          </span>
        </Col>
      </Row>
    );
  }
}
export default Post;

// comment.postId === this.props.PostId
