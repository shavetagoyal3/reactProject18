import React from "react";

class HospitalityHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/platforms/896281a0d4982d5273cfde166336164327d6a2a7574e9ed5916d12dc9bafd245.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Travel & Hospitality
              </span>
              Apps for Hotels and Casinos{" "}
            </h1>
            <p className="hero__lead">
              Create an accompanying app to make your guests’ stay even more
              comfortable. Use the application to keep your guests informed on
              latest news, provide booking information, run a tour of your
              rooms, and introduce your staff.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HospitalityHero;
