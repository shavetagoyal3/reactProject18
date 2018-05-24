import React from "react";

class Cemetery extends React.Component {
  render() {
    return (
      <section className="cemetery">
        <div className="container">
          <div className="cemetery__title cemetery__title--center">
            <h2>Client Cases</h2>
            <p>
              Intellectsoft’s app development platform has helped Fortune 500
              companies, established enterprises, and startups empower their
              brands with impactful mobile applications.
            </p>
          </div>
          <div id="cemetery" className="owl-carousel owl-theme">
            <div className="item">
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/land-rover.svg")})`
                }}
              />
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/harley-davidson.svg")})`
                }}
              />
            </div>
            <div className="item">
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/universal.svg")})`
                }}
              />
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/nestle.svg")})`
                }}
              />
            </div>
            <div className="item">
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/nhs.svg")})`
                }}
              />
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/clinique.svg")})`
                }}
              />
            </div>
            <div className="item">
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/guinness.svg")})`
                }}
              />
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/audi.svg")})`
                }}
              />
            </div>
            <div className="item">
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/bombardier.svg")})`
                }}
              />
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/eurostar.svg")})`
                }}
              />
            </div>
            <div className="item">
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/ernst-young.svg")})`
                }}
              />
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/giant.svg")})`
                }}
              />
            </div>
            <div className="item">
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/jaguar-talk.svg")})`
                }}
              />
              <div
                className="cemetery__image"
                style={{
                  backgroundImage:
                    `url(${require("../../assets/5be2fa1f/img/clients-logo/hoosbaa.svg")})`
                }}
              />
            </div>
          </div>
          <div className="column column--flex-center p-top-40 pb-20">
            <a
              href="#form-contacts"
              className="button button--clear button--blue"
            >
              Talk to our team<i className="isoi-angle-right" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Cemetery;
