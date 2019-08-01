import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";


class AddPostForm extends Component {
  state = {
    modal: false,
    author: "",
    content: "",
    title: "",
    img_url: ""
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  };

  handleSubmit = e => {
    this.toggle();
    const author = this.state.author;
    const content = this.state.content;
    const title = this.state.title;
    const img_url = this.state.img_url;
    this.props.addPost(author, content, title, img_url);
    e.preventDefault();
  };

  render() {
    const { postFailure, posting } = this.props;
    return (
      <>
        <Button
          className="lux"
          color="dark"
          style={{ width: "100%" }}
          onClick={this.toggle}
        >
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
        <br />
        <Modal isOpen={this.state.modal} className="lux">
          <ModalHeader toggle={this.toggle}>New Post</ModalHeader>

          <Form onSubmit={this.handleSubmit}>
            <ModalBody>
              <FormGroup>
                <Label for="title-field">Title</Label>
                <Input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                  id="title-field"
                  className="lux-control"
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
                  className="lux-control"
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
                  className="lux-control"
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
                  className="lux-control"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <div>
                <Button type="submit" className="lux" color="dark" outline>
                  Submit
                </Button>
              </div>
              <Button
                className="lux"
                color="dark"
                outline
                onClick={this.toggle}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </>
    );
  }
}

export default AddPostForm;
