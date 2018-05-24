import React from "react";

class CompanyClients extends React.Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <div className="clients__grid">
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid">
                  <img
                    className="clients__logo"
                    src={require('../../upload/images/partners/00c0fa699b7c2c783cb6963228706c292cd900c3ad8761641b954a1318eac795.svg')}
                    alt="MOBILE ROADIE"
                  />{" "}
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../upload/images/partners/06e4850f1ed0c1189f9e20cb79f865b50f2d4e5f26d22bac5635d10d3460b8be.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title">MOBILE ROADIE</h3>
                  <p className="clients__description m-bottom-35">
                    SaaS-based mobile app marketing platform that unites app
                    creation and mobile marketing in one powerful solution.
                    Build a customized apps in no time and update them on the
                    fly.{" "}
                  </p>
                  <a
                    href="https://mobileroadie.com/"
                    className="clients__link--more"
                  >
                    COMPANY WEBSITE <i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid">
                  <img
                    className="clients__logo"
                    src={require('../../upload/images/partners/e82b18957eea05879161769f707fdbda76b39adc3b5ad9cb89a2447290626f97.svg')}
                    alt="STANFY"
                  />{" "}
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../upload/images/partners/3b8c3fe12162567f3dd97aa4fb84b90183b0d7c428d9e81d42e88aa77eae84a1.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title">STANFY</h3>
                  <p className="clients__description m-bottom-35">
                    Design and development studio specializing in AI-enabled
                    software solutions for mobile, wearable, and IoT devices.{" "}
                  </p>
                  <a href="https://stanfy.com/" className="clients__link--more">
                    COMPANY WEBSITE <i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid">
                  <img
                    className="clients__logo"
                    src={require('../../upload/images/partners/8108e328251cb2493b68d9146104edced0048a92c6d2031c0d8f997741fb8c0b.svg')}
                    alt="MEOPLE"
                  />{" "}
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../upload/images/partners/d2d458faecb4afb8d6ea0a80e6345497dd560d66fd3e84c1ed4f930de4cd2404.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title">MEOPLE</h3>
                  <p className="clients__description m-bottom-35">
                    Tech company that developed a convenient way for drivers to
                    stay connected on social networks while keeping their hands
                    on the wheel and their attention on the road ahead.{" "}
                  </p>
                  <a
                    href="http://www.meople.info/"
                    className="clients__link--more"
                  >
                    COMPANY WEBSITE <i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid">
                  <img
                    className="clients__logo"
                    src={require('../../upload/images/partners/f1524f4ce67e22c6059156b863ade3ee3b712759746233f06ebca828afa2c834.svg')}
                    alt="BRIGHTER"
                  />{" "}
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../upload/images/partners/2fef38085acbf6dc6f382d415561a6768dc827ec1c78ec27637b88f3a47711de.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title">BRIGHTER</h3>
                  <p className="clients__description m-bottom-35">
                    Software development company that specializes in helping
                    startups build MVPs, as well as helping established and
                    growing businesses extend their tech teams and improve their
                    products.{" "}
                  </p>
                  <a
                    href="https://wearebrighter.com/"
                    className="clients__link--more"
                  >
                    COMPANY WEBSITE <i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyClients;
