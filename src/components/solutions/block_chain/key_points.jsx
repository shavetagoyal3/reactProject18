import React from "react";

class KeyPoints extends React.Component {
  render() {
    return (
      <div className="key-points">
        <div className="container container--flex">
          <h2 className="apocalypse__title apocalypse__title--key-points">
            BLOCKCHAIN DEVELOPMENT PROCESS
          </h2>
          <div className="key-points__cards">
            <div
              className="key-points__card"
              style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/svg-animated/needs.svg")})`
                }}
            >
              <div className="key-points__image key-points__image--blockchain">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/needs.svg')}/>
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  <span>1</span> Clarifying Your Needs
                </h2>
                <p className="key-points__description">
                  We gather your initial requirements during the first meeting.
                  After the assessment, you receive an approximate budget and
                  timeframe for the implementation of your blockchain solution.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    High-level requirements list
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Project assessment
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Workshop option & Statement of Work
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/svg-animated/strategy-workshop.svg")})`
        }}
            >
              <div className="key-points__image key-points__image--blockchain">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/strategy-workshop.svg')}/>
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  <span>2</span> Strategy & Concept Workshop
                </h2>
                <p className="key-points__description">
                  A team of blockchain experts, business analysts, tech and
                  product managers come up with a strategy that considers your
                  existing and planned business processes. They identify
                  limitations and risks, and create the initial project
                  architecture concept with a technology stack.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    MVP features and requirements
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Clickable prototype
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Complete project plan
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Final development proposal
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/svg-animated/design-dev.svg")})`
        }}
            >
              <div className="key-points__image key-points__image--blockchain">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/design-dev.svg')}/>
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  <span>3</span> Design & Development
                </h2>
                <p className="key-points__description">
                  Once you confirm the implementation, we gather a development
                  team for your project. You will be able to track the
                  development process of your blockchain and every two weeks
                  closely collaborate with your team — we use Scrum methodology.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Deployable product
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Compete product documentation
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Release plan
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/svg-animated/launch-support.svg")})`
        }}
            >
              <div className="key-points__image key-points__image--blockchain">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/launch-support.svg')}/>
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  <span>4</span> Launch & Support
                </h2>
                <p className="key-points__description">
                  We start releasing your blockchain in coordination with all
                  your teams, from sales to support. After the release, our
                  quality assurance experts test the system making sure it is
                  ready for production. Finally, we outline support and
                  maintenance processes for your blockchain project to ensure
                  its continuous operation.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Product launch
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyPoints;
