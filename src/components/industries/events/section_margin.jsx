import React from "react";

class SectionMargin extends React.Component {
  render() {
    return (
      <section className="phone section-margin ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Streamline Event Organization</h3>
              <p className="phone__lead">
                Simplify organization processes for your visitors, event
                managers, and personnel with a well designed mobile app. Gamify
                the event experience for visitors with Augmented Reality
                features and Beacon-based navigation. Provide detailed event
                maps to help visitors quickly find what they need and an in-app
                event pass to access the venue and keynotes.
              </p>
              <ul className="phone__list">
                <li className="icon icon-smart-design ">
                  <i className="content-icon isoi-smart-design" />
                  <div className="list--text">Smart Design</div>
                </li>
                <li className="icon icon-navigation-location ">
                  <i className="content-icon isoi-navigation-location" />
                  <div className="list--text">Event Map</div>
                </li>
                <li className="icon icon-gamification ">
                  <i className="content-icon isoi-gamification" />
                  <div className="list--text">Gamification</div>
                </li>
                <li className="icon icon-mobile-key ">
                  <i className="content-icon isoi-mobile-key" />
                  <div className="list--text">Event Pass</div>
                </li>
                <li className="icon icon-360-ar ">
                  <i className="content-icon isoi-360-ar" />
                  <div className="list--text">AR & Beacons</div>
                </li>
                <li className="icon icon-big-data ">
                  <i className="content-icon isoi-big-data" />
                  <div className="list--text">Big Data Analytics</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/events-case-3.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionMargin;
