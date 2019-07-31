import React, { Component } from "react";
import {Row, Col, Form,  FormGroup, Label, Input, Button, Collapse } from "reactstrap";

const fStyle = {
  backgroundColor: "white",
  padding: "1em",
  boxShadow: "0.1em 0.2em 0.5em #888888",
  marginBottom: "1em"
};

const buttonStyle = {
  width: '40%',
}

class AddPostForm extends Component {
  state = {
    collapse: false
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        collapse: !prevState.collapse
      };
    });
  };

  render() {
    return (
      <>
        <Row style={{display: 'flex', justifyContent: 'center'}}> 
          <Button color="light" style={buttonStyle} onClick={this.toggle}>Create A Post</Button>
        </Row>
        <br/>
        <Collapse isOpen={this.state.collapse}>
        <Row>
          <Col sm="10">
            <Form style={fStyle}>
              <FormGroup>
                <Label for="title-field">Title</Label>
                <Input type="text" name="title" invalid id="title-field" />
              </FormGroup>
              <FormGroup>
                <Label for="body-field">Body</Label>
                <Input type="text" name="body" required id="body-field" />
              </FormGroup>
              <FormGroup>
                <Label for="author-field">Author</Label>
                <Input type="text" name="author" required id="author-field" />
              </FormGroup>
              <FormGroup>
                <Label for="image-field">Image URL</Label>
                <Input type="text" name="image" required id="image-field" />
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
