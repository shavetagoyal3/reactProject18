import React from "react";

class CompanyFull extends React.Component {
  render() {
    return (
      <section
        className="hero hero--full"
        style={{
          backgroundImage: `url(${require("../../assets/5be2fa1f/img/bg-about-hero.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Company
              </span>
              About Intellectsoft{" "}
            </h1>
            <p className="hero__lead">
              We began developing mobile apps in 2007 and have grown into a
              full-cycle, mobile-first software development company. Having
              helped Jaguar & Land Rover, Eurostar, Harley-Davidson, and the NHS
              develop their software, we know what defines successful software
              across all industries.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default CompanyFull;
