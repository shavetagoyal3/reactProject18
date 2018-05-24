import React from "react";

class Stats extends React.Component {
  render() {
    return (
      <div className="stats">
        <div className="bg-stats-clients">
          <img
            className="bg-img"
            src={require('../../assets/5be2fa1f/img/bg-stats-clients.jpg')}
            alt="Clients"
          />
        </div>
        <div className="container">
          <h2 className="stats__title">
            We are what our clients need us to be.
          </h2>
          <p className="stats__lead">
            They trust us to help them create impactful software solutions.
          </p>
          <div className="stats__wrapper">
            <div className="stats__item">
              <div className="stats__content">
                <p className="stats__number stats__number--massive">500</p>
                <h3 className="stats__heading">Global Clients</h3>
                <p className="stats__text">
                  Across 40+ countries and 6 continents.
                </p>
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__content">
                <p className="stats__number stats__number--massive">85%</p>
                <h3 className="stats__heading">Returning Clients</h3>
                <p className="stats__text">
                  Approach us to improve and expand their solutions.
                </p>
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__content">
                <p className="stats__number stats__number--massive">60%</p>
                <h3 className="stats__heading">Loyal Clients</h3>
                <p className="stats__text">
                  Have continued to choose Intellectsoft for over 3 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
