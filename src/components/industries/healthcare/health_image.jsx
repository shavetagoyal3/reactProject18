import React from "react";

class HealthImage extends React.Component {
  render() {
    return (
      <section
        className="phone phone--image "
        style={{
          backgroundImage: `url(${require("../../../assets/5be2fa1f/img/phone-bg-doctors.jpg")})`
        }}
      >
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">Employee Management</h3>
              <p className="phone__lead">
                Empower your employees with the digital tools they need to react
                quickly and work efficiently. Create a mobile command center for
                your hospital facilities and allow doctors and nurses to report
                incidents. Use mobile schedules and online consultation tools to
                help doctors respond to the needs of their patients quicker.
                Track and prioritize patient flow in the ER with the help of
                real-time notifications.
              </p>
              <ul className="phone__list">
                <li className="icon icon-scheduling  icon--opacity">
                  <i className="content-icon isoi-scheduling" />
                  <div className="list--text">Scheduling</div>
                </li>
                <li className="icon icon-staff  icon--opacity">
                  <i className="content-icon isoi-staff" />
                  <div className="list--text">Online Consultations</div>
                </li>
                <li className="icon icon-location-tracking  icon--opacity">
                  <i className="content-icon isoi-location-tracking" />
                  <div className="list--text">Real-time Employee Tracking</div>
                </li>
                <li className="icon icon-identification  icon--opacity">
                  <i className="content-icon isoi-identification" />
                  <div className="list--text">
                    Identification & Smart Prioritization
                  </div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image phone__image--left"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/healthcare-case-2.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HealthImage;
