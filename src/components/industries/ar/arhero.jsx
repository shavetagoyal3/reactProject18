import React from "react";

class ARHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/platforms/bbb39d52a6a35c7690187427bea7ba68f77ce55a1f8ccf696a91e4a966650f22.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Construction
              </span>
              Augmented Reality in Construction{" "}
            </h1>
            <p className="hero__lead">
              Augmented reality will soon become an integral part of any
              construction process. Having joined the transformation,
              Intellectsoft is already working on several augmented reality
              solutions that will change the way architects and engineers work.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ARHero;
