import React from "react";

class Clients extends React.Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <div className="clients__grid">
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/platforms/ar-construction/clients/c_01.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Enhancing communication within the team through spatial
                    models
                  </h3>
                  <p className="clients__description clients__description--">
                    Share the same model view in multiple headsets with
                    collaboration tools like gaze-tracking and annotations.
                  </p>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/platforms/ar-construction/clients/c_02.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Holographic model representation in real scale
                  </h3>
                  <p className="clients__description clients__description--">
                    Load BIM models and link them to the environment to make
                    precise measurements between the model and the points in
                    real world.
                  </p>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/platforms/ar-construction/clients/c_03.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Improving communication between parties using BIM models
                    on-site
                  </h3>
                  <p className="clients__description clients__description--">
                    Overlay BIM models over on-site physical spaces to verify
                    plans and constructability early on, and prevent errors.
                  </p>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4 clients--kado">
              <div className="clients__content clients__content--blue">
                <div className="clients__text clients__text--fluid clients__text--blue">
                  <img src={require('../../../assets/5be2fa1f/img/kado-logo.svg')} alt />
                  <span className="clients__title clients__title--massive">
                    KADO
                  </span>
                  <span className="clients__tag clients__tag--medium">
                    Precise measurements and point layout with Microsoft
                    Hololens®.
                  </span>
                  <a
                    className="button button--clear button--white button--220"
                    href="../l/17/kado-solution-for-ar.html"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
