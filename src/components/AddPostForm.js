import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Collapse
} from "reactstrap";

const formStyle = {
  backgroundColor: "white",
  padding: "1em",
  boxShadow: "0.1em 0.2em 0.5em #888888",
  marginBottom: "1em"
};

class AddPostForm extends Component {
  state = {
    collapse: false,
    author: "",
    content: "",
    title: "",
    img_url: ""
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  toggle = () => {
    this.setState(prevState => {
      return {
        collapse: !prevState.collapse
      };
    });
  };

  handleSubmit = e => {
    const author = this.state.author;
    const content = this.state.content;
    const title = this.state.title;
    const img_url = this.state.img_url;
    this.props.addPost(author, content, title, img_url);
    e.preventDefault();
    console.log(author);
  };

  render() {
    const { postFailure, posting } = this.props;
    return (
      <>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Button color="light" style={{ width: "40%" }} onClick={this.toggle}>
            Create A Post
          </Button>
          {postFailure && (
            <div>
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
        </Row>
        <br />
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col sm="10">
              <Form style={formStyle} onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="title-field">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    id="title-field"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="body-field">Content</Label>
                  <Input
                    type="text"
                    name="content"
                    onChange={this.handleChange}
                    required
                    value={this.state.content}
                    id="body-field"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="author-field">Author</Label>
                  <Input
                    type="text"
                    name="author"
                    onChange={this.handleChange}
                    required
                    value={this.state.author}
                    id="author-field"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="image-field">Image URL</Label>
                  <Input
                    type="text"
                    name="img_url"
                    onChange={this.handleChange}
                    required
                    value={this.state.img_url}
                    id="image-field"
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </>
    );
  }
}

export default AddPostForm;
