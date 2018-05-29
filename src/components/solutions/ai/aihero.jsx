import React from "react";

class AIHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/solutions/ad3ca0cc91b86480874c71e1a244e99179e95a8debd8d1a4fd037bd9d5b729f8.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Artificial Intelligence
              </span>
              Enterprise Artificial Intelligence Software{" "}
            </h1>
            <p className="hero__lead">
              Use the immense computational capabilities of AI-based software to
              dramatically improve the bottom line of your business. Artificial
              Intelligence software solutions like machine learning models and
              artificial intelligence apps will help you automate the operations
              of any department, ensure fail-safe decision making with
              predictive models that analyse data and propose spot-on
              information, safeguard your business physically and digitally, and
              significantly increase the productivity of your employees by
              working alongside them.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AIHero;
