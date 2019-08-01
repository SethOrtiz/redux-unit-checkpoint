import React, { Component } from "react";
import Moment from "react-moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Form,
  Input,
  Collapse
} from "reactstrap";

import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

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
  handleChange = e => {
    this.setState({
      newCommentValue: e.target.value
    });
  };

  handleSubmit = e => {
    this.props.addComment(this.state.newCommentValue, this.props.postId);
    e.preventDefault();
  };

  handleUpVote = () => {
    this.props.getUpVote(this.props.postId);
  };

  handleDownVote = () => {
    if (this.props.votes > 0) {
    this.props.getDownVote(this.props.postId);
    }
  };

  render() {
    const { 
      error,
      loading,
      postFailure,
      posting,
      comments,
      postId
    } = this.props;

    const postComments = comments.filter(comment => comment.post_id === postId);
  
    return (
      <Row className="mt-3">
        <Col style={{ display: "flex" }}>
          <Card className="card-lux">
            <CardBody>
              Posted by {this.props.author}
              <br />
              <Moment style={{ color: "#343a40", fontSize: "0.8em" }} fromNow>
                {this.props.createdAt}
              </Moment>
            </CardBody>
            <CardImg
              top
              width="90%"
              src={this.props.img_url}
              alt="Card image"
            />
            <CardBody style={{ backgroundColor: "#f9f9f9" }}>
              <CardTitle style={{ fontWeight: "500", fontSize: "1.2em" }}>
                {this.props.title}
              </CardTitle>
              <CardText style={{ fontWeight: "300", fontSize: "0.9em" }}>
                {this.props.content}
              </CardText>
              <hr />
              <Button
                onClick={this.toggle}
                className="lux"
                style={{ width: "50%" }}
                color="light"
              >
                <FaComment /> {postComments.length} Comments
              </Button>
              <span style={{ marginLeft: "10%" }}>
                <span style={{ marginRight: "2%" }}>
                  {" "}
                  Votes {this.props.votes >= 0 ? this.props.votes : 0}
                </span>
                <Button
                  onClick={this.handleUpVote}
                  className="lux"
                  style={{ width: "10%"}}
                  color="dark"
                  outline
                >
                  <FaArrowUp />
                </Button>
                <Button
                  onClick={this.handleDownVote}
                  className="lux"
                  style={{ width: "10%" }}
                  color="dark"
                  outline
                >
                  <FaArrowDown />
                </Button>
              </span>
              <Collapse isOpen={this.state.collapse} id="commentContainer">
                <hr />
                <Form style={{ marginTop: "1em" }} onSubmit={this.handleSubmit}>
                  <div style={{ width: "100%", display: "flex" }}>
                    <span style={{ width: "80%" }}>
                      <Input
                        type="text"
                        name="comment"
                        id="comment-field"
                        placeholder="Enter a comment here..."
                        value={this.state.newCommentValue}
                        onChange={this.handleChange}
                        required
                        className="lux-control"
                      />
                    </span>
                    <span style={{ width: "20%" }}>
                      <Button type="submit" className="lux" color="dark" outline>
                        Submit
                      </Button>
                    </span>
                  </div>

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
                        return <div key={comment.id}>{comment.content}</div>;
                      })}
                    </div>
                  )}
                </ul>
              </Collapse>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Post;

// comment.postId === this.props.PostId
