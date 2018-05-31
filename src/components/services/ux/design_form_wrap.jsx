import React from "react";

class DesignFormWrap extends React.Component {
  render() {
    return (
      <section className="form-wrap">
        <div className="container container--flex">
          <div className="form-wrap__left">
            <h2 className="form-wrap__title">Download Our eBook</h2>
          </div>
          <div className="form-wrap__right">
            <h3 className="form__title">
              Get Mobile or Get Lost: The Insider`s Guide To Mobile App
              Development
            </h3>
            <form
              className="form"
              action="#"
              method="post"
              data-handler="/l/72342/2016-01-13/2lc9ld"
              data-type="Ebook"
              data-url="//traccoon.intellectsoft.net/forms/intellectsoft/ebook"
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
                <button className="form__submit">Send me the ebook </button>
              </div>
              <p className="form__lead flex-4">
                By providing us with your email address, you are agreeing to
                receive emails from us in the future. You will always have the
                option to opt-out at any time.
              </p>
            </form>
            <p className="js-thx">
              Thanks! Check your inbox, as you'll be receiving an email from us
              soon with a link to access the eBook!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default DesignFormWrap;
