import React from "react";

class KeyPoints extends React.Component {
  render() {
    return (
      <div className="key-points">
        <div className="container container--flex">
          <h2 className="apocalypse__title apocalypse__title--key-points" />
          <div className="key-points__cards">
            <div
              className="key-points__card"
              style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/svg-animated/azure-1.svg")})`
        }}
            >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/azure-1.svg')}
                 />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  Make Your Business Flexible
                </h2>
                <p className="key-points__description">
                  Shifting to cloud solutions improves the mobility of your
                  business and reduces cycle times, allowing you to make changes
                  to your software faster and safer. Moreover, Microsoft Azure
                  provides unparalleled opportunities for business automation
                  and creating access to supply chains via mobile devices.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Cross-Platform Applications
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Cost Effective
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Adaptable
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Rich Analytics
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
          backgroundImage:
            `url(${require("../../../assets/5be2fa1f/img/svg-animated/azure-2.svg")})`
        }}
            >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/azure-2.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  Scalability
                </h2>
                <p className="key-points__description">
                  Microsoft Azure allows businesses to create environments that
                  are equally reliable whether they are used by 10 users or 10
                  million users. We can automate your infrastructure, helping
                  you develop and deploy new features within applications
                  quickly and cost effectively.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Azure Virtual Machines
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Azure Logic Apps
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Azure Service Fabric
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Azure Monitor
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              
            >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/azure-3.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  Internet of Things
                </h2>
                <p className="key-points__description">
                  Streamline and automate your operations with connected
                  devices. Collect and analyze large quantities of data from
                  your interconnected devices or run real-time queries to
                  foresee outages and prevent them with predictive maintenance.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Remote Monitoring
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Predictive Maintenance
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Interconnected Devices
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Data Analysis
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
