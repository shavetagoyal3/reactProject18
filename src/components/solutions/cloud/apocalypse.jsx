import React from "react";

class Apocalypse extends React.Component {
  render() {
    return (
      <div className="apocalypse apocalypse--azure">
        <div className="container">
          {}
          {}
          <h2 className="apocalypse__title">
            Transform Your Business With Cloud Technology
          </h2>
          <div className="apocalypse__list">
            <div className="apocalypse__item">
              <i className="isoi-big-data apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Rich Analytics</h3>
                <p className="apocalypse__description">
                  Cloud based computing can be used to analyze and leverage your
                  existing business intelligence.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-flexibility apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Flexibility</h3>
                <p className="apocalypse__description">
                  Create an environment that allows for quick, safe changes to
                  your software.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-scalability apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Scalability</h3>
                <p className="apocalypse__description">
                  Build solutions that will grow in tow with your business,
                  equally reliable for hundreds or millions of users.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-iot-chip apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Internet of Things</h3>
                <p className="apocalypse__description">
                  Streamline your business operations with the help of
                  interconnected devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apocalypse;
