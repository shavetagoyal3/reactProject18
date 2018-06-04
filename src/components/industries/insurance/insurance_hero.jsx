import React from "react";

class InsuranceHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/platforms/058903f36377b9c1f3b782718f4ccfb8aa249d08e1090964304ca9c8f5820304.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Insurance
              </span>
              Insurance Software Solutions{" "}
            </h1>
            <p className="hero__lead">
              As consumer service expectations continue rising, a branded
              insurance application can help you transform your business.
              Predict consumer needs by utilizing data and actionable analytics,
              optimize the customer experience, retain valuable policyholders,
              and identify new sales opportunities using applications built on
              our mobile platform.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default InsuranceHero;
