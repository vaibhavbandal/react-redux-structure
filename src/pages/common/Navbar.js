import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (   
    <div>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/user"}>User</NavLink></li>
            <li><NavLink to={"/category"}>Category</NavLink></li>
            <li><NavLink to={"/story"}>Story</NavLink></li>
        </ul>
    </div>
  );
};

export default Navbar;
