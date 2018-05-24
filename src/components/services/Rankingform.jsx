import React from "react";

class Rankingform extends React.Component {
  render() {
    return (
      <div className="ranking-form">
        <h3 className="ranking-form__title">Awards & Recognition</h3>
        <div className="owl-carousel" id="formRanking">
          <div className="ranking-form__item item">
            <a
              target="_blank"
              href="https://www.itfirms.co/top-mobile-app-development-companies/"
            >
              <img
                src={require('../../assets/5be2fa1f/img/form-ratings/itfirms.png')}
                alt="IT Firms Award"
              />
            </a>
          </div>
          <div className="ranking-form__item item">
            <img
              src={require('../../assets/5be2fa1f/img/form-ratings/clutch.png')}
              alt="Clutch Award"
            />
          </div>
          <div className="ranking-form__item item">
            <img
              src={require('../../assets/5be2fa1f/img/form-ratings/inc_5000.png')}
              alt="INC 5000 Award"
            />
          </div>
          <div className="ranking-form__item item">
            <img
              src={require('../../assets/5be2fa1f/img/form-ratings/business-of-apps.png')}
              alt="Business of apps Award"
            />
          </div>
          <div className="ranking-form__item item">
            <img
              src={require('../../assets/5be2fa1f/img/form-ratings/app-futura.png')}
              alt="App futura Award"
            />
          </div>
          <div className="ranking-form__item item">
            <img
              src={require('../../assets/5be2fa1f/img/form-ratings/iaop.png')}
              alt="TOP 100 Outsourcing Award"
            />
          </div>
          <div className="ranking-form__item item">
            <img
              src={require('../../assets/5be2fa1f/img/form-ratings/top-design-firms.png')}
              alt="TOP design firms Award"
            />
          </div>
          <div className="ranking-form__item item">
            <img
              src={require('../../assets/5be2fa1f/img/form-ratings/good-firms.png')}
              alt="Good firms Award"
            />
          </div>
          <div className="ranking-form__item item">
            <img
              src={require('../../assets/5be2fa1f/img/form-ratings/clutch-global.png')}
              alt="Clutch global Award"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Rankingform;
