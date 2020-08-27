import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackToDashBoardButton from "../commons/backToDashBoardButton";
import Backlog from "./backlog";
class ProjectBoard extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="container">
        <Link to={`/addProjectTask/${id}`} className="btn btn-sm btn-success">
          + New Project Task
        </Link>
        <BackToDashBoardButton />
        <br />
        <hr />
        <Backlog/>
      </div>
    );
  }
}

export default ProjectBoard;
