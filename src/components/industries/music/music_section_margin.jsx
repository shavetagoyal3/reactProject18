import React from "react";

class MusicSectionMargin extends React.Component {
  render() {
    return (
      <section className="phone section-margin ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Analyze and Monetize</h3>
              <p className="phone__lead">
                Turn your fan engagement into an additional revenue stream. Our
                mobile platform allows you to integrate your eCommerce store
                into the app, share your music from Spotify or Apple Music, and
                create multiple user tiers with paid subscriptions.
                Additionally, you may use the analytics of your fanbase to
                discover hotspots and plan your tours.
              </p>
              <ul className="phone__list">
                <li className="icon icon-music ">
                  <i className="content-icon isoi-music" />
                  <div className="list--text">Music Streaming</div>
                </li>
                <li className="icon icon-ecommerce ">
                  <i className="content-icon isoi-ecommerce" />
                  <div className="list--text">eCommerce Integration</div>
                </li>
                <li className="icon icon-big-data ">
                  <i className="content-icon isoi-big-data" />
                  <div className="list--text">Actionable Analytics</div>
                </li>
                <li className="icon icon-subscription ">
                  <i className="content-icon isoi-subscription" />
                  <div className="list--text">Subscription Classes</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/music-case-3.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MusicSectionMargin;
