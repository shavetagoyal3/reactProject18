import React from "react";

class Container extends React.Component {
  render() {
    return (
      <div className="container divider-t-70">
        <div className="grid grid--center no-padding-10">
          <div className="column-three p-10">
            <img
              src={require('../../../assets/5be2fa1f/img/about-page/photo-about-1.jpg')}
              alt="How we work 1"
            />
          </div>
          <div className="column-three p-10">
            <img
              src={require('../../../assets/5be2fa1f/img/about-page/photo-about-2.jpg')}
              alt="How we work 2"
            />
          </div>
          <div className="column-three p-10">
            <img
              src={require('../../../assets/5be2fa1f/img/about-page/photo-about-3.jpg')}
              alt="How we work 3"
            />
          </div>
          <div className="column-three p-10">
            <img
              src={require('../../../assets/5be2fa1f/img/about-page/photo-about-4.jpg')}
              alt="How we work 4"
            />
          </div>
          <div className="column-three p-10">
            <img
              src={require('../../../assets/5be2fa1f/img/about-page/photo-about-5.jpg')}
              alt="How we work 5"
            />
          </div>
          <div className="column-three p-10">
            <img
              src={require('../../../assets/5be2fa1f/img/about-page/photo-about-6.jpg')}
              alt="How we work 6"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
