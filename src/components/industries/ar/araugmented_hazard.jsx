import React from "react";

class ARAugmentedHazard extends React.Component {
  render() {
    return (
      <section className="phone augmented-reality--hazard">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">Automatic hazard detection</h3>
              <p className="phone__lead">
                Enhance safety monitoring with advanced imaging algorithms that
                continuously monitor the state of all critical infrastructures
                and temporal equipment movements, as well as send emergency
                notifications to the wearable devices carried by the field
                staff. The use of augmented reality in construction goes beyond
                headsets.
              </p>
              <ul className="phone__list">
                <li className="icon icon-probabilistic-models-for-risk-assessments ">
                  <i className="content-icon isoi-probabilistic-models-for-risk-assessments" />
                  <div className="list--text">
                    Probabilistic models for risk assessments
                  </div>
                </li>
                <li className="icon icon-temporal-objects-tracking ">
                  <i className="content-icon isoi-temporal-objects-tracking" />
                  <div className="list--text">Temporal objects tracking</div>
                </li>
                <li className="icon icon-tracking-objects-from-video-cameras ">
                  <i className="content-icon isoi-tracking-objects-from-video-cameras" />
                  <div className="list--text">
                    Tracking objects from video cameras
                  </div>
                </li>
                <li className="icon icon-integrated-wearables ">
                  <i className="content-icon isoi-integrated-wearables" />
                  <div className="list--text">Integrated wearables</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image phone__image--left"
                
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ARAugmentedHazard;
