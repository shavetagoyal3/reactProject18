import React from "react";

class StaticPage extends React.Component {
  render() {
    return (
      <header className="static-page-title">
        <div className="container">
          <h1 className="static-page-title__heading">Leadership</h1>
          <p className="static-page-title__additional-text">
            Continued success at Intellectsoft has prompted us to grow an
            international team of the most talented minds in software
            development. Meet the company’s leaders and the hard-working people
            who deliver innovative ideas to companies like yours.{" "}
          </p>
        </div>
      </header>
    );
  }
}

export default StaticPage;
