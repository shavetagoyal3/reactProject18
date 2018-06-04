import React from "react";

class SportsHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload//images/industries/c67221f8712f9b4758a6d1adfe8fbc550c4e8676464a6ad34e5a3ef98d755716.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Athletes & Teams
              </span>
              Sport Software & Venue Apps{" "}
            </h1>
            <p className="hero__lead">
              Improve each and every aspect of your team, league, or training
              program with specialized software. Create a next-level fan
              engagement experience or develop specialized health and fitness
              software to elevate your game.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SportsHero;
