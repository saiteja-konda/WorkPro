import React from "react";
import { Link } from "react-router-dom";
const BackToDashBoardButton = () => {
  return (
    <Link to="/dashboard">
      <button className="btn btn-sm btn-light ml-2">Back to Dashboard</button>
    </Link>
  );
};

export default BackToDashBoardButton;
