import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

const BackToDashBoardButton = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}
    config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        
          <Link style={props} to="/dashboard">
            <button className="btn btn-sm btn-light ml-2">
              {"< "}Back to Dashboard
            </button>
          </Link>
       
      )}
    </Spring>
  );
};

export default BackToDashBoardButton;
