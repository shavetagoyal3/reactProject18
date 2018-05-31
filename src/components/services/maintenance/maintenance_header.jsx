import React from "react";

class MaintenanceHeader extends React.Component {
  render() {
    return (
      <section
        className="header"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/services/72303b5bc0b5116940bf4b83d86efe4484efb077876d3b1863b49da74cbf7550.jpg")})`
        }}
      >
        <div className="container">
          <h1 className="header__title">Software Maintenance & Support</h1>
          <p className="header__lead">
            Successful software development doesn’t end at delivery.
            Intellectsoft can offer your business a way to maintain, update, and
            support your software solutions, allowing you to adapt to changing
            market demands quickly and efficiently.
          </p>
        </div>
      </section>
    );
  }
}

export default MaintenanceHeader;
