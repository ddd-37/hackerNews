import React from "react";
import logo from "./../../images/y18.gif";

const Header = props => (
  <div className="Header">
    <div className="Header__logo">
      <img src={logo} alt="Hacker Logo" />
    </div>
    <div className="Header__links">
      <span className="Header__title">Hacker News</span>
      <div>new | past | comments | ask |show | jobs | submit</div>
    </div>
    <div>login</div>
  </div>
);

export default Header;
