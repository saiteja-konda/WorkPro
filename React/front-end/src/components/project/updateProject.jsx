import React, { Component } from "react";
import { getProject, createProject } from "../../actions/projectActions";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";

class UpdateProject extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      description: " ",
      start_date: "",
      end_date: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date,
    } = nextProps.project;

    this.setState({
      id,
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    const updateProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    this.props.createProject(updateProject, this.props.history);
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
            <div className="project">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 m-auto">
                    <h5 className="display-5 text-center text-white">
                      Edit Project
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
                          placeholder="Project Name"
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
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Unique Project ID"
                          disabled
                          name="projectIdentifier"
                          value={this.state.projectIdentifier}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-light">Description</label>

                        <textarea
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.description,
                            }
                          )}
                          placeholder="Description about your Project"
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
                      <label className="text-light">Estimated End Date</label>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          name="end_date"
                          value={this.state.end_date}
                          onChange={this.onChange}
                        />
                      </div>
                      <input type="submit" className="btn btn-dark mr-2 mt-4" />
                      <Link to={`/dashboard`}>
                        <button className="btn btn-light mt-4" >Cancel</button>
                      </Link>
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

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
  project: state.project.project,
  errors: state.errors,
});
export default connect(mapStateToProp, { getProject, createProject })(
  UpdateProject
);
