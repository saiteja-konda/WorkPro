import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Spring } from "react-spring/renderprops";

class User extends Component {
  state = {};
  render() {
    const { user } = this.props.security;
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 500 }}
      >
        {(props) => (
          <div style={props}>
            <div className="container userdetails">
              <h4>Your details</h4>
              <h4>Full Name: {user.fullName}</h4>
              <h4>Emai address: {user.username}</h4>
              {/*<h5>Your encrypted password is : {user.password}</h5>*/}
            </div>
          </div>
        )}
      </Spring>
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
