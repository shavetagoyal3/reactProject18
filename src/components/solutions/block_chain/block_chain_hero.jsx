import React from "react";

class BlockChainHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/solutions/13e180a4f34c5fce8f251b3e9d09f0d8cd7b3077ec68b32262a3728fc7e40780.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content hero__content--blockchain">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Blockchain Technologies
              </span>
              BLOCKCHAIN CONSULTING & DEVELOPMENT{" "}
            </h1>
            <p className="hero__lead">
              Intellectsoft Blockchain Lab developers deliver enterprise-grade
              blockchain solutions, consultancy, and custom blockchain
              development services. Our blockchain experts will help you bring a
              high level of security and mobility to your enterprise by
              integrating the latest distributed ledger technologies, identity
              solutions, and smart contracts.
            </p>
          </div>
          <div className="clutch" />
        </div>
      </section>
    );
  }
}

export default BlockChainHero;
