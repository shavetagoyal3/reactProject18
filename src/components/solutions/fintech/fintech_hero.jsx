import React from "react";

class FintechHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/solutions/cc52675cbc75431829df7c16920b7a86025e936cedd45f0bfcb783c093eb33e8.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Fintech
              </span>
              FinTech & Blockchain Solutions{" "}
            </h1>
            <p className="hero__lead">
              Both customers and employees of financial companies expect to be
              able to leverage the latest technological advancements to make
              their daily operations easier. Intellectsoft specializes in
              creating software solutions that make this possible on any scale.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default FintechHero;
