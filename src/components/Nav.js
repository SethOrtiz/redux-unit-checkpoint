import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import FilterContainer from "../redux/containers/FilterContainer";

function Nav() {
    return (
      <>
        <Navbar className="navbar-lux" light>
          <NavbarBrand className="navbar-brand" href="/">
            Reddit Clone
          </NavbarBrand>
        </Navbar>
        <Navbar className="subBar-lux" light>
          <FilterContainer />
        </Navbar>
      </>
    );
  }

export default Nav;




