import React from "react";

class HealthPhone extends React.Component {
  render() {
    return (
      <section className="phone ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Patient Engagement</h3>
              <p className="phone__lead">
                Apps built using our mobile application platform help hospitals
                and healthcare providers tackle their most significant
                challenges. Cut losses due to missed appointments by sending
                timely reminders to your patients. Help patients get where
                they’re going with real-time indoor navigation functionality.
                Send important updates to visitors based on their location in
                the building with beacon-based push notification triggers.
              </p>
              <ul className="phone__list">
                <li className="icon icon-store-navigation ">
                  <i className="content-icon isoi-store-navigation" />
                  <div className="list--text">Real-time Navigation</div>
                </li>
                <li className="icon icon-reminders ">
                  <i className="content-icon isoi-reminders" />
                  <div className="list--text">Reminders & Notifications</div>
                </li>
                <li className="icon icon-smart-alert ">
                  <i className="content-icon isoi-smart-alert" />
                  <div className="list--text">Incident Reporting</div>
                </li>
                <li className="icon icon-geofenced-messaging ">
                  <i className="content-icon isoi-geofenced-messaging" />
                  <div className="list--text">Geofencing</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/healthcare-case-1.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HealthPhone;
