import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    this.props.createNewUser(newUser, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 500 }}
      >
        {(props) => (
          <div style={props}>
            <div className="register">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 m-auto">
                    <h1 className="display-5 text-center text-light">
                      Sign Up
                    </h1>
                    <p className="lead text-center text-light">
                      Create your Account
                    </p>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                          autoFocus
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.fullName,
                            }
                          )}
                          placeholder="Full Name"
                          name="fullName"
                          value={this.state.fullName}
                          onChange={this.onChange}
                        />
                        {errors.fullName && (
                          <div className="feedback">{errors.fullName}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.username,
                            }
                          )}
                          placeholder="Email Address (Username)"
                          name="username"
                          value={this.state.userName}
                          onChange={this.onChange}
                        />
                        {errors.username && (
                          <div className="feedback">{errors.username}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.password,
                            }
                          )}
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                        {errors.password && (
                          <div className="feedback">{errors.password}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.confirmPassword,
                            }
                          )}
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={this.state.confirmPassword}
                          onChange={this.onChange}
                        />
                        {errors.confirmPassword && (
                          <div className="feedback">
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark btn-block mt-4"
                      >
                        Register
                      </button>
                      <span className="text-light text-center">
                        <Link to="/login">
                          <Button
                            className="btn"
                            style={{
                              border: "none",
                              color: "white",
                              fontSize: "12px",
                              justifyContent: "center",
                            }}
                          >
                            Already Registered? Click here to login
                          </Button>
                        </Link>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  security: state.security,
});
export default connect(mapStateToProps, { createNewUser })(Register);
