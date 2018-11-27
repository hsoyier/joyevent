import React from "react";
import "./scss/style.scss";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="inner">
          <h1>
            <img className="logo" src={logo} alt="logo" />
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
