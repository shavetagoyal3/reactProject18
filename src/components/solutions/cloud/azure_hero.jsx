import React from "react";

class AzureHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/solutions/4e0d877f85b944dad899aeb5dbb28f597ba40bb6d6ea7f6763374a9d00f9e460.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Cloud computing
              </span>
              Shift to the Cloud With Microsoft Azure{" "}
            </h1>
            <p className="hero__lead">
              Microsoft Azure is a cloud platform that provides businesses with
              the tools they need to build a flexible, scalable, and connected
              business environment. It is used by 90% of Fortune 500 companies
              and trusted by U.S. Government institutions. Make the next big
              leap and implement Microsoft Azure in your business.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AzureHero;
