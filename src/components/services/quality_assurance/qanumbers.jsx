import React from "react";

class QANumbers extends React.Component {
  render() {
    return (
      <section className="numbers">
        <div className="container">
          <div className="col-4">
            <p className="numbers__item">500</p>
            <h4 className="numbers__heading">Loyal Clients</h4>
            <p className="numbers__text">
              We have a consistent client satisfaction rate and always provide
              the ideal team for your enterprise software development needs.
            </p>
          </div>
          <div className="col-4">
            <p className="numbers__item">200+</p>
            <h4 className="numbers__heading">Full-time developers</h4>
            <p className="numbers__text">
              We do not outsource. We grow in-house to maintain the highest
              levels of quality and integrity.
            </p>
          </div>
          <div className="col-4">
            <p className="numbers__item">10</p>
            <h4 className="numbers__heading">Years in operation</h4>
            <p className="numbers__text">
              We are not new kids on the block. We evolved alongside all the
              software and technology we work with.
            </p>
          </div>
          <div className="col-4">
            <p className="numbers__item">6</p>
            <h4 className="numbers__heading">Offices in 5 countries</h4>
            <p className="numbers__text">
              Always available, always ready to talk about your priorities.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default QANumbers;
