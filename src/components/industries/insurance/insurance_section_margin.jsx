import React from "react";

class InsuranceSectionMargin extends React.Component {
  render() {
    return (
      <section className="phone section-margin ">
        <div className="container">
          <div className="phone__content">
            <div className="phone__column">
              <h3 className="phone__title h2">Work Smarter</h3>
              <p className="phone__lead">
                Optimize your daily operations and workflow within an intuitive,
                employee-oriented dashboard. Provide insurance agents with
                omni-channel CRMs, allowing them to close deals wherever they
                are. Assign cases to agents, delegate work, and prioritize
                insurance claims within a single intuitive interface.
              </p>
              <ul className="phone__list">
                <li className="icon icon-omni-channel ">
                  <i className="content-icon isoi-omni-channel" />
                  <div className="list--text">Omni-Channel CRM</div>
                </li>
                <li className="icon icon-identification ">
                  <i className="content-icon isoi-identification" />
                  <div className="list--text">Task Delegation</div>
                </li>
                <li className="icon icon-smart-alert ">
                  <i className="content-icon isoi-smart-alert" />
                  <div className="list--text">Smart Alert & Chat</div>
                </li>
                <li className="icon icon-location-global ">
                  <i className="content-icon isoi-location-global" />
                  <div className="list--text">Events Tracing</div>
                </li>
                <li className="icon icon-chat-settings ">
                  <i className="content-icon isoi-chat-settings" />
                  <div className="list--text">Claim Auto-tracking</div>
                </li>
                <li className="icon icon-ai-assistant ">
                  <i className="content-icon isoi-ai-assistant" />
                  <div className="list--text">AI Assistant</div>
                </li>
              </ul>
            </div>
            <div className="phone__column phone__column--height">
              <div
                className="phone__image"
                style={{
                  backgroundImage:
                    `url(${require("../../../assets/5be2fa1f/img/insurance-case-3.png")})`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InsuranceSectionMargin;
