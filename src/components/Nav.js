import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import FilterPosts from "./FilterPosts";

const navStyle = {
  
};

export default class Example extends React.Component {
  render() {
    return (
      <Navbar style={navStyle} light>
        <NavbarBrand href="/">
          Reddit Clone
        </NavbarBrand>
        <Nav>
          <FilterPosts />
        </Nav>
      </Navbar>
    );
  }
}
