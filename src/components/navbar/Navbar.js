import React from "react";

import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/">
          {" "}
          <img src="./logo-no-background.png" alt="Logo" className="logo" />
        </a>
        <a href="/menu1">Item 1</a>
        <a href="/menu2">Item 2</a>
      </div>
      <div className="navbar-right">
        <a href="/item1">Item 3</a>
        <a href="/item2">Item 4</a>
        <button className="primary-button">Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
