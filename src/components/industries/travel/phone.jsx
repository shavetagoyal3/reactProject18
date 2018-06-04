import React from "react";

class Phone extends React.Component {
  render() {
    return (
      <section className="phone ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Connect with Your Guests</h3>
              <p className="phone__lead">
                Always keep your guests informed about the events and activities
                at your resort with spot-on push-notifications and geofencenced
                messaging. Present the upcoming seaside dinner for two, wine
                tastings, and other unique events right in your app, informing
                your guests and letting them make bookings straight away—right
                within the application.
              </p>
              <ul className="phone__list">
                <li className="icon icon-exclusive ">
                  <i className="content-icon isoi-exclusive" />
                  <div className="list--text">Special Offers</div>
                </li>
                <li className="icon icon-networking-social ">
                  <i className="content-icon isoi-networking-social" />
                  <div className="list--text">Social Media</div>
                </li>
                <li className="icon icon-geofenced-messaging ">
                  <i className="content-icon isoi-geofenced-messaging" />
                  <div className="list--text">Geofenced Messaging</div>
                </li>
                <li className="icon icon-push-notifications ">
                  <i className="content-icon isoi-push-notifications" />
                  <div className="list--text">Push Notifications</div>
                </li>
                <li className="icon icon-entertainment ">
                  <i className="content-icon isoi-entertainment" />
                  <div className="list--text">Events</div>
                </li>
                <li className="icon icon-news ">
                  <i className="content-icon isoi-news" />
                  <div className="list--text">News</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/hospitality-case-1.png")})`
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
