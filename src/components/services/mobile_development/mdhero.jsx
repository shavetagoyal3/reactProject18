import React from "react";

class MDHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/services/4b09dc7925fa05155f56a73272ce5a93c55978643d2a3e14798d119f3b8b1357.jpg")})`}}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Custom App Development
              </span>
              Impactful Mobile App Development Services{" "}
            </h1>
            <p className="hero__lead">
              Going mobile will help your business streamline operations, bring
              value to the demanding modern customers, and help you tackle Big
              Data. Whether it is your first app or fifth, our decade-long
              expertise in mobile app development will help you succeed with
              your mobile strategy.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default MDHero;
