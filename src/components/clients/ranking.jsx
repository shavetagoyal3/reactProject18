import React from "react";

class Ranking extends React.Component {
  render() {
    return (
      <div className="ranking">
        <div className="container">
          <h2 className="ranking__title">Awards & Recognition</h2>
          <div className="owl-carousel" id="ranking">
            <div className="ranking__item item">
              <a
                target="_blank"
                href="https://www.itfirms.co/top-mobile-app-development-companies/"
              >
                <img
                  src={require('../../assets/5be2fa1f/img/ratings-logos/itfirms.jpg')}
                  alt="IT Firms"
                />
              </a>
              <h4 className="ranking__sign">IT Firms</h4>
            </div>
            <div className="ranking__item item">
              <img
                src={require('../../assets/5be2fa1f/img/ratings-logos/clutch.jpg')}
                alt="Clutch"
              />
              <h4 className="ranking__sign">Clutch</h4>
            </div>
            <div className="ranking__item item">
              <img
                src={require('../../assets/5be2fa1f/img/ratings-logos/inc_5000.jpg')}
                alt="INC 5000"
              />
              <h4 className="ranking__sign">INC 5000</h4>
            </div>
            <div className="ranking__item item">
              <img
                src={require('../../assets/5be2fa1f/img/ratings-logos/business-of-apps.jpg')}
                alt="Bussines of apps"
              />
              <h4 className="ranking__sign">Business of apps</h4>
            </div>
            <div className="ranking__item item">
              <img
                src={require('../../assets/5be2fa1f/img/ratings-logos/app-futura.jpg')}
                alt="App futura"
              />
              <h4 className="ranking__sign">App futura</h4>
            </div>
            <div className="ranking__item item">
              <img
                src={require('../../assets/5be2fa1f/img/ratings-logos/iaop.jpg')}
                alt="TOP 100 Outsourcing"
              />
              <h4 className="ranking__sign">TOP 100 Outsourcing</h4>
            </div>
            <div className="ranking__item item">
              <img
                src={require('../../assets/5be2fa1f/img/ratings-logos/top-design-firms.jpg')}
                alt="TOP design firms"
              />
              <h4 className="ranking__sign">TOP design firms</h4>
            </div>
            <div className="ranking__item item">
              <img
                src={require('../../assets/5be2fa1f/img/ratings-logos/good-firms.jpg')}
                alt="Good firms"
              />
              <h4 className="ranking__sign">Good firms</h4>
            </div>
            <div className="ranking__item item">
              <img
                src={require('../../assets/5be2fa1f/img/ratings-logos/clutch-global.jpg')}
                alt="Clutch global"
              />
              <h4 className="ranking__sign">Clutch</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ranking;
