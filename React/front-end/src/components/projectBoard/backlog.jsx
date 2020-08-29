import React, { Component } from "react";
import ProjectTask from "./projectTask/projectTask";
import { Spring } from "react-spring/renderprops";
import { motion } from "framer-motion";
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
    let ideaItems = [];

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
      if (tasks[i].props.project_task.status === "IDEA") {
        ideaItems.push(tasks[i]);
      }
    }

    return (
      <div className="container">
        <div className="row">
          {
            //
          }

          <motion.div drag="x" className="col-md-3">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 500, duration: 500 }}
            >
              {(props) => (
                <div style={props}>
                  <div
                    style={{ backgroundColor: "#bfdcae" }}
                    className="card text-white mb-2"
                  >
                    <div className="card-header">
                      <h5 className="card-title text-capitalize">To-Do list</h5>
                    </div>
                  </div>
                  {todoItems}
                </div>
              )}
            </Spring>
          </motion.div>
          {
            //
          }

          <motion.div drag="x" className="col-md-3 ">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 1000, duration: 1000 }}
            >
              {(props) => (
                <div style={props}>
                  <div
                    style={{ backgroundColor: "#81b214" }}
                    className="card text-white mb-2"
                  >
                    <div className="card-header">
                      <h5 className="card-title text-capitalize">In Process</h5>
                    </div>
                  </div>
                  {inProgressItems}
                </div>
              )}
            </Spring>
          </motion.div>
          {
            //
          }
          <motion.div drag="x" className="col-md-3">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 1500, duration: 1500 }}
            >
              {(props) => (
                <div style={props}>
                  <div
                    style={{ backgroundColor: "#206a5d" }}
                    className="card text-white mb-2"
                  >
                    <div className="card-header">
                      <h5 className="card-title text-capitalize">Done</h5>
                    </div>
                  </div>
                  {doneItems}
                </div>
              )}
            </Spring>
          </motion.div>
          {
            //
          }
          <motion.div drag="x" className="col-md-3">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 1500, duration: 1500 }}
            >
              {(props) => (
                <div style={props}>
                  <div
                    style={{ backgroundColor: "#ff8364" }}
                    className="card text-white mb-2"
                  >
                    <div className="card-header">
                      <h5 className="card-title text-capitalize">Ideas</h5>
                    </div>
                  </div>
                  {ideaItems}
                </div>
              )}
            </Spring>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Backlog;
