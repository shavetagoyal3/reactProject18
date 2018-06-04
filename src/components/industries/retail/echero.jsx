import React from "react";

class ECHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/industries/29441cd8bb77ee8c140eb5be31a2acf00cd74bacdbe5bc7b5eb29acbe7a672e5.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Ecommerce & Retail
              </span>
              Disrupting Retail Applications{" "}
            </h1>
            <p className="hero__lead">
              Create new opportunities for your business and for your customers
              with the help of specialized software. Transform the shopping
              experience with an engaging mobile app or improve business
              operations with a comprehensive enterprise software suite.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ECHero;
