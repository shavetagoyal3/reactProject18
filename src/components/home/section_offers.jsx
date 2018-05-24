import React from "react";

class SectionOffers extends React.Component {
  render() {
    return (
      <section className="section-offers">
        <div id="particles" />
        <div className="container">
          <div className="offers">
          
            <div className="offers-title">
              <h2 className="title title--black">What We Offer </h2>
            </div>
            
            <div className="offers-tab">
              <h4
                id="defaultActiveTab"
                className="offers-tablinks"
                data-name="solutions"
              >
                Solutions
              </h4>
              <h4 className="offers-tablinks" data-name="services">
                Services
              </h4>
              <h4 className="offers-tablinks" data-name="industries">
                Industries
              </h4>
            </div>
            {}
            <div id="solutions" className="offers-tabcontent">
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/blockchain-technology.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">
                    Blockchain Development
                  </h3>
                  <p className="offer-content-description">
                    Introduce the highest level of security and automate your
                    operations with our blockchain solutions.
                  </p>
                  <a
                    href="solutions/blockchain.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/fin-tech.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">FinTech </h3>
                  <p className="offer-content-description">
                    Meet the demands of modern customers in speed and security
                    with scalable financial technology.{" "}
                  </p>
                  <a
                    href="solutions/fintech.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/augmented-reality.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">
                    Augmented Reality Solutions{" "}
                  </h3>
                  <p className="offer-content-description">
                    Build better prototypes, improve the user experience, and
                    lower costs with AR solutions.{" "}
                  </p>
                  <a
                    href="solutions/augmented-reality.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/cloud-computing.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">Cloud Computing </h3>
                  <p className="offer-content-description">
                    Use cloud computing solutions to create a scalable,
                    flexible, and connected enterprise environment.{" "}
                  </p>
                  <a
                    href="solutions/azure.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/artificial-intelligence.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">
                    Artificial Intelligence{" "}
                  </h3>
                  <p className="offer-content-description">
                    Custom AI-based solutions like machine and deep learning
                    will help you automate any operation.{" "}
                  </p>
                  <a
                    href="solutions/ai.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/internet-of-things.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">Internet of Things </h3>
                  <p className="offer-content-description">
                    Secure IoT solutions will let you gather Big Data, optimise
                    key processes, and improve decision-making.{" "}
                  </p>
                  <a
                    href="solutions/internet-of-things.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div id="services" className="offers-tabcontent">
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/dedicated-team.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">
                    Dedicated Development Team{" "}
                  </h3>
                  <p className="offer-content-description">
                    Hire a loyal software development team with niche skills and
                    deep expertise.{" "}
                  </p>
                  <a
                    href="services/team-extension.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/enterprise.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">
                    Enterprise Software Development{" "}
                  </h3>
                  <p className="offer-content-description">
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.{" "}
                  </p>
                  <a
                    href="services/enterprise-development.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/mobile-app-dev.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">
                    Mobile App Development{" "}
                  </h3>
                  <p className="offer-content-description">
                    Create an impactful mobile app that fits your brand and
                    industry within a shorter time frame.{" "}
                  </p>
                  <a
                    href="services/mobile-development.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/it-consulting.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">IT Consulting </h3>
                  <p className="offer-content-description">
                    Trust our top minds to eliminate workflow pain points,
                    implement new tech, and consolidate app portfolios.{" "}
                  </p>
                  <a
                    href="services/it-consulting-services.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/devops.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">DevOps </h3>
                  <p className="offer-content-description">
                    Hire our DevOps engineers to fine tune each step of your
                    delivery process and ensure high quality software.{" "}
                  </p>
                  <a
                    href="services/dev-ops.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/quality-assurance.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">QA & Testing </h3>
                  <p className="offer-content-description">
                    Turn to our experts to perform comprehensive, multi-stage
                    testing and auditing of your software.{" "}
                  </p>
                  <a
                    href="services/qa-testing.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div id="industries" className="offers-tabcontent">
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/construction.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">Construction </h3>
                  <p className="offer-content-description">
                    Advanced software solutions that take Construction into the
                    Digital Era.{" "}
                  </p>
                  <a
                    href="platforms/ar-construction.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/healthcare.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">Healthcare </h3>
                  <p className="offer-content-description">
                    Patient-friendly software that empowers healthcare industry
                    workers.{" "}
                  </p>
                  <a
                    href="platforms/healthcare.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/retail-ecomerce.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">Retail & eCommerce </h3>
                  <p className="offer-content-description">
                    Engaging and exciting software solutions for modern retail.{" "}
                  </p>
                  <a
                    href="platforms/ecommerce-retail.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/finance-insurance.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">Finance & Insurance </h3>
                  <p className="offer-content-description">
                    Tackle Big Data and improve your operations with FinTech
                    solutions.{" "}
                  </p>
                  <a
                    href="platforms/insurance.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/travel-hospitality.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">Travel & Hospitality </h3>
                  <p className="offer-content-description">
                    Extend the comfort of your resort with practical software
                    solutions.{" "}
                  </p>
                  <a
                    href="platforms/hospitality.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
              <div className="tabcontent-item">
                <img
                  className="offer-image" alt=""
                  src={require('../../assets/5be2fa1f/img/home-offers/logistics.svg')}
                />
                <div className="offer-content">
                  <h3 className="offer-content-title">Logistics </h3>
                  <p className="offer-content-description">
                    Use all the latest tech available to make your logistics run
                    like clockwork.{" "}
                  </p>
                  <a
                    href="platforms/geolocation-navigation.html"
                    className="offer-content-link-more"
                  >
                    view more<i className="isoi-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionOffers;
