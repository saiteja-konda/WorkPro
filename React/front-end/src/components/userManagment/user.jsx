import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
class User extends Component {
  state = {};
  render() {
    const { user } = this.props.security;
    return (
      <div className="container userdetails">
        <h4>Your details</h4>
        <h4>Full Name: {user.fullName}</h4>
        <h4>Emai address: {user.username}</h4>
        {/*<h5>Your encrypted password is : {user.password}</h5>*/}
      </div>
    );
  }
}
User.propType = {
  security: PropTypes.object.isRequired,
};
const mapStoreToProps = (state) => ({
  security: state.security,
});
export default connect(mapStoreToProps)(User);
