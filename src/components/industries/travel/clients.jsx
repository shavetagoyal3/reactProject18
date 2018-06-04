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
                        `url(${require("../../../assets/5be2fa1f/img/bg-wynn-encore.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Wynn Las Vegas and Encore
                  </h3>
                  <p className="clients__description clients__description--">
                    The app of the award-winning, world-renowned resort and
                    casino allows users to book rooms and restaurant tables, as
                    well as providing them with access exclusive information.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-hotels.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Prince Hotels & Resorts
                  </h3>
                  <p className="clients__description clients__description--">
                    The Android app of the Japanese hotel chain allows for
                    booking, keeps guests informed on the latest news, and more.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-clayton-homes.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Clayton Homes
                  </h3>
                  <p className="clients__description clients__description--">
                    The largest manufacturer of modular homes in the United
                    States needed an Android app to let contractors collaborate
                    and help clients find the home of their dreams.
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
                  </a>{" "}
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
