import React from "react";

class ARAugmentedProcess extends React.Component {
  render() {
    return (
      <section className="phone augmented-reality--process">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">
                Faster and more efficient construction process with AR
              </h3>
              <p className="phone__lead">
                All people can see, experience, and comprehend the world around
                them in 3D. Now, unlock the third dimension in construction with
                augmented reality. Perform as-built vs. as-designed validation
                and reconstruct 3D models in AR. Employ sensor-based AR
                solutions for automatic hazard detection. Finally, use AR
                headsets to work on projects remotely and improve collaboration.
              </p>
              <ul className="phone__list">
                <li className="icon icon-automatic-hazard-detection ">
                  <i className="content-icon isoi-automatic-hazard-detection" />
                  <div className="list--text">Automatic hazard detection</div>
                </li>
                <li className="icon icon-built-vs-designed ">
                  <i className="content-icon isoi-built-vs-designed" />
                  <div className="list--text">
                    As-built vs. as-designed validation in AR
                  </div>
                </li>
                <li className="icon icon-3d-site-reconstruction ">
                  <i className="content-icon isoi-3d-site-reconstruction" />
                  <div className="list--text">3D site reconstruction in AR</div>
                </li>
                <li className="icon icon-dimension-of-productivity ">
                  <i className="content-icon isoi-dimension-of-productivity" />
                  <div className="list--text">
                    Teleoperation and collaboration in AR
                  </div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/platforms/ar-construction/hololens.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ARAugmentedProcess;
