import React from "react";

class MusicPhoneImage extends React.Component {
  render() {
    return (
      <section
        className="phone phone--image "
        style={{
          backgroundImage: `url(${require("../../../assets/5be2fa1f/img/phone-bg-concert.jpg")})`
        }}
      >
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">Build Your Community</h3>
              <p className="phone__lead">
                Build your community and increase turnout at your shows by
                communicating directly with your fans and making it easier for
                them to talk amongst themselves—all in one place. Live stream
                your shows or Q&A sessions, start discussions in the in-app
                chatroom, help your fans share their experiences via social
                media, and share your tour information.
              </p>
              <ul className="phone__list">
                <li className="icon icon-location-global-2  icon--opacity">
                  <i className="content-icon isoi-location-global-2" />
                  <div className="list--text">Map & Tour Dates</div>
                </li>
                <li className="icon icon-mobile-live-streaming  icon--opacity">
                  <i className="content-icon isoi-mobile-live-streaming" />
                  <div className="list--text">Live Streaming</div>
                </li>
                <li className="icon icon-social  icon--opacity">
                  <i className="content-icon isoi-social" />
                  <div className="list--text">Social</div>
                </li>
                <li className="icon icon-chat  icon--opacity">
                  <i className="content-icon isoi-chat" />
                  <div className="list--text">Chat</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image phone__image--left"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/music-case-2.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MusicPhoneImage;
