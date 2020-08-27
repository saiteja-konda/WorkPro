import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackToDashBoardButton from "../commons/backToDashBoardButton";
import Backlog from "./backlog";
import { getBacklog } from "../../actions/backlogActions";
import { PropTypes } from "prop-types";
import { connect } from 'react-redux';
class ProjectBoard extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    const {id} = this.props.match.params
    this.props.getBacklog(id)
  }
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
        <Backlog />
      </div>
    );
  }
}
ProjectBoard.protoType = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
};

const mapStateToPops = (state) => ({
  backlog: state.backlog,
});

export default connect(
  mapStateToPops, 
  { getBacklog }
  )(ProjectBoard);
