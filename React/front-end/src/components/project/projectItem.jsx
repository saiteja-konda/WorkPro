import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteProject } from "../../actions/projectActions";

class ProjectItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteProject(id);
  };
  render() {
    const { project } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            {/*         <div className="col-2">
              <span className="mx-auto">{project.projectIdentifier}</span>
    </div>*/}
            <div className="col-lg-10 col-md-4 col-8">
              <h4>{project.projectName}</h4>
              <p>{project.description}</p>
            </div>
            <div className="col-md-2 ">
              <ul className="list-group">
                <li className="list-group-item bg-dark mb-1 text-center text-light font-weight-bold board">
                  Open
                </li>

                <Link to={`/updateProject/${project.projectIdentifier}`}>
                  <li className="list-group-item bg-dark mb-1 text-center text-light font-weight-bold update">
                    Edit
                  </li>
                </Link>

                <li
                  className="list-group-item bg-danger mb-1 text-center text-light font-weight-bold delete"
                  onClick={this.onDeleteClick.bind(
                    this,
                    project.projectIdentifier
                  )}
                >
                  Delete
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(ProjectItem);
