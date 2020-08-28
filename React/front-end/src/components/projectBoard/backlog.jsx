import React, { Component } from "react";
import ProjectTask from "./projectTask/projectTask";
import { Spring } from "react-spring/renderprops";

class Backlog extends Component {
  state = {};
  render() {
    const { project_tasks_prop } = this.props;

    const tasks = project_tasks_prop.map((project_task) => (
      <ProjectTask key={project_task.id} project_task={project_task} />
    ));
    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.project_task.status === "TO_DO") {
        todoItems.push(tasks[i]);
      }

      if (tasks[i].props.project_task.status === "IN_PROGRESS") {
        inProgressItems.push(tasks[i]);
      }

      if (tasks[i].props.project_task.status === "DONE") {
        doneItems.push(tasks[i]);
      }
    }

    return (
      <div className="container">
        <div className="row">
          {
            //
          }

          <div className="offset-1 col-md-3">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 500, duration: 500 }}
            >
              {(props) => (
                <div style={props}>
                  <div className="card bg-dark text-white mb-2">
                    <div className="card-header">
                      <h5 className="card-title text-capitalize">To-Do list</h5>
                    </div>
                  </div>
                  {todoItems}
                </div>
              )}
            </Spring>
          </div>
          {
            //
          }

          <div className="col-md-3 ">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 1000, duration: 1000 }}
            >
              {(props) => (
                <div style={props}>
                  <div className="card bg-dark text-white mb-2">
                    <div className="card-header">
                    <h5 className="card-title text-capitalize">In Process</h5>
                    </div>
                  </div>
                  {inProgressItems}
                </div>
              )}
            </Spring>
          </div>
          {
            //
          }
          <div className="col-md-3">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 1500, duration: 1500 }}
            >
              {(props) => (
                <div style={props}>
                  <div className="card bg-dark text-white mb-2">
                    <div className="card-header">
                    <h5 className="card-title text-capitalize">Done</h5>
                    </div>
                  </div>
                  {doneItems}
                </div>
              )}
            </Spring>
          </div>
        </div>
      </div>
    );
  }
}

export default Backlog;
