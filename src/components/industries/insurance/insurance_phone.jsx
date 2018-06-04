import React from "react";

class InsurancePhone extends React.Component {
  render() {
    return (
      <section className="phone ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Meet Client Expectations</h3>
              <p className="phone__lead">
                Share all relevant information with your clients via one
                channel—your branded mobile application. Share company news and
                special offers with your entire client base, send targeted
                notifications to policyholders in a particular locale, and
                ensure timely payments from clients with automated reminders.
              </p>
              <ul className="phone__list">
                <li className="icon icon-exclusive ">
                  <i className="content-icon isoi-exclusive" />
                  <div className="list--text">Special Offers</div>
                </li>
                <li className="icon icon-push-notifications ">
                  <i className="content-icon isoi-push-notifications" />
                  <div className="list--text">Push Notifications</div>
                </li>
                <li className="icon icon-news ">
                  <i className="content-icon isoi-news" />
                  <div className="list--text">News Feed</div>
                </li>
                <li className="icon icon-geofenced-messaging ">
                  <i className="content-icon isoi-geofenced-messaging" />
                  <div className="list--text">Geofencing</div>
                </li>
                <li className="icon icon-reminders ">
                  <i className="content-icon isoi-reminders" />
                  <div className="list--text">Reminders</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/insurance-case-1.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InsurancePhone;
