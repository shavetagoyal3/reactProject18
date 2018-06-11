import React from "react";

class StatsBlue extends React.Component {
  render() {
    return (
      <div className="stats stats--blue stats--overlay">
        <div className="container">
          <div className="stats__wrapper">
            <div className="stats__item stats__item--4">
              <div className="stats__content stats__content--vertically">
                <p className="stats__number stats__number--inline stats__number--large">
                  10
                </p>
                <h3 className="stats__heading stats__heading--inline">
                  Years in operation
                </h3>
              </div>
            </div>
            <div className="stats__item stats__item--4">
              <div className="stats__content stats__content--vertically">
                <p className="stats__number stats__number--inline stats__number--large">
                  35
                </p>
                <h3 className="stats__heading stats__heading--inline">
                  Fortune 500 Clients
                </h3>
              </div>
            </div>
            <div className="stats__item stats__item--4">
              <div className="stats__content stats__content--vertically">
                <p className="stats__number stats__number--inline stats__number--large">
                  200+
                </p>
                <h3 className="stats__heading stats__heading--inline">
                  Full-time developers
                </h3>
              </div>
            </div>
            <div className="stats__item stats__item--4">
              <div className="stats__content stats__content--vertically">
                <p className="stats__number stats__number--inline stats__number--large">
                  6
                </p>
                <h3 className="stats__heading stats__heading--inline">
                  Offices in 5 countries
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsBlue;
