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
        <NavLink to="/new">new</NavLink> | {/* prettier-ignore */}
        <NavLink to="/past"> past</NavLink> |
        <NavLink to="/comments"> comments</NavLink> |
        <NavLink to="/ask"> ask</NavLink> | {/* prettier-ignore */}
        <NavLink to="/show"> show</NavLink> | {/* prettier-ignore */}
        <NavLink to="/jobs"> jobs</NavLink> |
        <NavLink to="/submit"> submit</NavLink>
      </div>
    </div>
    <div>login</div>
  </div>
);

export default Header;
