import React from "react";

class ARAugmentedValidation extends React.Component {
  render() {
    return (
      <section className="phone augmented-reality--validation">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column phone__column--order-2">
              <h3 className="phone__title h2">
                As-build vs As-designed validation
              </h3>
              <p className="phone__lead">
                From 3D AR reconstructions in real time to AR clash detection,
                transforms the construction process to help you achieve the
                highest level of engineering precision. In continuous progress
                monitoring, use AR to detect and eliminate errors earlier — by
                comparing as-built models with the designed 4D BIM
                representations. Most importantly, augmented reality in
                construction presents an unparalleled way to explore the
                construction site from all sides, down to the smallest detail.
              </p>
              <ul className="phone__list">
                <li className="icon icon-ar-progress-monitoring ">
                  <i className="content-icon isoi-ar-progress-monitoring" />
                  <div className="list--text">AR progress monitoring</div>
                </li>
                <li className="icon icon-explore-construction-site ">
                  <i className="content-icon isoi-explore-construction-site" />
                  <div className="list--text">
                    Explore construction site in AR
                  </div>
                </li>
                <li className="icon icon-clash-detections-in-ar ">
                  <i className="content-icon isoi-clash-detections-in-ar" />
                  <div className="list--text">Clash detections in AR</div>
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

export default ARAugmentedValidation;
