import React from "react";

class ContactContainer extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="block-markdown block-markdown--contacts col-3">
          <h3>Doing business with us is easy</h3>
          <ul>
            <li>
              <ul>
                <li>
                  <h4>UNITED STATES</h4>
                </li>
                <li>
                  <strong>Palo Alto, CA</strong>
                </li>
                <li>721 Colorado Avenue, Suite 101 Palo Alto, CA USA 94303</li>
                <li>
                  <em>+1 (650) 300 4335</em>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>New York, NY</strong>
                </li>
                <li>315 W 36th St., New York, NY 10018</li>
                <li>
                  <em>+1 (855) TOP DEVS</em>
                </li>
                <li>
                  <a href="mailto:info@intellectsoft.net">
                    info@intellectsoft.net
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h4>UNITED KINGDOM</h4>
                </li>
                <li>22 Great Marlborough Street Soho, London W1F 7HU</li>
                <li>
                  <em>+44 20 3887 0078</em>
                </li>
                <li>
                  <a href="mailto:info@intellectsoft.co.uk">
                    info@intellectsoft.co.uk
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h4>NORWAY</h4>
                </li>
                <li>Bogstadveien 27B, 0355 Oslo</li>
                <li>
                  <em>+47 21 08 18 50</em>
                </li>
                <li>
                  <a href="mailto:info@intellectsoft.no">
                    info@intellectsoft.no
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h4>BELARUS</h4>
                </li>
                <li>57, Dzerzhinskogo Ave, office 14-1 Minsk, Belarus</li>
                <li>
                  <em>+375 (17) 397-89-72</em>
                </li>
                <li>
                  <a href="mailto:hr@intellectsoft.net">hr@intellectsoft.net</a>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h4>UKRAINE</h4>
                </li>
                <li>15, Leiptsyzka St. MERX II Business Center 01015 Kiev</li>
                <li>
                  <em>+380 (44) 332-24-36</em>
                </li>
                <li>
                  <a href="mailto:hr@intellectsoft.com.ua">
                    hr@intellectsoft.com.ua
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ContactContainer;
