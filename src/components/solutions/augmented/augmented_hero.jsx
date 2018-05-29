import React from "react";

class AugmentedHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/solutions/12d372bef6cabcb12d395fbb00a7e0317de576f78c8f9c678ad296689b99500c.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Augmented Reality
              </span>
              Custom Augmented Reality Software{" "}
            </h1>
            <p className="hero__lead">
              Futuristic but practical in use, augmented reality adds a new
              digital dimension to your business. Use AR for pitch-perfect
              prototyping without the usual costs. Surprise your customers in
              retail with AR installations in your customer journeys. Augmented
              reality is the next step in the digital evolution that allows your
              enterprise to do more than it ever could and spend less
              simultaneously.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AugmentedHero;
