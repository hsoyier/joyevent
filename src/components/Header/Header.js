import React from "react";
import { Link } from "react-router-dom";
import "./scss/style.scss";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="inner">
          <h1>
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
