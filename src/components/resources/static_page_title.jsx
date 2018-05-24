import React from "react";

class StaticPageTitle extends React.Component {
  render() {
    return (
      <header className="static-page-title">
        <div className="container">
          <h1 className="static-page-title__heading">Resources </h1>
          <p className="static-page-title__additional-text">
            These are exciting times. This is an exciting place. Software
            innovation is at the center of it all.{" "}
          </p>
        </div>
      </header>
    );
  }
}

export default StaticPageTitle;
