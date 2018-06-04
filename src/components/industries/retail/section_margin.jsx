import React from "react";

class SectionMargin extends React.Component {
  render() {
    return (
      <section className="phone section-margin ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Turn Data Into Revenue</h3>
              <p className="phone__lead">
                With over a decade of experience in software development, the
                Intellectsoft team can help you develop a comprehensive software
                solution that caters to the needs and demands of your business.
                From warehouse management and logistics suites to POS
                software—your imagination is the only limit.
              </p>
              <ul className="phone__list">
                <li className="icon icon-pos ">
                  <i className="content-icon isoi-pos" />
                  <div className="list--text">POS</div>
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
                <li className="icon icon-employee-training ">
                  <i className="content-icon isoi-employee-training" />
                  <div className="list--text">Training Software</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/retail-case-3.png")})`
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
