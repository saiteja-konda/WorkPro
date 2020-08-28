import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import { EditOutlined,DeleteOutlined } from "@ant-design/icons";

class ProjectTask extends Component {
  onDeleteClick(backlog_id, pt_id) {
    this.props.deleteProjectTask(backlog_id, pt_id);
  }
  render() {
    const { project_task } = this.props;
    let priorityString;
    let priorityClass;
    let color;

    if (project_task.priority === 1) {
      priorityClass = "text-light";
      priorityString = "HIGH";
      color = "red";
    }

    if (project_task.priority === 2) {
      priorityClass = " text-light";
      priorityString = "MEDIUM";
      color = "#f2d600";
    }

    if (project_task.priority === 3) {
      priorityClass = " text-light";
      priorityString = "LOW";
      color = "#ff9f1a";
    }

    return (
      <div className="card mb-1 bg-light">
        <ReactTooltip place="bottom" type="dark" effect="float" />
        <div
          className={`card-header text-dark text-lowercase ${priorityClass}`}
        >
          {project_task.projectSequence} Priority: {priorityString}
        </div>
        <div
          className="col-2"
          style={{
            fontSize: "6px",
            padding: "0px",
            borderRadius: "10px",
            backgroundColor: `${color}`,
          }}
        >
          <span>&nbsp;&nbsp;</span>{" "}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <h5 className="card-text text-lowercase mb-2">
            {project_task.acceptanceCriteria}
          </h5>
          <Link
            data-tip="update"
            to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`}
            className="btn btn-sm"
          ><EditOutlined /></Link>

          <button
            className="btn btn-sm ml-1"
            data-tip="Delete"
            onClick={this.onDeleteClick.bind(
              this,
              project_task.projectIdentifier,
              project_task.projectSequence
            )}
          ><DeleteOutlined /></button>
        </div>
      </div>
    );
  }
}

ProjectTask.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired,
};
export default connect(null, { deleteProjectTask })(ProjectTask);
