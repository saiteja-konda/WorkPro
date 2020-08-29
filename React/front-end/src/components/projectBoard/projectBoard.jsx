import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackToDashBoardButton from "../commons/backToDashBoardButton";
import Backlog from "./backlog";
import { getBacklog } from "../../actions/backlogActions";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Spring } from "react-spring/renderprops";

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
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 500, duration: 500 }}
            >
              {(props) => (
                <div style={props}>
                  <div className="alert alert-danger text-center" role="alert">
                    {errors.projectNotFound}
                  </div>
                </div>
              )}
            </Spring>
          );
        } else {
          return (
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 500, duration: 500 }}
            >
              {(props) => (
                <div style={props}>
                  <div className="alert alert-info text-center" role="alert">
                    No project tasks are on this board
                  </div>
                </div>
              )}
            </Spring>
          );
        }
      } else {
        return <Backlog project_tasks_prop={project_tasks} />;
      }
    };
    BoardContent = boardAlgorithm(errors, project_tasks);
    return (
      <div className="container">
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <Link
              style={props}
              to={`/addProjectTask/${id}`}
              className="btn btn-sm btn-light"
            >
              + New Project Task
            </Link>
          )}
        </Spring>

        <BackToDashBoardButton />
        <br />
        <hr className="style11" />
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
