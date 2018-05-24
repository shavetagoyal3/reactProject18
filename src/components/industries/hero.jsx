import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <section
        className="hero hero--600"
        style={{
          backgroundImage: `url(${require("../../assets/5be2fa1f/img/bg-hero-platforms.jpg")})`
        }}
      >
        <div className="container">
          <div className="hero__content">
            <h1 className="title title--uppercase">
              <span className="title__preheader title__preheader--tag">
                Platforms
              </span>
              App Development Platform
            </h1>
            <p className="hero__lead">
              In 2015, Intellectsoft acquired Mobile Roadie — a leading app
              building platform, favored by the most celebrated entertainers,
              sports teams, organizations, and venues. Capitalizing on the
              product’s strengths and our decade-long development expertise,
              Intellectsoft has created a comprehensive app development platform
              to help enterprises and startups make the most of their mobile
              experience within the demanding timeframes of modern business
              environments.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
