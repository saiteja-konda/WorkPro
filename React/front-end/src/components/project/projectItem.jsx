import React, { Component } from "react";
class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="card card-body bg-light mb-4">
          <div className="row mb-5">
            <div className="col-1 mt-5">
              <span className="mx-auto 
               text-dark pre"> REACT</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8 ">
              <h3 className="text-dark mt-3 font-weight-bold">
                Spring / React Project
              </h3>
              <p className="text-dark font-weight-medium">
                Project to create App with Spring Boot and React
              </p>
            </div>
            <div className="col-md-4 d-lg-block">
              <ul className="list-group">
                <li className="list-group-item bg-dark mb-1 text-center text-light font-weight-bold board">
                  Project Board
                </li>

                <li className="list-group-item bg-dark mb-1 text-center text-light font-weight-bold update">
                  Update Project Info
                </li>

                <li className="list-group-item bg-danger mb-1 text-center text-light font-weight-bold delete">
                  - Delete Project
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
