import React from "react";

class PhotoSlider extends React.Component {
  render() {
    return (
      <section className="photo-slider">
        <div className="container">
          <div id="js-slider" className="owl-carousel">
            <img
              src={require('../../../assets/5be2fa1f/img/careers-slider-4.jpg')}
              className="carousel-cell"
              alt="Intellectsoft team on summer corporate event 1"
            />
            <img
              src={require('../../../assets/5be2fa1f/img/careers-slider-7.jpg')}
              className="carousel-cell"
              alt="Intellectsoft team on summer corporate event 2"
            />
            <img
              src={require('../../../assets/5be2fa1f/img/careers-slider-1.jpg')}
              className="carousel-cell"
              alt="Intellectsoft team on summer corporate event 3"
            />
            <img
              src={require('../../../assets/5be2fa1f/img/careers-slider-3.jpg')}
              className="carousel-cell"
              alt="Intellectsoft team on summer corporate event 4"
            />
            <img
              src={require('../../../assets/5be2fa1f/img/careers-slider-5.jpg')}
              className="carousel-cell"
              alt="Intellectsoft team on summer corporate event 5"
            />
            <img
              src={require('../../../assets/5be2fa1f/img/careers-slider-6.jpg')}
              className="carousel-cell"
              alt="Intellectsoft team on summer corporate event 6"
            />
            <img
              src={require('../../../assets/5be2fa1f/img/careers-slider-8.jpg')}
              className="carousel-cell"
              alt="Intellectsoft team on summer corporate event 7"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default PhotoSlider;
