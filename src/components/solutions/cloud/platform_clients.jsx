import React from "react";

class PlatformClients extends React.Component {
  render() {
    return (
      <div className="platform-client">
        <div className="container container--flex">
          <div className="platform-client__content">
            <h2 className="title platform-client__title">
              <span className="title__preheader title__preheader--tag title__preheader--gray">
                Client Success
              </span>
              Enterprise Legacy Cloud Transformation
            </h2>
            <p className="platform-client__description">
              After analysis of an on-premise legacy system, Intellectsoft
              optimized a majority of business processes and moved the business
              to the cloud. This allowed the company to reduce on-premises
              infrastructure maintenance costs, provided a scalable and
              resilient microservices-based system, and allowed employees and
              users to access business services from anywhere in the world.
            </p>
            <ul className="platform-client__list">
              <li className="platform_client__list-item">
                Updated Legacy Software
              </li>
              <li className="platform_client__list-item">
                Migration to the Cloud
              </li>
              <li className="platform_client__list-item">
                Integrated Microservices
              </li>
              <li className="platform_client__list-item">Reduced Costs</li>
            </ul>
            <a
              className="button button--clear button--blue"
              href="../cases.html"
            >
              More success stories <i className="isoi-angle-right" />
            </a>
          </div>
          <div className="platform-client__device-image">
            <img src={require('../../../assets/5be2fa1f/img/iPad-air.png')} alt />
          </div>
        </div>
      </div>
    );
  }
}

export default PlatformClients;
