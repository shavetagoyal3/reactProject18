import React from "react";

class Apocalypse extends React.Component {
  render() {
    return (
      <div className="apocalypse apocalypse--fintech">
        <div className="container">
          <h2 className="apocalypse__title">
            Transform Your Business With Cloud Technology
          </h2>
          <div className="apocalypse__list">
            <div className="apocalypse__item">
              <i className="isoi-blockchain-solutions apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Blockchain Solutions</h3>
                <p className="apocalypse__description">
                  Build secure decentralized systems using blockchain-based
                  ledgers, identity solutions, custom tokens and smart
                  contracts.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-payment-processing apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Payment Processing</h3>
                <p className="apocalypse__description">
                  Expand your payment options by accepting cryptocurrencies with
                  Blockchain API.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-digital-wallets apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Digital Wallets</h3>
                <p className="apocalypse__description">
                  Send and receive payments from blockchain-based wallets and
                  let your users load and redeem funds.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-cross-border-payment apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Cross-Border Payments</h3>
                <p className="apocalypse__description">
                  Send cheaper and faster payments to your beneficiaries around
                  the globe, 24/7.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-trading-securities apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Trading & Securities</h3>
                <p className="apocalypse__description">
                  Reduce costs, minimize complexity, and increase the speed of
                  trading and settlement processes.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-networking-global apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Lending</h3>
                <p className="apocalypse__description">
                  Create blockchain-based P2P and SME lending platforms to scale
                  your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apocalypse;
