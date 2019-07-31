import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";



export default class Example extends React.Component {
  render() {
    return (
      <Navbar className="navbar-lux" light>
        <NavbarBrand className="navbar-brand" href="/">
          Reddit Clone
        </NavbarBrand>
      </Navbar>
    );
  }
}
