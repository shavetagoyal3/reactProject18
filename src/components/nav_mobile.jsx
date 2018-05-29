import React from "react";

class NavMobile extends React.Component {
  render() {
    return (
      <nav className="nav-mobile">
        <div className="nav-mobile__top">
          <a className="btn btn--menuLeft" href="contacts.html">
            Get in touch
          </a>{" "}
          <a id="closeBtn" href="#" className="btn-close" />
        </div>
        <div
          id="c-menu--push-left"
          className="c-menu c-menu--push-left is-active"
        >
          <ul className="c-menu__items">
            <li className="menu-item has-dropdown">
              <a href="solutions.html">Solutions</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="solutions.html">Solutions</a>
                </li>
                <li className="menu-item">
                  <a href="solutions/blockchain.html">
                    Blockchain Technologies
                  </a>
                </li>
                <li className="menu-item">
                  <a href="solutions/azure.html">Cloud Computing</a>
                </li>
                <li className="menu-item">
                  <a href="solutions/fintech.html">FinTech</a>
                </li>
                <li className="menu-item">
                  <a href="solutions/ai.html">Artificial Intelligence</a>
                </li>
                <li className="menu-item">
                  <a href="solutions/augmented-reality.html">
                    Augmented Reality
                  </a>
                </li>
                <li className="menu-item">
                  <a href="solutions/internet-of-things.html">
                    Internet of Things
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item has-dropdown">
              <a href="services.html">Services</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="services.html">Services</a>
                </li>
                <li className="menu-item">
                  <a href="services/team-extension.html">Team Extension</a>
                </li>
                <li className="menu-item">
                  <a href="services/enterprise-development.html">
                    Product Engineering
                  </a>
                </li>
                <li className="menu-item">
                  <a href="services/mobile-development.html">
                    Mobile Development
                  </a>
                </li>
                <li className="menu-item">
                  <a href="services/it-consulting-services.html">Consulting</a>
                </li>
                <li className="menu-item">
                  <a href="services/dev-ops.html">DevOps</a>
                </li>
                <li className="menu-item">
                  <a href="services/design-lab.html">UI/UX Design</a>
                </li>
                <li className="menu-item">
                  <a href="services/qa-testing.html">Quality Assurance</a>
                </li>
                <li className="menu-item">
                  <a href="services/software-maintenance-support.html">
                    Maintenance and Support
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item has-dropdown">
              <a href="platforms.html">Industries</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="platforms.html">Industries</a>
                </li>
                <li className="menu-item">
                  <a href="platforms/ar-construction.html">AR Construction</a>
                </li>
                <li className="menu-item">
                  <a href="platforms/healthcare.html">Healthcare</a>
                </li>
                <li className="menu-item">
                  <a href="platforms/insurance.html">Insurance</a>
                </li>
                <li className="menu-item">
                  <a href="platforms/ecommerce-retail.html">
                    Retail & E-Commerce
                  </a>
                </li>
                <li className="menu-item">
                  <a href="platforms/hospitality.html">Travel & Hospitality</a>
                </li>
                <li className="menu-item">
                  <a href="platforms/events.html">Events & Venues</a>
                </li>
                <li className="menu-item">
                  <a href="platforms/sports-apps.html">Sports & Teams</a>
                </li>
                <li className="menu-item">
                  <a href="platforms/music.html">Musicians & Bands</a>
                </li>
              </ul>
            </li>
            <li className="menu-item has-dropdown">
              <a href="resources.html">Resources</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="blog/index.html">Blog</a>
                </li>
                <li className="menu-item">
                  <a href="blog/news.html">News</a>
                </li>
                <li className="menu-item">
                  <a href="docs.html">Insights</a>
                </li>
              </ul>
            </li>
            <li className="menu-item has-dropdown">
              <a href="clients.html">Clients</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="clients.html">Clients</a>
                </li>
                <li className="menu-item">
                  <a href="cases.html">Client Success</a>
                </li>
              </ul>
            </li>
            <li className="menu-item has-dropdown">
              <a href="about.html">Company</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="about.html">About</a>
                </li>
                <li className="menu-item">
                  <a href="partners.html">Partners</a>
                </li>
                <li className="menu-item">
                  <a href="team.html">Team</a>
                </li>
                <li className="menu-item">
                  <a href="careers.html">Careers</a>
                </li>
              </ul>
            </li>
          </ul>{" "}
        </div>
      </nav>
    );
  }
}

export default NavMobile;
