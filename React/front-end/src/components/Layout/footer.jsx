import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bg-dark footer">
        <span className="content">
          <br />
          Project Managment App
        </span>
      </div>
    );
  }
}

export default Footer;
