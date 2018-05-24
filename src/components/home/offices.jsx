import React from "react";

class Offices extends React.Component {
  render() {
    return (
      <section className="offices">
        <div className="container">
          <div className="offices__title">
            <h2>Our Offices</h2>
            <p>
              Intellectsoft operates in multiple offices and development centers
              across the globe. Reach out to us for software development
              services in your region.
            </p>
          </div>
          <div id="officesSlider" className="offices-slider owl-carousel">
            <div
              className="offices-slider__item"
              style={{
                backgroundImage:
                  "url(assets/5be2fa1f/img/home-offices/usa-palo-alto.jpg)"
              }}
            >
              <div className="offices-slider__content">
                <div className="offices-slider__overlay" />
                <div className="offices-slider__text">
                  <div className="offices-slider__city">
                    USA<br />PALO ALTO
                  </div>
                  <div className="offices-slider__address">
                    <p>721 Colorado Avenue, Suite 101</p>
                    <p>+1 (650) 300 4335</p>
                    <p>
                      <a href="mailto:info@intellectsoft.net">
                        info@intellectsoft.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offices-slider__item"
              style={{
                backgroundImage:
                  "url(assets/5be2fa1f/img/home-offices/usa-ny.jpg)"
              }}
            >
              <div className="offices-slider__content">
                <div className="offices-slider__overlay" />
                <div className="offices-slider__text">
                  <div className="offices-slider__city">
                    USA<br />NEW YORK
                  </div>
                  <div className="offices-slider__address">
                    <p>222 Broadway, 27th floor</p>
                    <p>+1 (855) TOP DEVS</p>
                    <p>
                      <a href="mailto:info@intellectsoft.net">
                        info@intellectsoft.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offices-slider__item"
              style={{
                backgroundImage:
                  "url(assets/5be2fa1f/img/home-offices/london-uk.jpg)"
              }}
            >
              <div className="offices-slider__content">
                <div className="offices-slider__overlay" />
                <div className="offices-slider__text">
                  <div className="offices-slider__city">
                    UNITED KINGDOM<br />LONDON
                  </div>
                  <div className="offices-slider__address">
                    <p>22 Great Marlborough Street Soho</p>
                    <p>+44 20 3887 0078</p>
                    <p>
                      <a href="mailto:info@intellectsoft.co.uk">
                        info@intellectsoft.co.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offices-slider__item"
              style={{
                backgroundImage:
                  "url(assets/5be2fa1f/img/home-offices/oslo-norway.jpg)"
              }}
            >
              <div className="offices-slider__content">
                <div className="offices-slider__overlay" />
                <div className="offices-slider__text">
                  <div className="offices-slider__city">
                    NORWAY<br />OSLO
                  </div>
                  <div className="offices-slider__address">
                    <p>Bogstadveien 27B</p>
                    <p>+47 21 08 18 50</p>
                    <p>
                      <a href="mailto:info@intellectsoft.no">
                        info@intellectsoft.no
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offices-slider__item"
              style={{
                backgroundImage:
                  "url(assets/5be2fa1f/img/home-offices/ukraine-kyiv.jpg)"
              }}
            >
              <div className="offices-slider__content">
                <div className="offices-slider__overlay" />
                <div className="offices-slider__text">
                  <div className="offices-slider__city">
                    UKRAINE<br />KYIV
                  </div>
                  <div className="offices-slider__address">
                    <p>15, Leiptsyzka St.</p>
                    <p>+380 (44) 332-24-36</p>
                    <p>
                      <a href="mailto:hr@intellectsoft.net">
                        hr@intellectsoft.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offices-slider__item"
              style={{
                backgroundImage:
                  "url(assets/5be2fa1f/img/home-offices/minsk-belarus.jpg)"
              }}
            >
              <div className="offices-slider__content">
                <div className="offices-slider__overlay" />
                <div className="offices-slider__text">
                  <div className="offices-slider__city">
                    BELARUS<br />MINSK
                  </div>
                  <div className="offices-slider__address">
                    <p>57, Dzerzhinskogo Ave, office 14-1</p>
                    <p>+375 (17) 397-89-72</p>
                    <p>
                      <a href="mailto:hr@intellectsoft.net">
                        hr@intellectsoft.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Offices;
