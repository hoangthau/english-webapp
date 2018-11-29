import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./styles.css";

const Nav = () => (
  <div className="header-nav">
    <span className="title">😆 Go Fun The English</span>
    <Link to="/create-item">Create Item</Link>
  </div>
);

export default Nav;
