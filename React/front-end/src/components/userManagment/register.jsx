import React, { Component } from "react";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <h1 className="display-5 mt-5 text-center">Sign Up</h1>
              <p className="lead mb-5 text-center">Create your Account</p>
              <form action="create-profile.html">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                  />
                </div>
                <button type="submit" placeholder="" className="btn btn-dark btn-block mt-4" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
