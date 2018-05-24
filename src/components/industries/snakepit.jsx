import React from "react";

class Snakepit extends React.Component {
  render() {
    return (
      <div className="snakepit">
        <div className="container">
          <div
            className="snakepit__phone"
             style={{ backgroundImage: `url(${require("../../assets/5be2fa1f/img/snakepit-screen-1-m.png")})`, opacity:1 }}
          />
          <div className="snakepit__list owl-carousel">
            <div className="snakepit__item js-active">
              <div className="snakepit__content snakepit__line--top-left">
                <h3 className="snakepit__heading snakepit__heading--square">
                  Live Marketing
                </h3>
                <p className="snakepit__description">
                  Automate your marketing with an impactful set of engagement
                  tools. Reach out to your users anytime, anywhere.
                </p>
                <img
                  className="snakepit__screen"
                  src={require('../../assets/5be2fa1f/img/snakepit-screen-1.jpg')}
                  alt="Live Marketing"
                />{" "}
              </div>
            </div>
            <div className="snakepit__item">
              <div className="snakepit__content snakepit__line--top-right">
                <h3 className="snakepit__heading snakepit__heading--square">
                  Location-based Services
                </h3>
                <p className="snakepit__description">
                  Send geotargeted messages to reach out to your users, guide
                  them with beacon devices, create time-based events, and more.
                </p>
                <img
                  className="snakepit__screen"
                  src={require('../../assets/5be2fa1f/img/snakepit-screen-2.jpg')}
                  alt="Location-based Services"
                />{" "}
              </div>
            </div>
            <div className="snakepit__item">
              <div className="snakepit__content snakepit__line--center-left">
                <h3 className="snakepit__heading snakepit__heading--square">
                  Audience Building
                </h3>
                <p className="snakepit__description">
                  Build, grow, and retain your userbase with loyalty programs,
                  rewards, gamification, and other marketing instruments.
                </p>
                <img
                  className="snakepit__screen"
                  src={require('../../assets/5be2fa1f/img/snakepit-screen-3.jpg')}
                  alt="Audience Building"
                />{" "}
              </div>
            </div>
            <div className="snakepit__item">
              <div className="snakepit__content snakepit__line--center-right">
                <h3 className="snakepit__heading snakepit__heading--square">
                  Monetization
                </h3>
                <p className="snakepit__description">
                  Monetise your app with native ads, media content, and more.
                  Test multiple add formats to see which works best for your
                  business.
                </p>
                <img
                  className="snakepit__screen"
                  src={require('../../assets/5be2fa1f/img/snakepit-screen-4.jpg')}
                  alt="Monetization"
                />{" "}
              </div>
            </div>
            <div className="snakepit__item">
              <div className="snakepit__content snakepit__line--bottom-left">
                <h3 className="snakepit__heading snakepit__heading--square">
                  All the Content
                </h3>
                <p className="snakepit__description">
                  Deliver any type of content that powers your marketing
                  strategy — Live videos, news, podcasts, audio, and more.
                </p>
                <img
                  className="snakepit__screen"
                  src={require('../../assets/5be2fa1f/img/snakepit-screen-5.jpg')}
                  alt="All the Content"
                />{" "}
              </div>
            </div>
            <div className="snakepit__item">
              <div className="snakepit__content snakepit__line--bottom-right">
                <h3 className="snakepit__heading snakepit__heading--square">
                  Alerts & Notifications
                </h3>
                <p className="snakepit__description">
                  Reach out to your users with custom notifications, alerts, and
                  prompts. See results as actionable analytics at any campaign
                  stage.
                </p>
                <img
                  className="snakepit__screen"
                  src={require('../../assets/5be2fa1f/img/snakepit-screen-6.jpg')}
                  alt="Alerts & Notifications"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Snakepit;
