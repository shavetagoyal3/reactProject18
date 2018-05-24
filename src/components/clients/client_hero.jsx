import React from "react";

class ClientHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage: `url(${require("../../assets/5be2fa1f/img/bg-hero-clients.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Clients
              </span>
              Solid Code.<br />Dedicated Developers.<br />Real Results.{" "}
            </h1>
            <p className="hero__lead">
              Successful achievement of your company’s goals will require
              software solutions that are tailor made for your business needs.
              Intellectsoft was founded to help businesses imagine, plan, and
              develop these software solutions.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientHero;
