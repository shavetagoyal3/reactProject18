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
                      backgroundImage:
                        `url(${require("../../../assets/5be2fa1f/img/bg-gulls.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-gulls.png')}
                    alt="SD GULLS"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">SD GULLS</h3>
                  <p className="clients__description clients__description--">
                    A single application that caters to the key needs of the SD
                    Gulls fanbase with stadium check-ins, a fanwall chat, team
                    roster and scores, as well as the game calendar and ticket
                    purchases.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-finis.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-finis.png')}
                    alt="FINIS"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">FINIS</h3>
                  <p className="clients__description clients__description--">
                    A celebrated swimming equipment manufacturer helps swimmers
                    capture detailed workout statistics with fluid Android and
                    iOS applications developed by Intellectsoft.
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
                        `url(${require("../../../assets/5be2fa1f/img/bg-griffins.jpg")})`
                    }}
                  />
                  <img
                    className="clients__logo"
                    src={require('../../../assets/5be2fa1f/img/logo-griffins.png')}
                    alt="Grand Rapids Griffins"
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title clients__title--">
                    Grand Rapids Griffins
                  </h3>
                  <p className="clients__description clients__description--">
                    Engaging app with exclusive deals triggered by Beacons
                    placed in the arena, rewards for active users, and “Goal
                    Scored” notifications for users who couldn’t make the game.
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
