import React, { Component } from "react";
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
  Input
} from "reactstrap";

import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

class Post extends Component {
  componentDidMount = () => {
    this.props.getComments();
  };

  render() {
    const { error, loading, comments } = this.props;
    return (
      <Row className="mt-3">
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                Post Title | <FaArrowUp /> 1 <FaArrowDown />
              </CardTitle>
              <CardSubtitle>Post Author</CardSubtitle>
              <CardText>Post Body</CardText>
              <hr />
              a few seconds ago | <FaComment /> 2 Comments
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input
                    type="text"
                    name="comment"
                    id="comment-field"
                    placeholder="Enter a comment here"
                  />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
              <ul className="mt-2">
                <h1>comments</h1>
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
                {comments.length > 0 && (
                  <div>
                    {comments.map(comment => {
                      return <li key={comment.id}>{comment.content}</li>;
                    })}
                  </div>
                )}
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Post;
