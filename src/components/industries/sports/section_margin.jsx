import React from "react";

class SectionMargin extends React.Component {
  render() {
    return (
      <section className="phone section-margin ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Turnkey Software Development</h3>
              <p className="phone__lead">
                With over a decade of experience in software development, the
                Intellectsoft team can create any software you may need. Create
                specialized health and fitness software, automate the analysis
                of your data, and improve your training with secure and
                specialized software. Your imagination is the only limit.
              </p>
              <ul className="phone__list">
                <li className="icon icon-wearable-tech ">
                  <i className="content-icon isoi-wearable-tech" />
                  <div className="list--text">Wearable Tech</div>
                </li>
                <li className="icon icon-smart-design ">
                  <i className="content-icon isoi-smart-design" />
                  <div className="list--text">Smart Design</div>
                </li>
                <li className="icon icon-big-data ">
                  <i className="content-icon isoi-big-data" />
                  <div className="list--text">Big Data Analytics</div>
                </li>
                <li className="icon icon-iot-chip ">
                  <i className="content-icon isoi-iot-chip" />
                  <div className="list--text">IoT</div>
                </li>
                <li className="icon icon-training-software ">
                  <i className="content-icon isoi-training-software" />
                  <div className="list--text">Training Software</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/sport-case-3.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionMargin;
