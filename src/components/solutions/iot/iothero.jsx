import React from "react";

class IOTHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/solutions/e8f947237a9874da1c3d2dac0dd39763d1c71a035b27ce4a92445581c383269a.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Internet of Things
              </span>
              Enterprise Internet of Things{" "}
            </h1>
            <p className="hero__lead">
              Always keep abreast of your business operations and optimise them
              with secure Internet of Things solutions. Use IoT platforms with
              sensors and devices to monitor measurements in your operations and
              gather Big Data. Optimise your logistics with stock monitoring and
              the in-store experience with smart shelving. All the
              interconnected smart devices in an IoT system will constantly
              gather data in real time, providing you with timely insights that
              will propel the progress of your enterprise forward.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default IOTHero;
