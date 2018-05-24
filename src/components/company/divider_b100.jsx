import React from "react";

class DividerB100 extends React.Component {
  render() {
    return (
      <div className="stats stats--white divider-b-100">
        <div className="container">
          <div className="stats__wrapper">
            <div className="stats__item stats__item--4">
              <div className="stats__content">
                <p className="stats__number stats__number--massive">500</p>
                <h3 className="stats__heading stats__heading--black">
                  Loyal Clients
                </h3>
              </div>
            </div>
            <div className="stats__item stats__item--4">
              <div className="stats__content">
                <p className="stats__number stats__number--massive">60%</p>
                <h3 className="stats__heading stats__heading--black">
                  Increase in Budget Allocation Efficiency
                </h3>
              </div>
            </div>
            <div className="stats__item stats__item--4">
              <div className="stats__content">
                <p className="stats__number stats__number--massive">3X</p>
                <h3 className="stats__heading stats__heading--black">
                  Faster Time to Market
                </h3>
              </div>
            </div>
            <div className="stats__item stats__item--4">
              <div className="stats__content">
                <p className="stats__number stats__number--massive">425</p>
                <h3 className="stats__heading stats__heading--black">
                  Years Saved with Reusable Code
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DividerB100;
