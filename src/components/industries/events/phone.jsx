import React from "react";

class Phone extends React.Component {
  render() {
    return (
      <section className="phone ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Connect With Your Visitors</h3>
              <p className="phone__lead">
                Your unique mobile application is more than an event brochure.
                Help your visitors obtain key information and navigate your
                venue with our no-code mobile app platform. Update your app
                on-the-fly, make sound decisions based on comprehensive
                actionable analytics, and engage attendees with targeted push
                notifications. Furthermore, help visitors connect with in-app QR
                scanners and integrated social media sharing functionality.
              </p>
              <ul className="phone__list">
                <li className="icon icon-push-notifications ">
                  <i className="content-icon isoi-push-notifications" />
                  <div className="list--text">Push Notifications</div>
                </li>
                <li className="icon icon-networking-social ">
                  <i className="content-icon isoi-networking-social" />
                  <div className="list--text">Social Media</div>
                </li>
                <li className="icon icon-news ">
                  <i className="content-icon isoi-news" />
                  <div className="list--text">News</div>
                </li>
                <li className="icon icon-qr-scanners ">
                  <i className="content-icon isoi-qr-scanners" />
                  <div className="list--text">QR Scanners</div>
                </li>
                <li className="icon icon-video ">
                  <i className="content-icon isoi-video" />
                  <div className="list--text">Media Content</div>
                </li>
                <li className="icon icon-beacons ">
                  <i className="content-icon isoi-beacons" />
                  <div className="list--text">Beacon Notifications</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/events-case-1.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Phone;
