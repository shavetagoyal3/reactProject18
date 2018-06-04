import React from "react";

class SportsPhone extends React.Component {
  render() {
    return (
      <section className="phone ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Robust App Platform</h3>
              <p className="phone__lead">
                Bring key information to your fans mobile devices and drive
                engagement with a branded application made through a low-code
                mobile platform. Update your app on-the-fly with a specialized
                CMS, learn more about your users, engage fans with targeted
                notifications, and build a solid relationship with your fanbase
                with automated marketing.
              </p>
              <ul className="phone__list">
                <li className="icon icon-navigation-location ">
                  <i className="content-icon isoi-navigation-location" />
                  <div className="list--text">Geolocation & Navigation</div>
                </li>
                <li className="icon icon-gamification ">
                  <i className="content-icon isoi-gamification" />
                  <div className="list--text">Gamification</div>
                </li>
                <li className="icon icon-content-management ">
                  <i className="content-icon isoi-content-management" />
                  <div className="list--text">Content Management</div>
                </li>
                <li className="icon icon-push-notifications ">
                  <i className="content-icon isoi-push-notifications" />
                  <div className="list--text">Push Notifications</div>
                </li>
                <li className="icon icon-networking-social ">
                  <i className="content-icon isoi-networking-social" />
                  <div className="list--text">Social Networking</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/sport-case-1.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SportsPhone;
