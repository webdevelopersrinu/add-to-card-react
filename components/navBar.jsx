import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar({productesCount}) {

  return (
    <nav>
      <h1 className="nav-logo">
        <Link to={"/"}>srinu</Link>{" "}
      </h1>
      <div className="nav-acrd">
        <Link to="/card">
          <span className="nav-card-text">card</span>
        </Link>
        <span className="card-count">{productesCount}</span>
      </div>
    </nav>
  );
}

export default React.memo(NavBar);
