import React from "react";

class BullsEye extends React.Component {
  render() {
    return (
      <div className="bullseye">
        <div className="bullseye__circle" />
        <div className="bullseye__item bullseye__item--25">
          <div
            className="bullseye__ipad"
            style={{ backgroundImage: `url(${require("../../assets/5be2fa1f/img/bullseye-ipad.png")})`, opacity:1 }}
          />
        </div>

        <div className="bullseye__item bullseye__item--50">
          <div className="bullseye__content">
            <h3>Comprehensive app platform & Custom app development</h3>
            <h3>Converged in one point</h3>
            <p>
              Leverage the paired power of our robust platform and decade-long
              development expertise to create a definitive application for your
              brand.
            </p>
            <div className="bullseye__arrow">
              <span>Discover the Features</span>
            </div>
          </div>
        </div>
        <div className="bullseye__item bullseye__item--25">
          <div
            className="bullseye__macbook"
            style={{ backgroundImage: `url(${require("../../assets/5be2fa1f/img/bullseye-macbook.png")})`, opacity:1 }}
          />
        </div>
      </div>
    );
  }
}

export default BullsEye;
