import React from "react";

class InsuranceImage extends React.Component {
  render() {
    return (
      <section
        className="phone phone--image "
        style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/phone-bg-empower-policyholders.jpg")})`
        }}
      >
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">Empower Policyholders</h3>
              <p className="phone__lead">
                Give your policyholders everything they need in one place by
                providing them with all the necessary tools within one mobile
                application. Allow them to report incidents and upload photos
                right from the app, provide instant assistance with an in-app
                video chat, and automate claims with context driven
                communication tools.
              </p>
              <ul className="phone__list">
                <li className="icon icon-emergency  icon--opacity">
                  <i className="content-icon isoi-emergency" />
                  <div className="list--text">Emergency SOS</div>
                </li>
                <li className="icon icon-video-chat  icon--opacity">
                  <i className="content-icon isoi-video-chat" />
                  <div className="list--text">SOS Video Chat</div>
                </li>
                <li className="icon icon-analytics  icon--opacity">
                  <i className="content-icon isoi-analytics" />
                  <div className="list--text">Alert Analytics</div>
                </li>
                <li className="icon icon-custom-mobile-features  icon--opacity">
                  <i className="content-icon isoi-custom-mobile-features" />
                  <div className="list--text">
                    Context Driven Communication Tools
                  </div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image phone__image--left"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/insurance-case-2.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InsuranceImage;
