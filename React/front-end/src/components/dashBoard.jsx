import React, { Component } from "react";
import ProjectItem from "./project/projectItem";
import CreateProjectButton from "./project/createProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import { PropTypes } from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="display-5 text-center text-dark mb-4 ">
                Your Projects
              </h1>
              <CreateProjectButton />
              <hr />
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.protoType = {
  project: PropTypes.object.isRequired,
  getProject: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
