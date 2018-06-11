import React from "react";

class FormWrap extends React.Component {
  render() {
    return (
      <section className="form-wrap">
        <div className="container container--flex">
          <div className="form-wrap__left">
            <h2 className="form-wrap__title">Get on our mailing list</h2>
          </div>
          <div className="form-wrap__right">
            <h3 className="form__title">It’s all about software success</h3>
            <form
              className="form"
              action="#"
              method="post"
              data-handler="/l/72342/2016-08-03/3zpv9w"
              data-type="Newsletter"
              data-url="//traccoon.intellectsoft.net/forms/intellectsoft/news"
            >
              <div className="form-group form-group--inline flex-1">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  maxLength={255}
                  placeholder="Name"
                />
              </div>
              <div className="form-group form-group--inline flex-2">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  maxLength={255}
                  placeholder="Email"
                />
              </div>
              <div className="form-group flex-3">
                <button className="form__submit">Send me updates </button>
              </div>
              <p className="form__lead flex-4">
                By providing us with your email address, you are agreeing to
                receive emails from us in the future.<br /> You will always have
                the option to opt-out at any time.
              </p>
            </form>
            <p className="js-thx">Thank you for subscribing!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default FormWrap;
