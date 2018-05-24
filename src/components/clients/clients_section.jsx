import React from "react";

class ClientsSection extends React.Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <div className="clients__grid">
            <div className="clients__item">
              <div className="clients__content">
                <div className="clients__media">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../assets/5be2fa1f/img/bg-clients-cirrus.jpg")})`
                    }}
                  />
                  <a href="cases/cirrus.html">
                    <img
                      className="clients__logo"
                      src={require('../../assets/5be2fa1f/img/clients-logo/cirrus-white.svg')}
                      alt="Cirruspath"
                    />
                  </a>
                </div>
                <div className="clients__text">
                  <span className="clients__tag">SaaS</span>
                  <a href="cases/cirrus.html">
                    <h3 className="clients__title">Cirruspath</h3>
                  </a>
                  <p className="clients__description">
                    Cirruspath was behind the highest-rated app for integrating
                    Salesforce with a user’s email inbox. Cirrus Insight Mobile
                    helps...
                  </p>
                  <a href="cases/cirrus.html" className="clients__link--more">
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clients__item">
              <div className="clients__content">
                <div className="clients__media">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../assets/5be2fa1f/img/bg-clients-eurostar.jpg")})`
                    }}
                  />
                  <a href="cases/eurostar.html">
                    <img
                      className="clients__logo"
                      src={require('../../assets/5be2fa1f/img/clients-logo/eurostar-white.svg')}
                      alt="Eurostar"
                    />
                  </a>
                </div>
                <div className="clients__text">
                  <span className="clients__tag">Engineering</span>
                  <a href="cases/eurostar.html">
                    <h3 className="clients__title">Eurostar</h3>
                  </a>
                  <p className="clients__description">
                    A high-speed railway pioneer gains a series of automated
                    solutions to process passenger information, improve on-board
                    services,...
                  </p>
                  <a href="cases/eurostar.html" className="clients__link--more">
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clients__item">
              <div className="clients__content">
                <div className="clients__media">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../assets/5be2fa1f/img/bg-clients-harley-davidson.jpg")})`
                    }}
                  />
                  <a href="cases/harley-davidson.html">
                    <img
                      className="clients__logo"
                      src={require('../../assets/5be2fa1f/img/clients-logo/harley-davidson-white.svg')}
                      alt="Harley-Davidson"
                    />
                  </a>
                </div>
                <div className="clients__text">
                  <span className="clients__tag">Advanced Technology</span>
                  <a href="cases/harley-davidson.html">
                    <h3 className="clients__title">Harley-Davidson</h3>
                  </a>
                  <p className="clients__description">
                    Iconic motorcycle brand finds a fresh way to engage its fans
                    while on the road by creating a mobile app that allows
                    exhibition...
                  </p>
                  <a
                    href="cases/harley-davidson.html"
                    className="clients__link--more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clients__item">
              <div className="clients__content">
                <div className="clients__media">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../assets/5be2fa1f/img/bg-clients-ernst-young.jpg")})`
                    }}
                  />
                  <a href="cases/ernst-young.html">
                    <img
                      className="clients__logo"
                      src={require('../../assets/5be2fa1f/img/clients-logo/ernst-young-white.svg')}
                      alt="Ernst & Young"
                    />
                  </a>
                </div>
                <div className="clients__text">
                  <span className="clients__tag">Intelligent Enterprise</span>
                  <a href="cases/ernst-young.html">
                    <h3 className="clients__title">Ernst & Young</h3>
                  </a>
                  <p className="clients__description">
                    Forecasts in Focus confirms E&Y as a thought-leader in the
                    eyes of an audience relying on data to drive smarter
                    investment...
                  </p>
                  <a
                    href="cases/ernst-young.html"
                    className="clients__link--more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column column--flex-center show-tablet p-top-20">
            <a href="cases.html" className="button button--clear button--blue">
              All Clients <i className="isoi-angle-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientsSection;
