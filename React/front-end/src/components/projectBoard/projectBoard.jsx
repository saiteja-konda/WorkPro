import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackToDashBoardButton from "../commons/backToDashBoardButton";
import Backlog from "./backlog";
import { getBacklog } from "../../actions/backlogActions";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
class ProjectBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBacklog(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const { id } = this.props.match.params;
    const { project_tasks } = this.props.backlog;
    const { errors } = this.state;
  
    let BoardContent;
    const boardAlgorithm = (errors, project_tasks) => {
      if (project_tasks.length < 1) {
        if (errors.projectNotFound) {
          return (
            <div className="alert alert-danger text-cente" role="alert">
              {errors.projectNotFound}
            </div>
          );
        } else {
          return (
            <div className="alert alert-info text-cente" role="alert">
              No project tasks are on this board
            </div>
          );
        }
      } else {
        return <Backlog project_tasks_prop={project_tasks} />;
      }
    };
    BoardContent = boardAlgorithm(errors, project_tasks);
    return (
      <div className="container">
        <Link to={`/addProjectTask/${id}`} className="btn btn-sm btn-success">
          + New Project Task
        </Link>
        <BackToDashBoardButton />
        <br />
        <hr />
        {BoardContent}
      </div>
    );
  }
}
ProjectBoard.protoType = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});

export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
