import React  from "react";
import { Form, Label, Input, InputGroupAddon, InputGroupText, InputGroup} from "reactstrap";
import {FaSearch} from "react-icons/fa"

function PostFilter({ searchPosts, search }) {
  function changeHandler(e) {
    searchPosts(e.target.value);
  }
    return (
      <Form>
      <InputGroup style={{backgroundColor: '#fff', width: '101%'}}>
        <Label for="filter-field" />
        <InputGroupAddon addonType="prepend">
        <InputGroupText style={{backgroundColor: '#fff', border: 'none'}} ><FaSearch/></InputGroupText>
        <Input
        style={{backgroundColor: '#fff', width: "20em"}} 
          className="lux-control"
          type="text"
          id="filter-field"
          placeholder="Search by Title"
          value={search} 
          onChange={changeHandler}
        />
        </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }

export default PostFilter;
