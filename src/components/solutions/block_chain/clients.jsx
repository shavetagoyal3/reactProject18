import React from "react";

class Clients extends React.Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <div className="clients__grid">
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--blockchain">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/bg-wallet.jpg")})`
                    }}
                  />
                  <h3 className="clients__title clients__title--fluid">
                    Virtual Currency
                  </h3>
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--blockchain">
                    Blockchain-based virtual currency for E-commerce
                  </h3>
                  <p className="clients__description clients__description--blockchain">
                    Technologies:
                  </p>
                  <ul className="platform-client__list platform-client__list--technologies">
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Ethereum
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Smart contracts
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      ERC20 tokens
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Identity management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--blockchain">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/bg-virtual-currency.jpg")})`
                    }}
                  />
                  <h3 className="clients__title clients__title--fluid">
                    Cryptocurrency Wallet
                  </h3>
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--blockchain">
                    P2P proximity payments platform
                  </h3>
                  <p className="clients__description clients__description--blockchain">
                    Technologies:
                  </p>
                  <ul className="platform-client__list platform-client__list--technologies">
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Ethereum
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Bitcoin
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Java backend
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      iOS and Android apps
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--blockchain">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/bg-marketplace.jpg")})`
                    }}
                  />
                  <h3 className="clients__title clients__title--fluid">
                    Online E-commerce Marketplace
                  </h3>
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--blockchain">
                    Blockchain-based online marketplace
                  </h3>
                  <p className="clients__description clients__description--blockchain">
                    Technologies:
                  </p>
                  <ul className="platform-client__list platform-client__list--technologies">
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Ethereum
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Smart contracts
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      ERC20 tokens
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Identity management
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Secured crowdfunding
                    </li>
                    <li className="platform_client__list-item platform_client__list-item--column platform_client__list-item--technologies">
                      Crypto and digital assets management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--blue">
                <div className="clients__text clients__text--fluid clients__text--blue">
                  <span className="clients__title clients__title--massive clients__title--massive--blockchain">
                    500
                  </span>
                  <span className="clients__tag clients__tag--medium">
                    Loyal Clients
                  </span>
                  <p className="clients__description clients__description--medium m-bottom-35 clients__description--medium--blockchain">
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
