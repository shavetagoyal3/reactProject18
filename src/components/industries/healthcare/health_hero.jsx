import React from "react";

class HealthHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/platforms/46a0dc434d47f9ba16ef3785783139daa42e85b21346fd3cd543c4a1ccdc26a3.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Healthcare
              </span>
              Empowering Healthcare Software{" "}
            </h1>
            <p className="hero__lead">
              Our mobile application platform allows hospitals and health
              centres to develop cross-platform mobile applications that create
              positive experiences for patients and employees. From scheduling
              and online consultations to customer support and business
              analytics—our platform empowers businesses.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HealthHero;
