import React from "react";

class MaintenanceCaseStudies extends React.Component {
  render() {
    return (
      <section className="case-studies">
        <div className="container" />
        <div className="carousel">
          <div className="case-studies__item carousel-cell">
            <div
              className="case-studies__image"
              style={{
                backgroundImage:
                  `url(${require("../../../upload/images/cases/b4f5411e979896e579acef5cd48f54bda090812baaccf5de4b619418f296335a.jpg")})`
              }}
            />
            <div className="case-studies__content">
              <h2 className="case-studies__heading">Cirruspath</h2>
              <p className="case-studies__lead">
                Cirruspath was behind the highest-rated app for integrating
                Salesforce with a user’s email inbox. Cirrus Insight Mobile
                helps you leverage your sales data to gain valuable insights and
                uncover new opportunities.
              </p>
              <a className="btn" href="../cases/cirrus.html">
                Read the case study
              </a>{" "}
            </div>
          </div>
          <div className="case-studies__item carousel-cell">
            <div
              className="case-studies__image"
              style={{
                backgroundImage:
                  `url(${require("../../../upload/images/cases/e3f907124775ae106e1d25d9bbbb8f05b261f746c525ea2c70ab94e4141cc62e.jpg")})`
              }}
            />
            <div className="case-studies__content">
              <h2 className="case-studies__heading">Eurostar</h2>
              <p className="case-studies__lead">
                A high-speed railway pioneer gains a series of automated
                solutions to process passenger information, improve on-board
                services, and report critical information to passengers.
              </p>
              <a className="btn" href="../cases/eurostar.html">
                Read the case study
              </a>{" "}
            </div>
          </div>
          <div className="case-studies__item carousel-cell">
            <div
              className="case-studies__image"
              style={{
                backgroundImage:
                  `url(${require("../../../upload/images/cases/74ec3ceab755c7e5c4794ae32707f01ee03f1f7cfe4a0a9a22f52f5dc1060931.jpg")})`
              }}
            />
            <div className="case-studies__content">
              <h2 className="case-studies__heading">Ernst & Young</h2>
              <p className="case-studies__lead">
                Forecasts in Focus confirms E&Y as a thought-leader in the eyes
                of an audience relying on data to drive smarter investment
                decisions.
              </p>
              <a className="btn" href="../cases/ernst-young.html">
                Read the case study
              </a>{" "}
            </div>
          </div>
          <div className="case-studies__item carousel-cell">
            <div
              className="case-studies__image"
              style={{
                backgroundImage:
                  `url(${require("../../../upload/images/cases/2d6b4e53877fd2d59f50d0ec82b3b64468b98865be988abe7c6652c2d6408dba.jpg")})`
              }}
            />
            <div className="case-studies__content">
              <h2 className="case-studies__heading">Consero LLC</h2>
              <p className="case-studies__lead">
                Influential networking events coordinator for senior executives
                bursts into the mobile age. The app allows attendees to connect,
                collaborate, and stay up-to-date.
              </p>
              <a className="btn" href="../cases/consero-llc.html">
                Read the case study
              </a>{" "}
            </div>
          </div>
          <div className="case-studies__item carousel-cell">
            <div
              className="case-studies__image"
              style={{
                backgroundImage:
                  `url(${require("../../../upload/images/cases/d399aed414d04cd440cbd460f3e224c7545e8de52fb2633d3af20902f37f6069.jpg")})`
              }}
            />
            <div className="case-studies__content">
              <h2 className="case-studies__heading">Shell</h2>
              <p className="case-studies__lead">
                Shell’s Robert Training Center gets a custom mobile app that
                helps its trainees, administrators, and visitors navigate the
                20-acre campus and communicate crucial messages, making
                documentation digital and gathering it one place.
              </p>
              <a className="btn" href="../cases/shell.html">
                Read the case study
              </a>{" "}
            </div>
          </div>
          <div className="case-studies__item carousel-cell">
            <div
              className="case-studies__image"
              style={{
                backgroundImage:
                  `url(${require("../../../upload/images/cases/ab1a8dcaea22c9ec30db987f044beb204613d5bbc70080aa0fec6218320f5575.jpg")})`
              }}
            />
            <div className="case-studies__content">
              <h2 className="case-studies__heading">Retail Chain Client</h2>
              <p className="case-studies__lead">
                A loyalty app for a major clothing retailer gives customers a
                discounted and personalized shopping experience.
              </p>
              <a className="btn" href="../cases/retail-chain-software.html">
                Read the case study
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MaintenanceCaseStudies;
