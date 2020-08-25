import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container">
          <a className="navbar-brand" href="Dashboard.html">
            <span className="font-weight-bold">Project Management App</span>
          </a>
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
              <a
                className="nav-link font-weight-bold text-warning "
                href="/dashboard"
              >
                Dashboard
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link  font-weight-bold text-success mr-1 "
                href="register.html"
              >
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  font-weight-bold text-success "
                href="login.html"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
        {/*</div>*/}
      </nav>
    );
  }
}

export default Header;
