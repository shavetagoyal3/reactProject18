import React from "react";

class CompanyClients2 extends React.Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <div className="clients__grid">
            <div className="clients__item clients__item--3">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid">
                  <img
                    className="clients__logo"
                    src={require('../../upload/images/partners/b59635751fcfa6890d7483448f556b2f30f77f440edc9e3f93db7fd57ce22524.svg')}
                    alt="GISMART MUSIC"
                  />{" "}
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../upload/images/partners/81a7d6c5be2f97ef6b478f5907a4a2afe5d87addbcacc0151dab657f5e1aa261.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title">GISMART MUSIC</h3>
                  <p className="clients__description m-bottom-35">
                    Award winning musiс-making apps and games for mobile
                    devices. Over 150 million downloads and 11 million monthly
                    users.{" "}
                  </p>
                  <a
                    href="https://gismart.com/"
                    className="clients__link--more"
                  >
                    COMPANY WEBSITE <i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--3">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid">
                  <img
                    className="clients__logo"
                    src={require('../../upload/images/partners/46d1f6a673e427e01ddb7274fb8fb52b9739a7905d7cf3317d9dd21468af6e8b.svg')}
                    alt="GEOZILLA"
                  />{" "}
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../upload/images/partners/841e94d8f5fbe0831118bc7424e49fa36b437a94f789e4c4185cf55ff1bf31df.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title">GEOZILLA</h3>
                  <p className="clients__description m-bottom-35">
                    Open Family Safety Platform that enables users and family
                    members to connect IoT devices via smartphone. Over a
                    million downloads and 20% organic monthly growth.{" "}
                  </p>
                  <a
                    href="https://geozilla.com/"
                    className="clients__link--more"
                  >
                    COMPANY WEBSITE <i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clients__item clients__item--3">
              <div className="clients__content clients__content--block">
                <div className="clients__media clients__media--fluid">
                  <img
                    className="clients__logo"
                    src={require('../../upload/images/partners/1bb7a3d48c2ef3242d63d7cf646570eca9af08b10f76c4296baf45cda4aaa63d.svg')}
                    alt="SE RANKING"
                  />{" "}
                  <div
                    className="clients__media-inner"
                    style={{
                      backgroundImage:
                        `url(${require("../../upload/images/partners/62f54e66ac7805f37e66e1e14ae3718d107400972571f75e366a312ba93028fa.jpg")})`
                    }}
                  />
                </div>
                <div className="clients__text clients__text--fluid">
                  <h3 className="clients__title">SE RANKING</h3>
                  <p className="clients__description m-bottom-35">
                    Cloud-based SaaS platform for SEO and online marketing
                    professionals that provides a robust set of SEO tools. Over
                    50 thousand customers and 10 thousand paying subscribers.{" "}
                  </p>
                  <a
                    href="https://seranking.com/"
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

export default CompanyClients2;
