import React, { Component } from "react";
import ProjectItem from "../project/projectItem";
import CreateProjectButton from "../project/createProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../../actions/projectActions";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;

    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div className="projects">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="h3 text-center">Your Projects</h1>
                    <br />
                    <CreateProjectButton />
                    <br />
                    <hr />
                    {projects.map((project) => (
                      <ProjectItem key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
