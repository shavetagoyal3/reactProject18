import React from "react";

class EventsHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/industries/b4742e3dbbf956db8d9825897c2e9860be3eb9deab3d846fb8ac05b1d5adc906.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Events
              </span>
              Applications for Event and Venue Management{" "}
            </h1>
            <p className="hero__lead">
              Begin managing your events and venues with software and mobile
              applications that excite your visitors and simplify work for your
              team. Build engaging applications using Intellectsoft’s robust
              mobile platform to create a single space that organizes
              information, helps with navigation, and sends timely schedule
              updates for your guests.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default EventsHero;
