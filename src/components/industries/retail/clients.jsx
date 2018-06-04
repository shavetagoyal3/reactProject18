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
                        `url(${require("../../../assets/5be2fa1f/img/bg-retail-chain.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-retail-chain.png')}
                    alt="Retail Chain"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Retail Chain
                  </h3>
                  <p className="clients__description clients__description--">
                    A respected marketing and design agency tapped Intellectsoft
                    to collaborate on a project for a worldwide clothing and
                    accessories retailer.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-smartcart.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-smartcart.png')}
                    alt="SmartCart"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">SmartCart</h3>
                  <p className="clients__description clients__description--">
                    Application for internet-connected shopping carts that
                    creates optimal routes based on shoppers’ grocery lists,
                    providing shop owners with additional promotional
                    opportunities and heat-maps.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-chuze.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-chuze.png')}
                    alt="Chuze"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">Chuze</h3>
                  <p className="clients__description clients__description--">
                    Mobile application that helps grocery shoppers save time and
                    money with brand price comparisons, in-app coupons, discount
                    and sale announcements, and QR-code scanning.
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
