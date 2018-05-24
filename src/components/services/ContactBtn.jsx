import React from "react";

class ContactBtn extends React.Component {
  render() {
    return (
      <section className="contact-btn">
        <div className="container container--flex">
          <div className="box-left">
            <h3 className="contact-btn__title">
              Ready to make some software magic?<span>
                The first step is connecting.
              </span>
            </h3>
            <p className="contact-btn__lead">
              Your software vision is about to be realized.
            </p>
          </div>
          <div className="box-right">
            <a href="#form-contacts" className="btn smooth-scroll">
              Contact our team
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactBtn;
