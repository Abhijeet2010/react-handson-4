import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Abhijeet Raut</h1>
        <ul>
          <NavLink
            to={"/"}
            style={{ paddingRight: "20px", textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/studenttable"
            style={{ paddingRight: "20px", textDecoration: "none" }}
          >
            Student
          </NavLink>
          <NavLink
            to="/contact"
            style={{ paddingRight: "20px", textDecoration: "none" }}
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
