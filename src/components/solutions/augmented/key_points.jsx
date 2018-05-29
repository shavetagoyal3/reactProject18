import React from "react";

class KeyPoints extends React.Component {
  render() {
    return (
      <div className="key-points">
        <div className="container container--flex">
          <h2 className="apocalypse__title apocalypse__title--key-points" />
          <div className="key-points__cards">
            <div
              className="key-points__card"
              style={{
                backgroundImage:
                  `url(${require("../../../assets/5be2fa1f/img/svg-animated/ar-1.svg")})`
              }}
            >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/ar-1.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  A New Dimension for Operations
                </h2>
                <p className="key-points__description">
                  Employ AR to get insightful perspectives into your operations
                  and significantly increase their accuracy and efficiency. Use
                  AR in healthcare to analyse high resolution image scans and 3D
                  models in greater detail. Review and browse construction
                  models in real scale as you walk through them for the most
                  spot-on results.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    3D modelling in AR
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    3D image visualisation in AR
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Enterprise augmented reality apps
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Model and image AR reviews
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/svg-animated/ar-2.svg")})`
        }}
            >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/ar-2.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  A New Dimension for Manufacturing
                </h2>
                <p className="key-points__description">
                  Use AR to transform your manufacturing process. Elevate
                  engineering efficiency and precision, encourage creative
                  solutions, and cut manufacturing costs by allowing your
                  engineers to develop prototypes in mixed reality. Let them
                  leave comments and put other context in AR, so their
                  colleagues could review them later. Use the headsets in
                  successive production stages for more spot-on adjustments —
                  until your creation is perfected.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    3D prototyping in Mixed Reality
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    BIM model visualisation in AR
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Prototype reviews in AR
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Engineer training in AR
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/svg-animated/ar-3.svg")})`
        }}
            >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/ar-3.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  A New Dimension for Customer Experience
                </h2>
                <p className="key-points__description">
                  Animate your customer experience with AR, giving new emotions
                  and a brand new level of comfort to your customers. Guide your
                  real estate clients through real scale interactive properties
                  to save their time. Build breathtaking AR installations in
                  your marketing initiatives to let your brand linger in the
                  customer's’ memory and increase engagement. AR will improve
                  your customer experience even on the smallest levels, as you
                  can add features like AR effects and custom camera lenses to
                  your mobile app.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Marketing-focused 3D models
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Augmented reality installations
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Custom AR app features
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    AR games and apps
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/svg-animated/ar-4.svg")})`
        }}
            >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/ar-4.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  A New Dimension for Productivity
                </h2>
                <p className="key-points__description">
                  Implement AR solutions in your enterprise environment to
                  increase enterprise productivity and boost employee commitment
                  through gamification. Create AR training software that
                  simulates work and office scenarios to give a better
                  perspective of the job position and the office code of
                  conduct. Arrange AR meetings with employees from business
                  locations all over the world. Use AR in educational
                  establishments and initiatives to let your students experience
                  any remote location. Leverage augmented reality in sports for
                  real-time visualisation of in-game performance.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    AR enterprise training software
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    AR video meetings
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Education-focused AR experiences
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Real-time athlete performance visualisation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyPoints;
