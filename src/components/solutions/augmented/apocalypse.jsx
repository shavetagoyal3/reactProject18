 import React from "react";

class Apocalypse extends React.Component {
  render() {
    return (
      <div className="apocalypse apocalypse--augmented-reality">
        <div className="container">
          {}
          
          <h2 className="apocalypse__title">
            A New Dimension of Your Business
          </h2>
          <div className="apocalypse__list">
            <div className="apocalypse__item">
              <i className="isoi-dimension-of-operations apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">
                  A New Dimension of Operations
                </h3>
                <p className="apocalypse__description">
                  From healthcare to construction, use AR to literally walk
                  through the smallest details of your operations, and make them
                  more efficient and accurate.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-dimension-of-user-experience apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">
                  A New Dimension of User Experience
                </h3>
                <p className="apocalypse__description">
                  Bring emotion-invoking AR experiences to your customers, and
                  make your brand linger for a very long time.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-dimension-of-manufacturing apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">
                  A New Dimension of Manufacturing
                </h3>
                <p className="apocalypse__description">
                  AR allows more creativity, better collaboration, and utmost
                  precision compared to the traditional manufacturing process.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-dimension-of-productivity apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">
                  A New Dimension of Productivity
                </h3>
                <p className="apocalypse__description">
                  Refresh the enterprise experience for your employees with AR
                  training, monitoring, and meetings, improving the overall
                  enterprise productivity.
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
