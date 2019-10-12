import React, { Component } from "react";
import { Link } from "react-router-dom";

import Login from "../pages/login";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="left-side">
          <Link to="/">Home</Link>
          <Link to="/conversations">Conversations</Link>
        </div>
        <div className="right-side">
          <Link to="/login" className="login">
            Log In
          </Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}
