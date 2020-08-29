import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";

class AddProjectTask extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: 0,
      dueDate: "",
      projectIdentifier: id,
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

    const newTask = {
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
    };

    this.props.addProjectTask(
      this.state.projectIdentifier,
      newTask,
      this.props.history
    );
  }
  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 500 }}
      >
        {(props) => (
          <div style={props}>
            <div className="add-PBI">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 m-auto">
                    <h4 className="display-5 text-center text-white ">
                      Add Project Task
                    </h4>
                    <p className=" text-center text-white  h6">
                      Project name
                      <span className="text-white h6">{`   :${this.state.projectIdentifier}`}</span>
                    </p>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                          autoFocus
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.summary,
                            }
                          )}
                          name="summary"
                          placeholder="Project Task summary"
                          value={this.state.summary}
                          onChange={this.onChange}
                        />
                        {errors.summary && (
                          <div className="feedback">
                            {errors.summary}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Acceptance Criteria"
                          name="acceptanceCriteria"
                          value={this.state.acceptanceCriteria}
                          onChange={this.onChange}
                        ></textarea>
                      </div>
                      <h6>Due Date</h6>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          name="dueDate"
                          value={this.state.dueDate}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control form-control-lg"
                          name="priority"
                          value={this.state.priority}
                          onChange={this.onChange}
                        >
                          <option value={0}>Select Priority</option>
                          <option value={1}>High</option>
                          <option value={2}>Medium</option>
                          <option value={3}>Low</option>
                          <option value={4}>Idea</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <select
                          className="form-control form-control-lg"
                          name="status"
                          value={this.state.status}
                          onChange={this.onChange}
                        >
                          <option value="">Select Status</option>
                          <option value="TO_DO">To Do</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="DONE">Done</option>
                          <option value="IDEA">Idea</option>
                        </select>
                      </div>

                      <input
                        type="submit"
                        className="btn btn-dark mr-2 mt-4 mb-5"
                      />

                      <Link to={`/projectBoard/${id}`}>
                        <button className="btn btn-light  mt-4 mb-5">
                          Cancel
                        </button>
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

AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
