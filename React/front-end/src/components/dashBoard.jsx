import React, { Component } from "react";
import ProjectItem from "./project/projectItem";
import CreateProjectButton from "./project/createProjectButton";

class Dashboard extends Component {
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

export default Dashboard;
