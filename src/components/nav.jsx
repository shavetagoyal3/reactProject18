import React from "react";
import SubMenu from "./sub_menu.jsx";
import { Link } from "react-router-dom";


class Nav extends React.Component {
  render() {
    return (
      <nav className="nav ">
        <div className="container">
          <div className="nav__logo">
            <Link className="logo logo-white" to="/" />
          </div> 
          <div className="nav__wrapper">
            <ul className="nav__list">
              <li className="menu-item has-dropdown">
                <Link to="/solutions">Solutions</Link>
                <SubMenu />
              </li>
              <li className="menu-item has-dropdown">
              <Link to="/services">Services</Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link to="/services/team-extension">Team Extension</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/services/enterprise-development">
                      Product Engineering
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/services/mobile-development">
                      Mobile Development
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/services/it-consulting-services">
                      Consulting
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/services/dev-ops">DevOps</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/services/design-lab">UI/UX Design</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/services/qa-testing">Quality Assurance</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/services/software-maintenance-support">
                      Maintenance and Support
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item has-dropdown">
                <Link to="/platforms">Industries</Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link to="/platforms/ar-construction">AR Construction</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/platforms/healthcare">Healthcare</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/platforms/insurance">Insurance</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/platforms/ecommerce-retail">
                      Retail & E-Commerce
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/platforms/hospitality">
                      Travel & Hospitality
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/platforms/events">Events & Venues</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/platforms/sports-apps">Sports & Teams</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/platforms/music">Musicians & Bands</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item has-dropdown">
                <Link to="/resources">Resources</Link>
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
                <Link to="/clients">Clients</Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="cases.html">Client Success</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item has-dropdown">
                <Link to="/company">Company</Link>
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
          <div className="nav__btn">
            <Link className="get-touch btn" to="/contacts">
              Get in touch
            </Link>
            <a
              id="c-button--push-left"
              href="#"
              className="sandwich menu-btn"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;