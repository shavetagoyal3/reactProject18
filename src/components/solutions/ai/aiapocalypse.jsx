import React from "react";

class AIApocalypse extends React.Component {
  render() {
    return (
      <div className="apocalypse apocalypse--ai">
        <div className="container">
          <h2 className="apocalypse__title">
            Artificial Brainpower for the Enterprise of the Future
          </h2>
          <div className="apocalypse__list">
            <div className="apocalypse__item">
              <i className="isoi-ai-assistant apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Greater Automation</h3>
                <p className="apocalypse__description">
                  From sales to supply chain management to customer service,
                  AI-based software solutions are unmatched in precise
                  automation of any business operation.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-greater-business-security apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">
                  Greater Business Security
                </h3>
                <p className="apocalypse__description">
                  Employ AI-based technologies to protect your business
                  digitally and physically.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-greater-business-efficiency apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">
                  Greater Business Efficiency
                </h3>
                <p className="apocalypse__description">
                  Leverage AI-based software solutions to immediately derive
                  insights from your Big Data, and make fail-safe decisions at
                  every turn, improving the overall business efficiency.
                </p>
              </div>
            </div>
            <div className="apocalypse__item">
              <i className="isoi-greater-productivity apocalypse__icon" />
              <div className="apocalypse__content ">
                <h3 className="apocalypse__heading">Greater Productivity</h3>
                <p className="apocalypse__description">
                  Delegate everyday tasks like reporting to AI-based systems,
                  and increase the productivity and job satisfaction of your
                  employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AIApocalypse;
