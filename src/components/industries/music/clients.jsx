import React from "react";

class Clients extends React.Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <div className="clients__grid">
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage: `url(${require("../../../assets/5be2fa1f/img/bg-rhcp.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">RHCP</h3>
                  <p className="clients__description clients__description--">
                    <strong>1m+ Downloads</strong>
                    <br />Mobile and tablet application that allows fans to
                    discover RHCP tour dates, read exclusive interviews, and be
                    the first to know about the band’s newest tracks and videos.
                  </p>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/bg-madonna.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">Madonna</h3>
                  <p className="clients__description clients__description--">
                    <strong>2m+ Downloads</strong>
                    <br />Cross-platform applications that unites all
                    information about Madonna—tour dates, news, music and
                    merchandise store, and exclusive behind-the-scenes photos.
                  </p>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid clients__media--">
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/bg-fader.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">The Fader</h3>
                  <p className="clients__description clients__description--">
                    <strong>500k+ Downloads</strong>
                    <br />Mobile application of the New York-based magazine
                    about music, style, and culture.
                  </p>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--4">
              <div className="clients__content clients__content--blue">
                <div className="clients__text clients__text--fluid clients__text--blue">
                  <span className="clients__title clients__title--massive clients__title--massive--">
                    500
                  </span>
                  <span className="clients__tag clients__tag--medium">
                    Loyal Clients
                  </span>
                  <p className="clients__description clients__description--medium m-bottom-35 clients__description--medium--">
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
