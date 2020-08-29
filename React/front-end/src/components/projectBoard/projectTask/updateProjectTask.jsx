import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProjectTask,
  updateProjectTask,
} from "../../../actions/backlogActions";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import { Spring } from "react-spring/renderprops";

class UpdateProjectTask extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      projectSequence: "",
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: "",
      dueDate: "",
      projectIdentifier: "",
      create_At: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { backlog_id, pt_id } = this.props.match.params;
    this.props.getProjectTask(backlog_id, pt_id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const {
      id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier,
      create_At,
    } = nextProps.project_task;

    this.setState({
      id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier,
      create_At,
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const UpdateProjectTask = {
      id: this.state.id,
      projectSequence: this.state.projectSequence,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
      projectIdentifier: this.state.projectIdentifier,
      create_At: this.state.create_At,
    };

    // console.log(UpdateProjectTask);
    this.props.updateProjectTask(
      this.state.projectIdentifier,
      this.state.projectSequence,
      UpdateProjectTask,
      this.props.history
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="add-PBI">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 m-auto">
                    <h4 className="display-5 text-center text-white">
                      Update Project Task
                    </h4>
                    <p className="lead text-center text-white">
                      Project Name: {this.state.projectIdentifier} | Project
                      Task ID: {this.state.projectSequence}{" "}
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
                          <div className="invalid-feedback">
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
                        />
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
                        </select>
                      </div>

                      <input type="submit" className="btn btn-dark mt-4 mr-2" />
                      <Link
                        to={`/projectBoard/${this.state.projectIdentifier}`}
                      >
                        <button type="cancel" className="btn btn-light mt-4" >Cancel</button>
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

UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  project_task: PropTypes.object.isRequired,
  updateProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project_task: state.backlog.project_task,
  errors: state.errors,
});

export default connect(mapStateToProps, { getProjectTask, updateProjectTask })(
  UpdateProjectTask
);
