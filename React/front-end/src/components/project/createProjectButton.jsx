import React from "react";
import { Link } from "react-router-dom";
import {Spring} from 'react-spring/renderprops'

const CreateProjectButton = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <Link style={props} to="/addProject" className="btn btn-sm btn-light">
          + New Project
        </Link>
      )}
    </Spring>
  );
};

export default CreateProjectButton;
