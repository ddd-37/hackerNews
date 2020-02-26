import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../images/y18.gif";

const Header = props => (
  <div className="Header">
    <div className="Header__logo">
      <img src={logo} alt="Hacker Logo" />
    </div>
    <div className="Header__links">
      <NavLink to="/news">
        <span className="Header__title">Hacker News</span>
      </NavLink>
      <div>
        <NavLink to="/new">new</NavLink> |<NavLink to="/ask"> ask</NavLink> |{" "}
        <NavLink to="/show"> show</NavLink> |<NavLink to="/jobs"> jobs</NavLink>{" "}
        |<NavLink to="/submit"> submit</NavLink>
      </div>
    </div>
    <div>login</div>
  </div>
);

export default Header;
