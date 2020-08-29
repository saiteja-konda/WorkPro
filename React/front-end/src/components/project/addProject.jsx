import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import classnames from "classnames";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    this.props.createProject(newProject, this.props.history);
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
            <div>
              <div className="project">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 m-auto">
                      <h5 className="display-5 text-center text-white">
                        Create Project
                      </h5>
                      <hr className="style11" />
                      <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label className="text-light">Project Name</label>

                          <input
                            autoFocus
                            type="text"
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.projectName,
                              }
                            )}
                            placeholder="Full Stack Application"
                            name="projectName"
                            value={this.state.projectName}
                            onChange={this.onChange}
                          />
                          {errors.projectName && (
                            <div className="feedback">
                              {errors.projectName}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="text-light"> Project ID</label>

                          <input
                            type="text"
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.projectIdentifier,
                              }
                            )}
                            placeholder="Unique Project ID 4 or 5 characters"
                            name="projectIdentifier"
                            value={this.state.projectIdentifier}
                            onChange={this.onChange}
                          />
                          {errors.projectIdentifier && (
                            <div className="feedback">
                              {errors.projectIdentifier}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="text-light">
                            Project Description
                          </label>

                          <textarea
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.description,
                              }
                            )}
                            placeholder="Full-stack application with React, Redux and Spring Boot( JWT Authentication)"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                          />
                          {errors.description && (
                            <div className="feedback">
                              {errors.description}
                            </div>
                          )}
                        </div>
                        <label className="text-light">Start Date</label>
                        <div className="form-group">
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            name="start_date"
                            value={this.state.start_date}
                            onChange={this.onChange}
                          />
                        </div>
                        <label className="text-light">End Date</label>
                        <div className="form-group">
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            name="end_date"
                            value={this.state.end_date}
                            onChange={this.onChange}
                          />
                        </div>

                        <input
                          type="submit"
                          className="btn btn-dark mr-2 mt-4 mb-5"
                        />
                        <Link to='/dashboard'>
                        <button className="btn btn-light  mt-4 mb-5">
                          cancel
                        </button>
                        </Link>
                      </form>
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

AddProject.protoType = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToPops = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToPops, { createProject })(AddProject);
