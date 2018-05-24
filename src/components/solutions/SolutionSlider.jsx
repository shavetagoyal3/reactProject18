import React from "react";

class SolutionSlider extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
        backgroundImage: `url(${require("../../assets/5be2fa1f/img/bg-solution-hero.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                SOLUTIONS
              </span>
              SOFTWARE SOLUTION DEVELOPMENT
            </h1>
            <p className="hero__lead">
              Every business requires a unique approach to software, demanding
              solutions that are catered to its particular business objectives
              and corporate organizational structure. Intellectsoft provides
              software development services to organizations of any size,
              leveraging the latest developments in tech to bring your business
              the software it needs to succeed.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SolutionSlider;
