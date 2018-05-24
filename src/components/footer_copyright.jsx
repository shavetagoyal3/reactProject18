import React from "react";
import SocialBoxList from "./social_box_list.jsx";

class FooterCopyright extends React.Component {
  render() {
    return (
      <div className="footer__copyright">
        <div className="footer__copy-container">
          <span className="footer__year">© 2018 Intellectsoft US</span>
          <a className="footer__privacy" href="privacy-policy.html">
            Privacy Policy
          </a>{" "}
        </div>
        <div className="footer__social social-box">
          <SocialBoxList />
        </div>{" "}
      </div>
    );
  }
}

export default FooterCopyright;
