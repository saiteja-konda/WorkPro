import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="font-weight-bold">Project Management App</span>
          </Link>
          {/*          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
>
            <span class="navbar-toggler-icon" />
          </button>
*/}
          {/*<div class="collapse navbar-collapse" id="mobile-nav">*/}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className="nav-link font-weight-bold text-warning "
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link  font-weight-bold text-light mr-1 "
                to="/register"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link  font-weight-bold text-light "
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        {/*</div>*/}
      </nav>
    );
  }
}

export default Header;
