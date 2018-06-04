import React from "react";

class HealthSectionMargin extends React.Component {
  render() {
    return (
      <section className="phone section-margin ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Analytics and Administration</h3>
              <p className="phone__lead">
                Our mobile platform includes powerful administration tools that
                help you control content, analyze usage statistics for employees
                and patients, and make workflow improvements based on actionable
                analytics. Use location analytics to create heatmaps, increase
                efficiency with comprehensive scheduling and resource management
                tools, and integrate third-party software to expand your mobile
                suite’s functionality.
              </p>
              <ul className="phone__list">
                <li className="icon icon-mobile-payments ">
                  <i className="content-icon isoi-mobile-payments" />
                  <div className="list--text">Payment Models</div>
                </li>
                <li className="icon icon-content-management ">
                  <i className="content-icon isoi-content-management" />
                  <div className="list--text">Content Management</div>
                </li>
                <li className="icon icon-advanced-analytics ">
                  <i className="content-icon isoi-advanced-analytics" />
                  <div className="list--text">Analytics Engine</div>
                </li>
                <li className="icon icon-api ">
                  <i className="content-icon isoi-api" />
                  <div className="list--text">API</div>
                </li>
                <li className="icon icon-networking-global ">
                  <i className="content-icon isoi-networking-global" />
                  <div className="list--text">Real-time Communication</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/healthcare-case-3.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HealthSectionMargin;
