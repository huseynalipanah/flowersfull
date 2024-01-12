import React from "react";
import "./Navbar.scss"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-text">
        <span>Floral Studio</span>
      </div>
      <div className="nav-menu">
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink>About Us</NavLink></li>
            <li><NavLink>Portfolio</NavLink></li>
            <li><NavLink to='/add'>Add</NavLink></li>
            <li><NavLink>Contacts</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
