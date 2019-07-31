import React, { Component } from "react";
import { Form, Label, Input } from "reactstrap";


class FilterPosts extends Component {
  render() {
    return (
        <Form inline style={{display: 'flex', justifyContent: 'center'}}>
          <Label for="filter-field" />
          <Input
            style={{width: '40em'}}
            type="text"
            id="filter-field"
            placeholder="Search by Title"
          />
        </Form>
    );
  }
}

export default FilterPosts;
