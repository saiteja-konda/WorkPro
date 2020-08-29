import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import {
  EditOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

class ProjectTask extends Component {
  onDeleteClick(backlog_id, pt_id) {
    this.props.deleteProjectTask(backlog_id, pt_id);
  }
  render() {
    const { project_task } = this.props;
    let priorityString;
    let priorityClass;
    let cardbodyBg;

    if (project_task.priority === 1) {
      priorityClass = "text-light";
      priorityString = "HIGH";
      cardbodyBg = "#fcb1b1";
    }

    if (project_task.priority === 2) {
      priorityClass = " text-light";
      priorityString = "MEDIUM";
      cardbodyBg = "#f0f696";
    }

    if (project_task.priority === 3) {
      priorityClass = " text-light";
      priorityString = "LOW";
      cardbodyBg = "#96f7d2";
    }

    if(project_task.priority === 4){

      priorityClass = " text-light";
      priorityString = "IDEA";
      cardbodyBg = "#49beb7";
    }

    return (
      <div className="card mb-2 ">
        <ReactTooltip place="bottom" type="dark" effect="float" />
        <div
          className={`card-header text-dark text-lowercase ${priorityClass}`}
        >
          {project_task.projectSequence} Priority: {priorityString}
        </div>

        <div style={{ backgroundColor: `${cardbodyBg}` }}>
          <div className="card-body">
            <p
              className="card-title"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              {project_task.summary}
            </p>
            <p
              className="card-text text-lowercase mb-2"
              style={{ fontSize: "12px", fontWeight: "lighter" }}
            >
              {project_task.acceptanceCriteria}
            </p>
          </div>

          {
            // buttons
          }
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: "20px",
            }}
          >
            <Link
              data-tip="update"
              to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`}
              className="btn btn-sm"
            >
              <EditOutlined />
            </Link>

            <button
              className="btn btn-sm "
              data-tip="Delete"
              onClick={this.onDeleteClick.bind(
                this,
                project_task.projectIdentifier,
                project_task.projectSequence
              )}
            >
              <DeleteOutlined />
            </button>
            <button
              className="btn btn-sm"
              data-tip={` Due date ${project_task.dueDate}`}
            >
              <ClockCircleOutlined />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProjectTask.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired,
};
export default connect(null, { deleteProjectTask })(ProjectTask);
