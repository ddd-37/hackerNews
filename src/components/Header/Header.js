import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../images/y18.gif";
import Dropdown from "../UI/Dropdown/Dropdown";

const Header = () => (
  <div className="Header">
    <div className="Header__logo">
      <img src={logo} alt="Hacker Logo" />
    </div>
    <div className="Header__links">
      <NavLink to="/">
        <span className="Header__title">Hacker News</span>
      </NavLink>
      <div>
        <Dropdown />|<NavLink to="/ask"> ask</NavLink> |{" "}
        <NavLink to="/show"> show</NavLink> |<NavLink to="/jobs"> jobs</NavLink>{" "}
      </div>
    </div>
  </div>
);

export default Header;
