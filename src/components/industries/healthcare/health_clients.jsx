import React from "react";

class HealthClients extends React.Component {
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
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/bg-nhs-uk.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">NHS UK</h3>
                  <p className="clients__description clients__description--">
                    Solution which allows the Information Governance Officers to
                    make changes to the system without having to rely on
                    software developers.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-calstar.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">Calstar</h3>
                  <p className="clients__description clients__description--">
                    Suite that allows hospitals and transportation teams to
                    quickly respond to emergencies, organize rescue missions,
                    and track the location of vehicles on their way to the
                    emergency.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-derm-grand-rounds.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Derm Grand Rounds
                  </h3>
                  <p className="clients__description clients__description--">
                    iOS application that allows a Professional Board of Advisers
                    to identify skin conditions based on photos and videos
                    submitted by patients.
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

export default HealthClients;
