import React from "react";

class ITCSHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{ backgroundImage: `url(${require("../../../upload/images/services/43eb048b4509bc1b759669c9d25e128ff0268fa2a804d56623d691af78a6d140.jpg")})`}}

      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                IT Consulting
              </span>
              IT CONSULTING SERVICES
            </h1>
            <p className="hero__lead">
              Use the expertise and deep tech background of the best minds at
              Intellectsoft to create a comprehensive IT strategy for a digital
              and technological transformation of your organization that goes in
              line with your business objectives. Our strategic IT consulting
              will help you automate and digitalise operations, optimise the
              software portfolio, and implement the latest technologies.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ITCSHero;
