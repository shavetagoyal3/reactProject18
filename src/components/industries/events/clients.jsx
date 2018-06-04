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
                        `url(${require("../../../assets/5be2fa1f/img/bg-harley-davidson.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-harley-davidson.png')}
                    alt="Harley-Davidson"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Harley-Davidson
                  </h3>
                  <p className="clients__description clients__description--">
                    Tablet application that helps sales reps engage brand fans,
                    schedule test drives, conduct product demos at any time, and
                    close deals with prospective clients at any venue.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-consero.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-consero.png')}
                    alt="Consero"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">Consero</h3>
                  <p className="clients__description clients__description--">
                    Influential networking events coordinator for senior
                    executives bursts into the mobile age. The app allows
                    attendees to connect, collaborate, and stay up-to-date.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-aspen.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-aspen.png')}
                    alt="Aspen Ideas Festival"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Aspen Ideas Festival
                  </h3>
                  <p className="clients__description clients__description--">
                    App that helps visitors find schedules, speaker information,
                    maps, videos, and everything they need to know about the
                    event—whether they are attending or watching from afar.
                  </p>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--blue">
                <div className="clients__text clients__text--fluid clients__text--blue">
                  <span className="clients__title clients__title--massive clients__title--massive--">
                    500
                  </span>
                  <span className="clients__tag clients__tag--medium">
                    Loyal Clients
                  </span>
                  <p className="clients__description clients__description--medium m-bottom-35 clients__description--medium--">
                    Over a decade of stellar software solutions
                  </p>
                  <a
                    className="button button--clear button--white button--220 "
                    href="../cases.html"
                  >
                    More Success Stories
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
