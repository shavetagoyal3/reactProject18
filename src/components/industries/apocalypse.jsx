import React from "react";

class Apocalypse extends React.Component {
  render() {
    return (
      <div className="apocalypse apocalypse--platforms">
        <div className="container">
          <h2 className="apocalypse__title">The Latest Tech</h2>
          <div className="apocalypse__list">
            <div className="apocalypse__item">
              <i className="isoi-augmented-reality apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Augmented Reality</h3>
                <p className="apocalypse__description">
                  Add an additional layer to your business with AR, bringing new
                  value and emotions to your users right on the screens of their
                  mobile devices.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-ai-assistant apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Artificial Intelligence</h3>
                <p className="apocalypse__description">
                  Seize the processing power of AI to streamline business
                  operations, reduce costs, and reasonably simplify your
                  business.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-virtual-reality apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Virtual Reality</h3>
                <p className="apocalypse__description">
                  Add a new dimension to your business by creating unique VR
                  experiences that will linger in your users’ memories for a
                  long time.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-beacons apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Beacons & Sensors</h3>
                <p className="apocalypse__description">
                  Deploy smart devices to provide navigation, create contextual
                  experiences, and gather data that will help you improve your
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apocalypse;
