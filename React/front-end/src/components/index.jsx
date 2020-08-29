import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Spring } from "react-spring/renderprops";
import { PropTypes } from "prop-types";
import { DollarOutlined, SafetyCertificateOutlined, SlackOutlined } from "@ant-design/icons";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 500 }}
      >
        {(props) => (
          <div style={props}>
            <div className="landing">
              <div className="light-overlay landing-inner text-white">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="display-4">Work Pro</h1>
                      <hr className="style11" />
                      <p className="lead">
                      Using Work pro you can visually depict works of your
                      project at various stages of a process using cards to
                      represent project tasks and with columns to represent
                      each stage of the process. Cards are moved from left to
                      right to show progress and to help be more productive
                      and work like a pro
                      </p>
                      <hr className="style11" />
                      <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                      className="container"
                      >
                      <div>
                      <DollarOutlined className="display-4 mb-2" />
                      <h3>Free</h3>
                      <p>
                      Its absloutly free application you can create
                      unlimited projects and assign unlimted tasks to your
                      project
                      </p>
                      </div>
                      <div>
                      <SlackOutlined className="display-4 mb-2" />
                      <h3>Simple</h3>
                      <p>
                      Work Pro is simple and confusion free crafted with
                      care to deliver beautyful user experiece,its all
                      about you and your own projects
                      </p>
                      </div>
                      <div>
                      <SafetyCertificateOutlined className="display-4 mb-2" />
                      <h3>Safe</h3>
                      <p>
                      We never share your content, your password and all
                      your data is encrypted using 128-Bit Blowfish
                      encryption algorithm
                      </p>
                      </div>
                      </div>
                      <hr className="style11" />
                      <p className="justify-conent-left">
                        Login to track your project and their tasks, Not a
                        member yet Join the Work pro and become pro
                      </p>
                      <div className="text-center">
                      <Link
                      to="/register"
                      className="btn btn-lg btn-dark mr-2"
                      >
                      Sign Up
                        </Link>
                        <Link to="/login" className="btn btn-lg btn-light mr-2">
                          Login
                        </Link>
                      </div>
                    </div>
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
Index.propTypes = {
  security: PropTypes.object.isRequired,
};
const mapStoreToProp = (state) => ({
  security: state.security,
});

export default connect(mapStoreToProp)(Index);
