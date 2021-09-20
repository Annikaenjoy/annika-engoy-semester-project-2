import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import GlobalContext from '../context/GlobalContext';

// Logo
// import iReg from "../assets/images/ireg.png";

const NavBar = () => {
   const Global = React.useContext(GlobalContext)

   const LogOut = () =>{
     Global.setUserAuth(null)
   }
  
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
            <NavLink className="nav_link" to="/cart">
              Cart
            </NavLink>
            {!Global._USER_AUTH ? 
              <NavLink className="nav_link" to="/login">
              Login
            </NavLink>
            :
            <NavLink className="nav_link" to="/admin">
              Admin
            </NavLink>}
            {Global._USER_AUTH &&
            <button className="admin-btn"  onClick={()=>{LogOut()}}>
            
              Log out
            </button>
}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
