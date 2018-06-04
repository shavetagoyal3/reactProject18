import React from "react";

class PhoneImage extends React.Component {
  render() {
    return (
      <section
        className="phone phone--image "
        style={{
          backgroundImage: `url(${require("../../../assets/5be2fa1f/img/phone-bg-sport.jpg")})`
        }}
      >
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">Immersive Mobile Experience</h3>
              <p className="phone__lead">
                Utilize the latest technological developments and bring your
                fans’ experience to a higher level—at home and in-stadium.
                Live-stream games, bring a new dimension to the court with
                Augmented Reality, streamline ticket sales and navigation, and
                more.
              </p>
              <ul className="phone__list">
                <li className="icon icon-360-ar  icon--opacity">
                  <i className="content-icon isoi-360-ar" />
                  <div className="list--text">Augmented Reality</div>
                </li>
                <li className="icon icon-geofenced-messaging  icon--opacity">
                  <i className="content-icon isoi-geofenced-messaging" />
                  <div className="list--text">Geofenced Messaging</div>
                </li>
                <li className="icon icon-transit  icon--opacity">
                  <i className="content-icon isoi-transit" />
                  <div className="list--text">Arena-Home Transit</div>
                </li>
                <li className="icon icon-custom-mobile-features  icon--opacity">
                  <i className="content-icon isoi-custom-mobile-features" />
                  <div className="list--text">Custom Features</div>
                </li>
                <li className="icon icon-mobile-live-streaming  icon--opacity">
                  <i className="content-icon isoi-mobile-live-streaming" />
                  <div className="list--text">Live-Streaming</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image phone__image--left"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/sport-case-2.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PhoneImage;
