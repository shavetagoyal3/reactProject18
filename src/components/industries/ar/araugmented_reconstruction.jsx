import React from "react";

class ARAugmentedReconstruction extends React.Component {
  render() {
    return (
      <section className="phone augmented-reality--reconstruction">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">3D Site Reconstruction</h3>
              <p className="phone__lead">
                Use augmented reality construction solutions to combine on-site
                sensors with images from photo and video cameras. Then, allow
                the BIM managers to extract structural information in real time
                and digitally reconstruct the site for further detailed analysis
                and simulation.
              </p>
              <ul className="phone__list">
                <li className="icon icon-structure-from-motion-pipeline ">
                  <i className="content-icon isoi-structure-from-motion-pipeline" />
                  <div className="list--text">
                    Structure from motion pipeline
                  </div>
                </li>
                <li className="icon icon-as-built-measurements ">
                  <i className="content-icon isoi-as-built-measurements" />
                  <div className="list--text">As-built measurements</div>
                </li>
                <li className="icon icon-digital-twin-representations ">
                  <i className="content-icon isoi-digital-twin-representations" />
                  <div className="list--text">Digital twin representations</div>
                </li>
                <li className="icon icon-photogrammetry ">
                  <i className="content-icon isoi-photogrammetry" />
                  <div className="list--text">Photogrammetry</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
               
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ARAugmentedReconstruction;
