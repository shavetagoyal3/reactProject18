import React from "react";

class MusicPhone extends React.Component {
  render() {
    return (
      <section className="phone ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Engage Your Fans</h3>
              <p className="phone__lead">
                Our mobile application platform allows you to control your
                mobile apps on-the-fly, sharing exclusive news with your fans,
                sending targeted push notifications, and rewarding your most
                engaged users with exclusive content or prizes. Intellectsoft’s
                platform will help you make your branded mobile application a
                digital arena that unites fans around the world.
              </p>
              <ul className="phone__list">
                <li className="icon icon-exclusive ">
                  <i className="content-icon isoi-exclusive" />
                  <div className="list--text">Special Offers</div>
                </li>
                <li className="icon icon-news ">
                  <i className="content-icon isoi-news" />
                  <div className="list--text">Exclusive News</div>
                </li>
                <li className="icon icon-rewards ">
                  <i className="content-icon isoi-rewards" />
                  <div className="list--text">Rewards</div>
                </li>
                <li className="icon icon-push-notifications ">
                  <i className="content-icon isoi-push-notifications" />
                  <div className="list--text">Notifications</div>
                </li>
                <li className="icon icon-navigation-location ">
                  <i className="content-icon isoi-navigation-location" />
                  <div className="list--text">Geolocation</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/music-case-1.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MusicPhone;
