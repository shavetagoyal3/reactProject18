import React from "react";

class SectionMargin extends React.Component {
  render() {
    return (
      <section className="phone section-margin ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">
                Get Insights Into Guest Behaviour
              </h3>
              <p className="phone__lead">
                Use the clean, comprehensive dashboard and CMS to get a complete
                view of your guests’ behaviour. Learn who’s coming back to your
                resort with in-app check-ins. See how guest react to newly
                implemented ideas and the work of your staff by means of polling
                and actionable analytics. Set up an inviting in-app message
                board to get instant, spot-on feedback from your guests.
              </p>
              <ul className="phone__list">
                <li className="icon icon-advanced-analytics ">
                  <i className="content-icon isoi-advanced-analytics" />
                  <div className="list--text">Advanced Analytics</div>
                </li>
                <li className="icon icon-check-ins ">
                  <i className="content-icon isoi-check-ins" />
                  <div className="list--text">App Check-ins</div>
                </li>
                <li className="icon icon-staff ">
                  <i className="content-icon isoi-staff" />
                  <div className="list--text">Staff Statistics</div>
                </li>
                <li className="icon icon-rewards ">
                  <i className="content-icon isoi-rewards" />
                  <div className="list--text">Instant Feedback</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/hospitality-case-3.png")})`
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
