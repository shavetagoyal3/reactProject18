import React from "react";

class TEHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/services/aac7add829a3c35cc5ee68d8b253b494c9d9cc4df1085e25aa35906d88592b3d.jpg")})`}}
        
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Team Extension
              </span>
              DEDICATED TEAMS AND IT OUTSOURCING{" "}
            </h1>
            <p className="hero__lead">
              Cannot hire the right local tech talent on time? Unhappy with high
              attrition rate on your in-house team? Scale your delivery capacity
              with Team Extension. Over the past decade, our customers succeeded
              by leveraging Intellectsoft’s process of building, motivating, and
              managing.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default TEHero;
