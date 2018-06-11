import React from "react";

class Jobs extends React.Component {
  render() {
    return (
      <section className="jobs">
        <div className="container">
          <h2 className="jobs__title">Open positions</h2>
          <div id="jobsApp" />
        </div>
      </section>
    );
  }
}

export default Jobs;
