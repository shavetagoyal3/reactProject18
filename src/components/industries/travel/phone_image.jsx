import React from "react";

class PhoneImage extends React.Component {
  render() {
    return (
      <section
        className="phone phone--image "
        style={{
          backgroundImage: `url(${require("../../../assets/5be2fa1f/img/phone-bg-apartments.jpg")})`
        }}
      >
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">Surpass Service Expectations</h3>
              <p className="phone__lead">
                Streamline the customer experience by converging all the
                services of your resort in a single app. From ordering concierge
                services in one tap to booking a golf courses in less than a
                minute. A branded app will let your guests to make the most of
                the recreational experience at your resort.
              </p>
              <ul className="phone__list">
                <li className="icon icon-food-delivery  icon--opacity">
                  <i className="content-icon isoi-food-delivery" />
                  <div className="list--text">Food Delivery</div>
                </li>
                <li className="icon icon-concierge  icon--opacity">
                  <i className="content-icon isoi-concierge" />
                  <div className="list--text">Concierge & Housekeeping</div>
                </li>
                <li className="icon icon-wearable-tech  icon--opacity">
                  <i className="content-icon isoi-wearable-tech" />
                  <div className="list--text">Trips & Sports Activities</div>
                </li>
                <li className="icon icon-mobile-navigation  icon--opacity">
                  <i className="content-icon isoi-mobile-navigation" />
                  <div className="list--text">Navigation & Transportation</div>
                </li>
                <li className="icon icon-spa-services  icon--opacity">
                  <i className="content-icon isoi-spa-services" />
                  <div className="list--text">Spa Services</div>
                </li>
                <li className="icon icon-restaurant-menu  icon--opacity">
                  <i className="content-icon isoi-restaurant-menu" />
                  <div className="list--text">Restaurant Booking</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image phone__image--left"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/hospitality-case-2.png")})`
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
