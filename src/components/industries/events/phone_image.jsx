import React from "react";

class PhoneImage extends React.Component {
  render() {
    return (
      <section
        className="phone phone--image "
        style={{
          backgroundImage: `url(${require("../../../assets/5be2fa1f/img/phone-bg-event.jpg")})`
        }}
      >
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">Elevate the Event Experience</h3>
              <p className="phone__lead">
                Elevate your guests’ experience with mobile applications that
                reward frequent visitors with exclusive content, provide live
                streams for fans who are watching from afar, and allow for
                seamless networking with other attendees of the event. A
                dedicated mobile application can help you make your event an
                unforgettable experience.
              </p>
              <ul className="phone__list">
                <li className="icon icon-geofenced-messaging  icon--opacity">
                  <i className="content-icon isoi-geofenced-messaging" />
                  <div className="list--text">Geofenced Messaging</div>
                </li>
                <li className="icon icon-networking-global  icon--opacity">
                  <i className="content-icon isoi-networking-global" />
                  <div className="list--text">Seamless Networking</div>
                </li>
                <li className="icon icon-exclusive  icon--opacity">
                  <i className="content-icon isoi-exclusive" />
                  <div className="list--text">Exclusive Content</div>
                </li>
                <li className="icon icon-mobile-live-streaming  icon--opacity">
                  <i className="content-icon isoi-mobile-live-streaming" />
                  <div className="list--text">Live Streaming</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image phone__image--left"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/events-case-2.png")})`
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
