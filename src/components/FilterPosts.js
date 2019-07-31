import React, { Component } from "react";
import { Form, Label, Input } from "reactstrap";

class FilterPosts extends Component {
  render() {
    return (
      <Form>
        <Label for="filter-field" />
        <Input
          className="lux-control"
          type="text"
          id="filter-field"
          placeholder="Search by Title"
        />
      </Form>
    );
  }
}

export default FilterPosts;
