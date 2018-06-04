import React from "react";

class ARAugmentedCollab extends React.Component {
  render() {
    return (
      <section className="phone section-margin augmented-reality--collaboration">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">
                Teleoperation and collaboration
              </h3>
              <p className="phone__lead">
                The decentralization of the design and architecture services
                across the nation unlocked the creative potential for owners and
                made it possible to work with the leading service providers.
                Such level of decentralization requires new tools and approaches
                in collaboration. Allowing to operate remotely and respond more
                rapidly on different stages of the construction process, AR
                comes as a fitting solution.
              </p>
              <ul className="phone__list">
                <li className="icon icon-networking-social ">
                  <i className="content-icon isoi-networking-social" />
                  <div className="list--text">
                    Remote meetings over BIM models in AR
                  </div>
                </li>
                <li className="icon icon-remote-guidance-for-field-workers ">
                  <i className="content-icon isoi-remote-guidance-for-field-workers" />
                  <div className="list--text">
                    Remote guidance for field workers in AR
                  </div>
                </li>
                <li className="icon icon-virtual-reality ">
                  <i className="content-icon isoi-virtual-reality" />
                  <div className="list--text">Virtual presence on-site</div>
                </li>
                <li className="icon icon-instant-assistance ">
                  <i className="content-icon isoi-instant-assistance" />
                  <div className="list--text">Instant assistance</div>
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

export default ARAugmentedCollab;
