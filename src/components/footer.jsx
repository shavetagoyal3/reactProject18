import React from "react";
import FooterMenu from "./footer_menu.jsx";
import FooterCopyright from "./footer_copyright.jsx";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__flexbox">
            <FooterMenu />
            <div className="footer__about">
              <div className="footer__address">
                <h4 className="footer__heading">United States</h4>
                <div className="footer__office">
                  <span className="footer__city">Palo Alto</span>
                  <span className="footer__phone">+1 650 300 4335</span>
                  <span className="footer__street">
                    721 Colorado Avenue, Suite 101, Palo Alto, CA 94303
                  </span>
                </div>
                <div className="footer__office">
                  <span className="footer__city">New York</span>
                  <span className="footer__phone">+1 (855) TOP DEVS</span>
                  <span className="footer__street">
                    315 W 36th St., New York, NY 10018
                  </span>
                </div>
              </div>
              <div className="footer__address">
                <div className="footer__office">
                  <span className="footer__street" />
                </div>
              </div>
            </div>
          </div>
          <FooterCopyright />
        </div>
      </footer>
    );
  }
}

export default Footer;
