import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <NavLink className="header__nav-link" exact to="/">
        Home
      </NavLink>
      <NavLink className="header__nav-link" exact to="/add-profile">
        Add Profile
      </NavLink>
    </div>
  );
}

export default Header;
