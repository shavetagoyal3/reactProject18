import React from "react";

class PhoneImage extends React.Component {
  render() {
    return (
      <section
        className="phone phone--image "
        style={{
          backgroundImage: `url(${require("../../../assets/5be2fa1f/img/phone-bg-jacket.jpg")})`
        }}
      >
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">Engage Mobile Users</h3>
              <p className="phone__lead">
                Merge the best features of your in-store and online shopping
                experience in one place—your customers' mobile phones. Leverage
                the latest technological developments to transform the way your
                customers think about shopping.
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
                <li className="icon icon-store-navigation  icon--opacity">
                  <i className="content-icon isoi-store-navigation" />
                  <div className="list--text">In-Store Navigation</div>
                </li>
                <li className="icon icon-custom-mobile-features  icon--opacity">
                  <i className="content-icon isoi-custom-mobile-features" />
                  <div className="list--text">Custom Features</div>
                </li>
                <li className="icon icon-recipe-shopping  icon--opacity">
                  <i className="content-icon isoi-recipe-shopping" />
                  <div className="list--text">Recipe Shopping</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image phone__image--left"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/retail-case-2.png")})`
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
