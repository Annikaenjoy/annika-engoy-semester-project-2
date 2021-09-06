import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Logo
// import iReg from "../assets/images/ireg.png";

const NavBar = () => {
  return (
    <>
      <Navbar className="navbar" bg="background" expand="lg">
        <Navbar.Brand href="/">
          {/* <img className="logo" src={} alt="logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-position ml-auto">
            <NavLink className="nav_link" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav_link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav_link" to="/profile">
              Profile
            </NavLink>
            <NavLink className="nav_link" to="/cart">
              Cart
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
