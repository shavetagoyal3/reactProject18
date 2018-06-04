import React from "react";

class MusicHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/platforms/879fb7e4ff4876579d8228885eb3e7f1e0627b25fc392865420e393834b9e514.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Musicians & Bands
              </span>
              Fan Engagement Platform for Artists and Musicians{" "}
            </h1>
            <p className="hero__lead">
              Intellectsoft provides artists and musicians with a robust mobile
              platform, allowing them to build mobile applications that will
              engage, manage, and monetize their fans.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default MusicHero;
