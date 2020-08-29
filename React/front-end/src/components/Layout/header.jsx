import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/securityActions";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    this.props.logout();
    window.location.href = "/";
  }
  render() {
    const { validToken, user } = this.props.security;
    const isUserAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
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
              to="/user"
            >
              {user.fullName}
              
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link  font-weight-bold text-light "
              to="/logout"
              onClick={this.logout.bind(this)}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
    const isUserNotAuthenticated = (
      <div>
        
      </div>
    );
    let headerLinks;

    if (validToken && user) {
      headerLinks = isUserAuthenticated;
    } else {
      headerLinks = isUserNotAuthenticated;
    }
    return (
      <div >
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-5">
        <div className="container" style={{display:"flex", flexWrap:"wrap",justifyContent: "flex-start"  }}>
          <Link className="navbar-brand" to="/">
            <span className="font-weight-bold">Work Pro</span>
          </Link>
          {headerLinks}
        </div>
      </nav>
      </div>
    );
  }
}
Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};
const mapStoreToProps = (state) => ({
  security: state.security,
});
export default connect(mapStoreToProps, { logout })(Header);
