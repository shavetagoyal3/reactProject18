import React from "react";

class SolutionAbout extends React.Component {
  render() {
    return (
      <section
        className="bg-fluid--blured"
        style={{
          backgroundImage: `url(${require("../../assets/5be2fa1f/img/bg-home-company.jpg")})`
        }}
      >
        <div className="grid">
          <div className="blue-box">
            <div
              className="blue-box__bg"
              style={{
                backgroundImage: `url(${require("../../assets/5be2fa1f/img/bg-home-company.jpg")})`
              }}
            />
            <div className="blue-box__content">
              <h2 className="blue-box__title">About Intellectsoft</h2>
              <p className="blue-box__lead">
                Established in 2007, Intellectsoft has steadily been growing and
                earning the trust of hundreds of businesses by providing them
                with enterprise-grade software solutions and turning their ideas
                into reality with the help of our highly qualified developers.
              </p>
              <a
                className="button button--clear button--white"
                href="contacts.html"
              >
                Get in touch
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SolutionAbout;
