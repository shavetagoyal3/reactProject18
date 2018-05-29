import React from "react";

class IOTContainer extends React.Component {
  render() {
    return (
      <div className="iot-container">
        <div className="iot-absolute-cover" />
        <div className="apocalypse apocalypse--internet-of-things">
          <div className="container">
            
            <h2 className="apocalypse__title">Keep Abreast of Your Business</h2>
            <div className="apocalypse__list">
              <div className="apocalypse__item">
                <i className="isoi-monitor-operations apocalypse__icon" />
                <div className="apocalypse__content ">
                  <h3 className="apocalypse__heading">
                    Monitor operations, gather big data
                  </h3>
                  <p className="apocalypse__description">
                    IoT sensors and devices will help you monitor the aspects of
                    your manufacturing process, help track healthcare patients
                    remotely, gather Big Data, and more.
                  </p>
                </div>
              </div>
              <div className="apocalypse__item">
                <i className="isoi-ensure-iot apocalypse__icon" />
                <div className="apocalypse__content ">
                  <h3 className="apocalypse__heading">Ensure iot security</h3>
                  <p className="apocalypse__description">
                    Security is key in IoT. Safeguard your network from threats
                    with solutions like anti-intrusion systems, access
                    management, and diversified device protection.
                  </p>
                </div>
              </div>
              <div className="apocalypse__item">
                <i className="isoi-optimise-operations apocalypse__icon" />
                <div className="apocalypse__content ">
                  <h3 className="apocalypse__heading">Optimise operations</h3>
                  <p className="apocalypse__description">
                    Use IoT platforms for stock monitoring to save time and
                    costs, install smart shelves in your stores to get insights
                    into customer behaviour, and other.{" "}
                  </p>
                </div>
              </div>
              <div className="apocalypse__item">
                <i className="isoi-pinpoint apocalypse__icon" />
                <div className="apocalypse__content ">
                  <h3 className="apocalypse__heading">
                    Introduce pinpoint efficiency
                  </h3>
                  <p className="apocalypse__description">
                    Use IoT sensors to monitor crucial measurements in your
                    operations in real time, and use the data to make your
                    business more efficient, whether it’s manufacturing,
                    agriculture, or insurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <section className="augmented-reality augmented-reality--iot">
          <div className="container">
            <section className="augmented-reality__content">
              <article className="augmented-reality__capabilities">
                <div className="augmented-reality__capabilities-content">
                  <h2 className="augmented-reality__title">
                    We offer end-to-end internet of things solutions:
                  </h2>
                  <ul className="augmented-reality__capabilities-list">
                    <li className="augmented-reality__capabilities-item">
                      Integration
                    </li>
                    <li className="augmented-reality__capabilities-item">
                      Device management
                    </li>
                    <li className="augmented-reality__capabilities-item">
                      Information security
                    </li>
                    <li className="augmented-reality__capabilities-item">
                      Protocols of data collection
                    </li>
                    <li className="augmented-reality__capabilities-item">
                      Analytical tools
                    </li>
                  </ul>
                </div>
              </article>
              <div className="augmented-reality__hardware">
                <article className="augmented-reality__hardware-content">
                  <h2 className="augmented-reality__title">
                    Enabling Hardware
                  </h2>
                  <div className="augmented-reality__hardware-items">
                    <div className="augmented-reality__hardware-item">
                      <i className="isoi-push-notifications" />
                      <p className="small-text">Smartphone</p>
                    </div>
                    <div className="augmented-reality__hardware-item">
                      <i className="isoi-sensors" />
                      <p className="small-text">Sensors</p>
                    </div>
                    <div className="augmented-reality__hardware-item">
                      <i className="isoi-beacons" />
                      <p className="small-text">Beacons</p>
                    </div>
                    <div className="augmented-reality__hardware-item">
                      <i className="isoi-tablet" />
                      <p className="small-text">Tablet</p>
                    </div>
                    <div className="augmented-reality__hardware-item">
                      <i className="isoi-smart-wearable-devices" />
                      <p className="small-text">Smart wearable devices</p>
                    </div>
                    <div className="augmented-reality__hardware-item">
                      <i className="isoi-smart-devices" />
                      <p className="small-text">Other smart devices</p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default IOTContainer;
