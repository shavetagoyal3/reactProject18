import React from "react";
import Rankingform from "./Rankingform";
import FormContacts from "./FormContacts";

class TellUs extends React.Component {
  render() {
    return (
      <section
        id="contact-section"
        className="form-wrap form-wrap--contact section"
      >
        <div className="container">
          <div className="contact-section">
            <div className="contact-about-wrap">
              <h2 className="contact-about-header">
                Tell us about your project
              </h2>
              <div className="contact-about-stats">
                <div className="stat-item">
                  <div className="stat-num">10</div>
                  <span className="stat-desc">Years in operation</span>
                </div>
                <div className="stat-item">
                  <div className="stat-num">500</div>
                  <span className="stat-desc">Loyal Clients</span>
                </div>
                <div className="stat-item">
                  <div className="stat-num">6</div>
                  <span className="stat-desc">Offices globally</span>
                </div>
              </div>
              <Rankingform />
            </div>
            <FormContacts />
          </div>
        </div>
      </section>
    );
  }
}

export default TellUs;
