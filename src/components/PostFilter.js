import React  from "react";
import { Form, Label, Input } from "reactstrap";

function PostFilter({ searchPosts, search }) {
  function changeHandler(e) {
    searchPosts(e.target.value);
  }
    return (
      <Form>
        <Label for="filter-field" />
        <Input
          className="lux-control"
          type="text"
          id="filter-field"
          placeholder="Search by Title"
          value={search} 
          onChange={changeHandler}
        />
      </Form>
    );
  }

export default PostFilter;
