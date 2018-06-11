import React from "react";
import { Link } from "react-router-dom";

class FooterMenu extends React.Component {
  render() {
    return (
      <ul className="footer__menu">
        <li className="has-dropdown">
          <a href="services.html">Services</a>
          <ul className="sub-menu">
            <li>
              <a href="services/staffing.html">Dedicated Team</a>
            </li>
            <li>
              <a href="services/product-strategy.html">Product Strategy</a>
            </li>
            <li>
              <a href="services/startups.html">Startup Software Development</a>
            </li>
            <li>
              <a href="services/mobile-development.html">Mobile Development</a>
            </li>
            <li>
              <a href="services/enterprise-development.html">
                Product Engineering
              </a>
            </li>
            <li>
              <a href="services/it-consulting-services.html">IT Consulting</a>
            </li>
            <li>
              <a href="services/app-developers.html">App Developers</a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="technologies.html">Technologies</a>
          <ul className="sub-menu">
            <li>
              <a href="technologies/iphone-development-services.html">
                iOS Development Services
              </a>
            </li>
            <li>
              <a href="technologies/android-application-development.html">
                Android App Development
              </a>
            </li>
            <li>
              <a href="technologies/windows-phone-development-services.html">
                Windows App Development
              </a>
            </li>
            <li>
              <a href="technologies/hybrid-development.html">
                Hybrid Software Solutions
              </a>
            </li>
            <li>
              <a href="technologies/cloud-computing-solutions.html">
                Cloud Services
              </a>
            </li>
            <li>
              <a href="technologies/html5-app-development.html">
                HTML5 Development
              </a>
            </li>
            <li>
              <a href="technologies/ipad-application-development.html">
                iPad App Development
              </a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="platforms.html">Industries</a>
          <ul className="sub-menu">
            <li>
              <a href="platforms/geolocation-navigation.html">
                Geolocation/Navigation
              </a>
            </li>
            <li>
              <a href="platforms/app-management.html">Content Management</a>
            </li>
            <li>
              <a href="platforms/notification-service.html">
                Push Notifications
              </a>
            </li>
            <li>
              <a href="platforms/social-networking.html">Social Networking</a>
            </li>
            <li>
              <a href="platforms/marketing-automation.html">
                Marketing Automation
              </a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <Link to="\about">Company</Link>
          <ul className="sub-menu">
            <li>
              <Link to="\about">About</Link>
            </li>
            <li>
              <Link to="\contacts">Contacts</Link>
            </li>
            <li>
              <Link to="\team">Team</Link>
            </li>
            <li>
              <Link to="\partners">Partners</Link>
            </li>
            <li>
              <Link to="\cases">Cases</Link>
            </li>
            <li>
              <Link to="\blog">Blog</Link>
            </li>
            <li>
              <a href="sitemap.html">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default FooterMenu;
