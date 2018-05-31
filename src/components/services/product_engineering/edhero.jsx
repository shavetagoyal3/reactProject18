import React from "react";

class EDHero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/services/0a5156e7b3b8bda2d9c0ee37cf1161602e74ea8bf8305f0ced5d70033b0df6ca.jpg")})`}}
        
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Product Engineering
              </span>
              Enterprise Software Development{" "}
            </h1>
            <p className="hero__lead">
              Need a solid software foundation for your business? Uncoordinated
              mobile apps and software stress out your employees and impede your
              productivity? Leverage our decade-long expertise in enterprise
              software development, API integration, modernising legacy systems,
              and consolidating app portfolios.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default EDHero;
