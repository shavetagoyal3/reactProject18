import React from "react";
import SectionOffers from "./section_offers.jsx";
import Cemetery from "./cemetery.jsx";
import ClientsSuccess from "./clients_success.jsx";
import ContactSection from "./contact_section.jsx";
import Blog from "./blog.jsx";
import Offices from "./offices.jsx";
import imageUrls from '../../assets/5be2fa1f/img/home-header-slider-2/slide_0.jpg';

class Home extends React.Component {
  render() {
    return (
        <div>
        <section>
          <div
            id="heroSliderNav"
            className="hero-slider hero-slider--nav owl-carousel"
          >
            <div
              className="hero-slider__item"
              style={{ backgroundImage: `url(${imageUrls})` }}>
              <div className="hero-slider__content">
                <div className="hero-slider__overlay" />
                <h1 className="title title--uppercase title--margin-top white-text">
                  Enterprise Software Development{" "}
                </h1>
                <p className="hero-slider__lead white-text lead-text">
                  Leverage our ten-year expertise to create a solid software
                  foundation for your business.{" "}
                </p>
                <a
                  href="services/enterprise-development.html"
                  className="button button--clear button--white"
                >
                  Read more <i className="isoi-angle-right" />
                </a>
              </div>
            </div>
            <div
              className="hero-slider__item"
              style={{ backgroundImage: `url(${require("../../assets/5be2fa1f/img/home-header-slider-2/slide_1.jpg")})` }} >
              <div className="hero-slider__content">
                <div className="hero-slider__overlay" />
                <h1 className="title title--uppercase title--margin-top white-text">
                  Blockchain Development{" "}
                </h1>
                <p className="hero-slider__lead white-text lead-text">
                  Blockchain consulting, private blockchains, Smart Contracts,
                  identity solutions — we offer you a full suite of blockchain
                  development services.{" "}
                </p>
                <a
                  href="solutions/blockchain.html"
                  className="button button--clear button--white"
                >
                  Read more <i className="isoi-angle-right" />
                </a>
              </div>
            </div>
            <div
              className="hero-slider__item"
              style={{ backgroundImage: `url(${require("../../assets/5be2fa1f/img/home-header-slider-2/slide_2.jpg")})` }}>
              <div className="hero-slider__content">
                <div className="hero-slider__overlay" />
                <h1 className="title title--uppercase title--margin-top white-text">
                  Custom Augmented Reality Solutions{" "}
                </h1>
                <p className="hero-slider__lead white-text lead-text">
                  Use equally practical and exciting AR solutions to elevate
                  your key operations, improve employee efficiency, and excite
                  your customers.{" "}
                </p>
                <a
                  href="solutions/augmented-reality.html"
                  className="button button--clear button--white"
                >
                  Read more <i className="isoi-angle-right" />
                </a>
              </div>
            </div>
            <div
              className="hero-slider__item"
              style={{ backgroundImage: `url(${require("../../assets/5be2fa1f/img/home-header-slider-2/slide_3.jpg")})` }}>
              <div className="hero-slider__content">
                <div className="hero-slider__overlay" />
                <h1 className="title title--uppercase title--margin-top white-text">
                  Dedicated Development Teams{" "}
                </h1>
                <p className="hero-slider__lead white-text lead-text">
                  Hire top tech talent and quickly scale your delivery capacity.
                  Our engineers have the necessary niche skills, deep expertise,
                  and are highly loyal.{" "}
                </p>
                <a
                  href="services/team-extension.html"
                  className="button button--clear button--white"
                >
                  Read more <i className="isoi-angle-right" />
                </a>
              </div>
            </div>
            <div
              className="hero-slider__item"
              style={{ backgroundImage: `url(${require("../../assets/5be2fa1f/img/home-header-slider-2/slide_4.jpg")})` }}>
              <div className="hero-slider__content">
                <div className="hero-slider__overlay" />
                <h1 className="title title--uppercase title--margin-top white-text">
                  Mobile App Development{" "}
                </h1>
                <p className="hero-slider__lead white-text lead-text">
                  Use our low-code platform and ten-year expertise in mobile app
                  development to create a solid custom app faster than ever
                  before.{" "}
                </p>
                <a
                  href="services/mobile-development.html"
                  className="button button--clear button--white"
                >
                  Read more <i className="isoi-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <SectionOffers />
        <Cemetery />  
        <ClientsSuccess />
        <ContactSection />
        <Blog />
        <Offices />
        </div>
    );
  }
}

export default Home;