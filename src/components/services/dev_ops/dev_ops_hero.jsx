import React from "react";

class DevOpsHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/services/dfcfd4a1cf1d0dbab56ef6f54f0f27b24114a71b98943161775118949312dd4b.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                DevOps
              </span>
              Impactful DevOps{" "}
            </h1>
            <p className="hero__lead">
              Need to ensure fast, continuous delivery and a consistently high
              level of software quality? An approach to software that
              establishes close collaboration between software engineers and IT
              operations employees, DevOps will help you achieve this by
              automating and optimising your IT processes. Our expert DevOps
              engineers will help you attune the delivery, deployment,
              development, security, and support of any high-load, fail-safe
              system with microservices architecture — so your business strategy
              can always rely on high-quality software.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default DevOpsHero;
