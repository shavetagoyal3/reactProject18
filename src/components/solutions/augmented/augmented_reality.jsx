import React from "react";

class AugmentedReality extends React.Component {
  render() {
    return (
      <section className="augmented-reality">
        <div
          className="augmented-reality__absolute-picture"
          style={{
            backgroundImage:
              `url(${require("../../../assets/5be2fa1f/img/augmented-reality-hololens.png")})`
          }}
        />
        <div className="container">
          <section className="augmented-reality__content">
            <article className="augmented-reality__capabilities">
              <div className="augmented-reality__capabilities-content">
                <h2 className="augmented-reality__title">
                  Leverage our AR development capabilities
                </h2>
                <ul className="augmented-reality__capabilities-list">
                  <li className="augmented-reality__capabilities-item">
                    Object tracking
                  </li>
                  <li className="augmented-reality__capabilities-item">
                    Object and pattern recognition
                  </li>
                  <li className="augmented-reality__capabilities-item">
                    Localization and mapping
                  </li>
                  <li className="augmented-reality__capabilities-item">
                    Face detection, tracking, and recognition
                  </li>
                  <li className="augmented-reality__capabilities-item">
                    Style transfer in photos and video
                  </li>
                </ul>
              </div>
            </article>
            <div className="augmented-reality__hardware">
              <article className="augmented-reality__hardware-content">
                <h2 className="augmented-reality__title">Enabling Hardware</h2>
                <div className="augmented-reality__hardware-items">
                  <div className="augmented-reality__hardware-item">
                    <i className="isoi-dimension-of-manufacturing" />
                    <p className="small-text">HoloLens</p>
                  </div>
                  <div className="augmented-reality__hardware-item">
                    <i className="isoi-mobile-apps" />
                    <p className="small-text">Mobile App</p>
                  </div>
                  <div className="augmented-reality__hardware-item">
                    <i className="isoi-software" />
                    <p className="small-text">Computer</p>
                  </div>
                  <div className="augmented-reality__hardware-item">
                    <i className="isoi-motion-controllers" />
                    <p className="small-text">Motion Controllers</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default AugmentedReality;
