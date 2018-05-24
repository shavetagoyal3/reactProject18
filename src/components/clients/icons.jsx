import React from "react";

class Icons extends React.Component {
  render() {
    return (
      <div className="icons">
        <div className="container">
          <h2>Explore our projects</h2>
          <ul>
            <li>
              <i className="isoi isoi-software-engineering" />
              <h3>Software Engineering</h3>
            </li>
            <li>
              <i className="isoi isoi-intelligent-consulting" />
              <h3>Intelligent Consulting</h3>
            </li>
            <li>
              <i className="isoi isoi-intelligent-solutions" />
              <h3>Hi-Tech Solutions</h3>
            </li>
            <li>
              <i className="isoi isoi-business-intelligence" />
              <h3>IoT and AI Development</h3>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Icons;
