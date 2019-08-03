import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const urlRegex = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
);

class AddPostForm extends Component {
  state = {
    modal: false,
    formIncomplete: false,
    author: "",
    content: "",
    title: "",
    img_url: "",
    formValid: false,
    titleValid: false,
    titleInvalid: false,
    authorValid: false,
    contentValid: false,
    img_urlValid: false,
    authorInvalid: false,
    contentInvalid: false,
    img_urlInvalid: false,
    formErrors: {
      author: "",
      content: "",
      title: "",
      img_url: ""
    }
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  };

  validateForm = () => {
    const { authorValid, contentValid, titleValid, img_urlValid } = this.state;
    let formValid = false
    if ( authorValid && contentValid && titleValid && img_urlValid ) {
      formValid = true
    } else {
      this.setState({formIncomplete : true})
    }
      return formValid
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "title":
        formErrors.title = value.length === 0 ? "field required" : "";
        value.length === 0 ? this.setState({titleInvalid: true, titleValid: false}) : this.setState({titleValid: true, titleInvalid: false});
        break;
      case "content":
        formErrors.content = value.length === 0 ? "field required" : "";
        value.length === 0 ? this.setState({contentInvalid: true, contentValid: false}) : this.setState({contentValid: true, contentInvalid: false});
        break;
      case "author":
        formErrors.author = value.length === 0 ? "field required" : "";
        value.length === 0 ? this.setState({authorInvalid: true, authorValid: false}) : this.setState({authorValid: true, authorInvalid: false});
        break;
      case "img_url":
        formErrors.img_url = urlRegex.test(value) ? "" : "invalid url";
        urlRegex.test(value) ? this.setState({img_urlValid: true, img_urlInvalid: false}) : this.setState({img_urlInvalid: true, img_urlValid: false});
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value, formIncomplete: false });
  };

  resetState = () => {
    this.setState({
      modal: false,
      formIncomplete: false,
      author: "",
      content: "",
      title: "",
      img_url: "",
      titleValid: false,
      titleInvalid: false,
      authorValid: false,
      contentValid: false,
      img_urlValid: false,
      authorInvalid: false,
      contentInvalid: false,
      img_urlInvalid: false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      const { author, content, title, img_url } = this.state;
      this.props.addPost(author, content, title, img_url);
      this.resetState();
    } else {
      this.setState({
        fromIncomplete: true
      });
    }
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

          <Form onSubmit={this.handleSubmit} noValidate>
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
                  noValidate
                  valid={this.state.titleValid}
                  invalid={this.state.titleInvalid}
                  required
                />
                <FormFeedback style={{ marginLeft: "1em" }}>
                  {this.state.formErrors.title}
                </FormFeedback>
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
                  noValidate
                  valid={this.state.contentValid}
                  invalid={this.state.contentInvalid}
                />
                <FormFeedback style={{ marginLeft: "1em" }}>
                  {this.state.formErrors.content}
                </FormFeedback>
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
                  noValidate
                  valid={this.state.authorValid}
                  invalid={this.state.authorInvalid}
                />
                <FormFeedback style={{ marginLeft: "1em" }}>
                  {this.state.formErrors.author}
                </FormFeedback>
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
                  noValidate
                  valid={this.state.img_urlValid}
                  invalid={this.state.img_urlInvalid}
                />{" "}
                <FormFeedback style={{ marginLeft: "1em" }}>
                  {this.state.formErrors.img_url}
                </FormFeedback>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
            { this.state.formIncomplete && (<FormText style={{ marginRight: "25%"}}> Form Incomplete </FormText>)}
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
