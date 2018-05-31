import React from "react";

class ITCSContent extends React.Component {
  render() {
    return (
      <section className="content">
        <section className="cemetery">
          <div className="container">
            <div className="cemetery__title it-consulting">
              <h2>Success stories</h2>
              <p>
                Fortune 500 companies and world-class brands have leveraged our
                IT consulting services to improve their digital strategies and
                create comprehensive product roadmaps.
              </p> 
            </div>
            <div id="cemetery" className="owl-carousel owl-theme">
              <div className="item">
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/land-rover.svg")})`
                  }}
                />
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/harley-davidson.svg")})`
                  }}
                />
              </div>
              <div className="item">
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/universal.svg")})`
                  }}
                />
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/nestle.svg")})`
                  }}
                />
              </div>
              <div className="item">
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/nhs.svg")})`
                  }}
                />
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/clinique.svg")})`
                  }}
                />
              </div>
              <div className="item">
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/guinness.svg")})`
                  }}
                />
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/audi.svg")})`
                  }}
                />
              </div>
              <div className="item">
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/bombardier.svg")})`
                  }}
                />
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/eurostar.svg")})`
                  }}
                />
              </div>
              <div className="item">
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/ernst-young.svg")})`
                  }}
                />
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/giant.svg")})`
                  }}
                />
              </div>
              <div className="item">
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/jaguar-talk.svg")})`
                  }}
                />
                <div
                  className="cemetery__image"
                  style={{
                    backgroundImage:
                      `url(${require("../../../assets/5be2fa1f/img/clients-logo/hoosbaa.svg")})`
                  }}
                />
              </div>
            </div>
            <div className="column column--flex-center p-top-40 pb-20">
              <a
                href="#form-contacts"
                className="button button--clear button--blue"
              >
                Talk to our team<i className="isoi-angle-right" />
              </a>
            </div>
          </div>
        </section>
        <section className="service-why">
          <h2 className="service-why__title service-why__title--team-extension">
            OUR IT CONSULTING SERVICES
          </h2>
          <p className="service-why__description">
            We offer IT consulting services that will help you improve your
            software architecture, create a tech-driven digital strategy, and
            improve operations by optimising your software portfolio. Our
            software engineers will finish your digital transformation journey
            through careful planning and effective execution of the outlined IT
            strategy.
          </p>
          <section className="service-why__points">
            <div
              className="service-why__point-block"
              style={{
                backgroundImage:
                  `url(${require("../../../assets/5be2fa1f/img/services/it-consulting/enterprise_mini.jpg")})`
              }}
            >
              <div className="service-why__mask" />
              <h3 className="service-why__point-title">
                Enterprise Architecture Advisory
              </h3>
              <div className="service-why__point-lead-content">
                <p className="service-why__point-lead">
                  Our Enterprise Architecture experts can help you make the
                  transition from outdated and ineffective IT delivery systems
                  and architectures to a cloud-based infrastructure that
                  streamlines delivery and allows for implementation of new
                  technologies into your software strategy.
                </p>
              </div>
            </div>
            <div
              className="service-why__point-block"
              style={{
                backgroundImage:
                  `url(${require("../../../assets/5be2fa1f/img/services/it-consulting/it-strategy_mini.jpg")})`
              }}
            >
              <div className="service-why__mask" />
              <h3 className="service-why__point-title">
                IT Strategy Consulting & New Tech
              </h3>
              <div className="service-why__point-lead-content">
                <p className="service-why__point-lead">
                  Today, you need to ensure the consistent delivery of
                  high-quality IT products and services for your enterprise
                  workflow and your customers. You also need to implement new
                  technologies to stay competitive and meet the demands of
                  modern users. Our IT solutions consulting will help your
                  strike the balance between these two objectives, ensuring they
                  don’t conflict between one another.
                </p>
              </div>
            </div>
            <div
              className="service-why__point-block"
              style={{
                backgroundImage:
                  `url(${require("../../../assets/5be2fa1f/img/services/it-consulting/software_mini.jpg")})`
              }}
            >
              <div className="service-why__mask" />
              <h3 className="service-why__point-title">
                Software Portfolio Consulting
              </h3>
              <div className="service-why__point-lead-content">
                <p className="service-why__point-lead">
                  Our IT consulting advisors will conduct a deep analysis of how
                  your business and employees use your existing enterprise
                  software, as well as of your enterprise mobile strategy. Then,
                  they will provide suggestions for the required changes, new
                  developments, and integration of third-party solutions to
                  remove the existing roadblocks.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="service-cta service-cta--team-extension">
          <div className="service-cta__text-area service-cta__text-area--team-extension">
            <h2 className="service-cta__white">
              Current state of IT does not align with your business strategy?
              Request our IT consulting services now.
            </h2>
          </div>
          <a
            className="button--white-green button-vantage-talk"
            href="../index.html#form-contacts"
          >
            Talk to us
          </a>{" "}
        </section>
        <section className="service-dev-team">
          <div className="container">
            <h2 className="dev-team__title">Our IT Consulting Process</h2>
            <p className="dev-team__description">
              For more than 10 years now Intellectsoft has been helping
              organizations of different scale and structure to improve and
              modernise their IT strategies. Some of our IT experts have worked
              in the industry for over fifteen years. This has allowed us to
              craft an effective approach to IT consulting that enables us to
              deliver maximum benefit in the shortest time.
            </p>
            <div className="dev-team__steps">
              <div className="step__dotted-line">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/line-dops-first.svg')} />
              </div>
              <div className="step__dotted-line">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/line-dops-second.svg')} />
              </div>
              <div className="step__dotted-line">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/line-dops-third.svg')} />
              </div>
            </div>
            <div className="dev-team__row">
              <div className="col col-3">
                <header className="col-header">
                  <div className="header-title" data-id-animation={0}>
                    Analysis
                  </div>
                </header>
                <footer className="col-footer">
                  <p>
                    Our IT consulting advisors study your existing software
                    solutions and the ways in which your employees use them,
                    identifying problems in workflows and automation.
                  </p>
                </footer>
              </div>
              <div className="col col-3">
                <header className="col-header">
                  <div className="header-title" data-id-animation={14}>
                    Strategy
                  </div>
                </header>
                <footer className="col-footer">
                  <p>
                    The advisors design a roadmap and strategy that will help
                    your business leverage the latest technologies and
                    de-clutter your software infrastructure. Then, they set
                    software and employee KPIs.
                  </p>
                </footer>
              </div>
              <div className="col col-3">
                <header className="col-header">
                  <div className="header-title" data-id-animation={28}>
                    Performance
                  </div>
                </header>
                <footer className="col-footer">
                  <p>
                    Impactful IT consulting services rely on collaboration
                    between the client and the IT consulting company. Our
                    experts will closely analyse your workflows, tracking the
                    performance to discover the pain points. Our software
                    engineers will then eliminate the impeding elements.
                  </p>
                </footer>
              </div>
              <div className="col col-3">
                <header className="col-header">
                  <div className="header-title" data-id-animation={42}>
                    Improvements
                  </div>
                </header>
                <footer className="col-footer">
                  <p>
                    After completing the initially set goals, our IT consulting
                    advisors and software engineers recommend steps for future
                    improvements, as well as assist with implementing them.
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </section>
        <section className="service-cta service-cta--it-consulting">
          <div className="service-cta__text-area service-cta__text-area--it-consulting">
            <h3>Get started</h3>
            <p className="service-cta__white">
              Eliminate the pain points in your IT operations by using our
              decade-long expertise.
            </p>
            <a className="get-touch btn" href="../index.html#form-contacts">
              Talk to us
            </a>{" "}
          </div>
        </section>
        <section className="latest-teach">
          <div className="container">
            <h2 className="teach-title">
              IT STRATEGY CONSULTING. THE LATEST TECH
            </h2>
            <p className="teach-description">
              We consistently keep track of emerging technologies to deliver
              advanced software solutions. Our IT strategy consulting will help
              you choose the right technologies for your business and industry,
              map out the implementation strategy, as well as help you implement
              them.
            </p>
            <ul className="teach-items">
              <li className="teach-item active">
                <div className="preview">
                  <div className="teach-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={72}
                      height={68}
                      viewBox="0 0 72 68"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          stroke="#1476F2"
                          d="M42.087 60.86c0 3.391-2.725 6.14-6.087 6.14-3.362 0-6.087-2.749-6.087-6.14 0-3.39 2.725-6.14 6.087-6.14 3.362 0 6.087 2.75 6.087 6.14zM42.087 30.163c0 3.39-2.725 6.14-6.087 6.14-3.362 0-6.087-2.75-6.087-6.14 0-3.39 2.725-6.14 6.087-6.14 3.362 0 6.087 2.75 6.087 6.14z"
                        />
                        <path
                          stroke="#505050"
                          d="M29.913 7.14c0 3.39-2.725 6.14-6.087 6.14-3.361 0-6.087-2.75-6.087-6.14 0-3.391 2.726-6.14 6.087-6.14 3.362 0 6.087 2.749 6.087 6.14z"
                        />
                        <path stroke="#1476F2" d="M36 51.651V36.302" />
                        <path stroke="#505050" d="M31.435 20.953L26.87 13.28" />
                        <path
                          stroke="#1476F2"
                          d="M46.652 40.907c0 3.39 2.726 6.14 6.087 6.14 3.362 0 6.087-2.75 6.087-6.14 0-3.39-2.725-6.14-6.087-6.14-3.361 0-6.087 2.75-6.087 6.14z"
                        />
                        <path
                          stroke="#505050"
                          d="M42.087 7.14c0 3.39 2.725 6.14 6.087 6.14 3.361 0 6.087-2.75 6.087-6.14 0-3.391-2.726-6.14-6.087-6.14-3.362 0-6.087 2.749-6.087 6.14zM58.826 31.698l3.044-4.605"
                        />
                        <path stroke="#1476F2" d="M43.609 53.186l5.37-7.674" />
                        <path
                          stroke="#505050"
                          d="M71 20.953c0 3.391-2.725 6.14-6.087 6.14-3.361 0-6.087-2.749-6.087-6.14 0-3.39 2.726-6.139 6.087-6.139 3.362 0 6.087 2.749 6.087 6.14z"
                        />
                        <path
                          stroke="#1476F2"
                          d="M25.348 40.907c0 3.39-2.726 6.14-6.087 6.14-3.362 0-6.087-2.75-6.087-6.14 0-3.39 2.725-6.14 6.087-6.14 3.361 0 6.087 2.75 6.087 6.14z"
                        />
                        <path
                          stroke="#505050"
                          d="M13.174 31.698l-3.044-4.605"
                        />
                        <path stroke="#1476F2" d="M28.391 53.186l-5.37-7.674" />
                        <path
                          stroke="#505050"
                          d="M1 20.953c0 3.391 2.725 6.14 6.087 6.14 3.361 0 6.087-2.749 6.087-6.14 0-3.39-2.726-6.139-6.087-6.139-3.362 0-6.087 2.749-6.087 6.14zM40.565 20.953l4.565-7.674"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="item-title">Blockchain technology</h3>
                </div>
                <div className="more-info">
                  <h3 className="item-title">Blockchain technology</h3>
                  <p className="item-description">
                    Leverage the distributed ledger technology to make your
                    business more secure and transparent, as well as automate
                    your operations with Smart Contracts.
                  </p>
                </div>
              </li>
              <li className="teach-item">
                <div className="preview">
                  <div className="teach-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={59}
                      height={71}
                      viewBox="0 0 59 71"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          stroke="#505050"
                          d="M50.878 20.362C50.978 7.278 42.378 1 29.926 1 17.472 1 8.873 7.278 8.973 20.362h41.905z"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M54.93 45.02l-15.09 3.64c-1.59 0-3.151-.431-4.516-1.246l-2.319-1.383a6.012 6.012 0 0 0-6.16 0l-2.318 1.383a8.804 8.804 0 0 1-4.515 1.245l-15.09-3.64a4.473 4.473 0 0 1-3.432-4.341V24.83c0-2.468 2.01-4.468 4.49-4.468H53.87c2.48 0 4.49 2 4.49 4.468v15.848a4.471 4.471 0 0 1-3.432 4.341z"
                        />
                        <path
                          stroke="#505050"
                          d="M49.382 50.149v1.49c0 3.88-1.693 5.893-4.626 8.45-2.105 1.835-4.61 3.702-6.837 5.327a13.567 13.567 0 0 1-15.987 0c-2.227-1.625-4.732-3.492-6.836-5.327-2.935-2.557-4.626-4.57-4.626-8.45v-1.49M14.96 60.574V71M44.892 60.574V71"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M25.436 24.83h8.98M5.98 24.83v13.404M53.871 24.83v13.404"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="item-title">Augmented Reality</h3>
                </div>
                <div className="more-info">
                  <h3 className="item-title">Augmented Reality</h3>
                  <p className="item-description">
                    Use the practical promise of AR to transform key operations
                    and become more efficient.
                  </p>
                </div>
              </li>
              <li className="teach-item">
                <div className="preview">
                  <div className="teach-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={67}
                      height={72}
                      viewBox="0 0 67 72"
                    >
                      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
                        <path
                          stroke="#323232"
                          d="M35.92 10.612c0-3.191.281-9.612-7.944-9.612-6.553 0-12.511 7.059-12.71 11.214-4.94.663-9.634 5.532-8.983 11.75-4.696 2.32-8.102 14.713-1.974 20.59-1.114 5.055 2.313 16.634 12.546 15.721 2.491 13.5 19.065 13.097 19.065 3.204v-8.01M26.387 21.826c-5.778 0-11.12-.908-11.12-9.612"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M15.83 32.844c2.676 1.765 7.204 1.067 9.635-1.51 1.795-1.903 3.71-4.92 5.689-4.701h25.42M27.976 55.737c1.168-2.756 3.972-3.472 7.944-3.472h20.654"
                        />
                        <path
                          stroke="#323232"
                          d="M19.172 51.21c-2.663-.421-5.013-2.952-5.013-5.054M16.855 60.275c0-6.16 3.465-14.118 12.341-14.118"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M10.818 28.077c2.768 0 5.013 1.976 5.013 4.766 0 2.202-1.395 4.361-3.341 5.055M45.453 13.816H35.92c-4.32 0-8.57-.665-10.065-4.393"
                        />
                        <path
                          stroke="#323232"
                          d="M35.92 17.02v9.613M35.92 31.439V49.06"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M35.92 39.449h9.533M39.098 65.081h6.355M66.106 26.633c0 2.654-2.133 4.806-4.766 4.806s-4.766-2.152-4.766-4.806c0-2.655 2.133-4.807 4.766-4.807s4.766 2.152 4.766 4.807zM54.985 13.816c0 2.655-2.134 4.806-4.766 4.806-2.633 0-4.766-2.151-4.766-4.806 0-2.654 2.133-4.806 4.766-4.806 2.632 0 4.766 2.152 4.766 4.806zM54.985 39.449c0 2.654-2.134 4.806-4.766 4.806-2.633 0-4.766-2.152-4.766-4.806 0-2.655 2.133-4.806 4.766-4.806 2.632 0 4.766 2.151 4.766 4.806zM54.985 65.081c0 2.655-2.134 4.806-4.766 4.806-2.633 0-4.766-2.151-4.766-4.806 0-2.654 2.133-4.806 4.766-4.806 2.632 0 4.766 2.152 4.766 4.806zM66.106 52.265c0 2.655-2.133 4.806-4.766 4.806s-4.766-2.151-4.766-4.806c0-2.654 2.133-4.806 4.766-4.806s4.766 2.152 4.766 4.806z"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="item-title">Artificial Intelligence</h3>
                </div>
                <div className="more-info">
                  <h3 className="item-title">Artificial Intelligence</h3>
                  <p className="item-description">
                    Use machine and deep learning algorithms to tackle your Big
                    Data, and get valuable insights into your operations. Create
                    AI-based predictive models for fail-safe decision making.
                  </p>
                </div>
              </li>
              <li className="teach-item">
                <div className="preview">
                  <div className="teach-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={72}
                      height={72}
                      viewBox="0 0 72 72"
                    >
                      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
                        <path
                          stroke="#323232"
                          d="M40.07 10.767v-8.14H27.047v7.366a25.883 25.883 0 0 0-6.7 2.774L15.14 7.559l-9.21 9.209 5.209 5.208a25.883 25.883 0 0 0-2.774 6.698H1v13.024h7.365a25.883 25.883 0 0 0 2.774 6.699L5.93 53.604l9.209 9.21 5.208-5.208a25.883 25.883 0 0 0 6.699 2.774v7.364H40.07v-8.14"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M43.326 17.28h1.627l8.14-8.14M53.093 62.86l-9.767-9.767h-9.768c-9.89 0-17.907-8.017-17.907-17.907s8.018-17.907 17.907-17.907"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M35.186 43.326h-1.628a8.14 8.14 0 0 1 0-16.28h13.023l6.512-6.511h8.14M61.233 51.465H54.72l-8.14-8.14h-1.628M61.233 5.884a4.883 4.883 0 1 1-9.767 0 4.883 4.883 0 0 1 9.767 0z"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M71 20.535a4.883 4.883 0 1 1-9.767 0 4.883 4.883 0 0 1 9.767 0zM71 35.186a4.883 4.883 0 1 1-9.767 0 4.883 4.883 0 0 1 9.767 0zM71 51.465a4.883 4.883 0 1 1-9.767 0 4.883 4.883 0 0 1 9.767 0zM61.233 66.116a4.883 4.883 0 1 1-9.767 0 4.883 4.883 0 0 1 9.767 0zM44.953 35.186h14.652M31.93 35.186h3.256M38.442 35.186h3.256M38.442 43.326h3.256M36.814 17.28h3.256"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="item-title">Internet of Things</h3>
                </div>
                <div className="more-info">
                  <h3 className="item-title">Internet of Things</h3>
                  <p className="item-description">
                    Use secure IoT solutions to monitor your operations,
                    optimise them, and introduce high efficiency. Gain more
                    insights from the Big Data gathered by IoT devices.
                  </p>
                </div>
              </li>
              <li className="teach-item">
                <div className="preview">
                  <div className="teach-icon">
                    <svg
                      width="72px"
                      height="63px"
                      viewBox="0 0 72 63"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                        transform="translate(-797.000000, -2705.000000)"
                      >
                        <g transform="translate(0.000000, 2300.000000)">
                          <g transform="translate(798.000000, 406.000000)">
                            <path
                              d="M15.2175435,41.0869565 L10.6523261,41.0869565 C4.76928261,41.0869565 0.000152173913,36.3163043 0.000152173913,30.4347826 C0.000152173913,24.8286957 4.33406522,20.2436957 9.8321087,19.8236957 C9.37102174,18.3704348 9.11993478,16.8258696 9.11993478,15.2204348 C9.11993478,6.81434783 15.9342826,0 24.3388478,0 C30.9842826,0 36.6208043,4.26695652 38.6949348,10.2047826 C40.5621087,8.59021739 42.9908043,7.60717391 45.6523261,7.60717391 C51.5353696,7.60717391 56.3045,12.3763043 56.3045,18.2593478 C56.3045,18.9547826 56.2329783,19.6304348 56.1066739,20.2878261 C57.1292826,19.9606522 58.2173261,19.7826087 59.3479783,19.7826087 C65.2310217,19.7826087 70.0001522,24.5517391 70.0001522,30.4347826 C70.0001522,36.3178261 65.2310217,41.0869565 59.3479783,41.0869565 L53.2610217,41.0869565"
                              stroke="#323232"
                            />
                            <path
                              d="M45.6523261,60.8695652 L22.8262391,60.8695652 C20.3047174,60.8695652 18.2610217,58.8258696 18.2610217,56.3043478 L18.2610217,54.7826087 C18.2610217,52.261087 20.3047174,50.2173913 22.8262391,50.2173913 L45.6523261,50.2173913 C48.1738478,50.2173913 50.2175435,52.261087 50.2175435,54.7826087 L50.2175435,56.3043478 C50.2175435,58.8258696 48.1738478,60.8695652 45.6523261,60.8695652 Z M45.6523261,50.2173913 L22.8262391,50.2173913 C20.3047174,50.2173913 18.2610217,48.1736957 18.2610217,45.6521739 L18.2610217,44.1304348 C18.2610217,41.608913 20.3047174,39.5652174 22.8262391,39.5652174 L45.6523261,39.5652174 C48.1738478,39.5652174 50.2175435,41.608913 50.2175435,44.1304348 L50.2175435,45.6521739 C50.2175435,48.1736957 48.1738478,50.2173913 45.6523261,50.2173913 Z M45.6523261,39.5652174 L22.8262391,39.5652174 C20.3047174,39.5652174 18.2610217,37.5215217 18.2610217,35 L18.2610217,33.4782609 C18.2610217,30.9567391 20.3047174,28.9130435 22.8262391,28.9130435 L45.6523261,28.9130435 C48.1738478,28.9130435 50.2175435,30.9567391 50.2175435,33.4782609 L50.2175435,35 C50.2175435,37.5215217 48.1738478,39.5652174 45.6523261,39.5652174 Z"
                              stroke="#3F7FE7"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h3 className="item-title">Cloud Computing</h3>
                </div>
                <div className="more-info">
                  <h3 className="item-title">Cloud Computing</h3>
                  <p className="item-description">
                    Use cloud platforms like Microsoft Azure and Amazon AWS to
                    create a flexible, scalable, and connected business
                    environment.
                  </p>
                </div>
              </li>
              <li className="teach-item">
                <div className="preview">
                  <div className="teach-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={70}
                      height={56}
                      viewBox="0 0 70 56"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          stroke="#3F7FE7"
                          d="M30.32 28.815H10.958v-5.957L.548 34.772l10.41 10.426v-5.957h14.894M49.682 39.24h8.936v-5.957l10.425 11.915-10.425 10.426v-5.958H40.745M28.83 39.24H33.3M33.299 49.666h4.468M25.852 49.666h4.468M18.405 49.666h4.468"
                        />
                        <path
                          stroke="#323232"
                          d="M19.995 22.858C21.123 10.332 31.65.518 44.469.518c13.571 0 24.575 11.001 24.575 24.574 0 3.437-.706 6.711-1.981 9.68"
                        />
                        <path
                          stroke="#3F7FE7"
                          d="M39.256 30.304v1.49a2.978 2.978 0 0 0 2.979 2.978h2.978a2.978 2.978 0 0 0 2.98-2.978v-2.322c0-1.281-.821-2.42-2.038-2.825l-4.863-1.62a2.98 2.98 0 0 1-2.036-2.826v-2.322a2.978 2.978 0 0 1 2.979-2.979h2.978a2.978 2.978 0 0 1 2.98 2.979v1.49M43.724 16.9v-4.468M43.724 34.772v4.469"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="item-title">FinTech</h3>
                </div>
                <div className="more-info">
                  <h3 className="item-title">FinTech</h3>
                  <p className="item-description">
                    Prevent money laundering and introduce transparency with
                    blockchain-based solutions. Use reliable payment processing
                    with PSP backend system integration.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div className="divider-b-75">
          <div className="container">
            <div className="grid grid--column grid--center">
              <h2 className="title title--black title--medium title--uppercase">
                Client Success
              </h2>
            </div>
          </div>
        </div>
        <div className="clients">
          <div className="container">
            <div className="clients__grid">
              <div className="clients__item clients__item--4">
                <div className="clients__content clients__content--block">
                  <div className="clients__media clients__media--fluid clients__media--">
                    <div
                      className="clients__media-inner"
                      style={{
                        backgroundImage:
                          `url(${require("../../../assets/5be2fa1f/img/ernst-n-young-client.jpg")})`
                      }}
                    />
                  </div>
                  <div className="clients__text clients__text--fluid">
                    <h3 className="clients__title clients__title--">
                      Cirrus Insight
                    </h3>
                    <p className="clients__description clients__description--">
                      Cirruspath was behind the highest-rated app for
                      integrating Salesforce with a user’s email inbox. Cirrus
                      Insight Mobile helps you leverage your sales data to gain
                      valuable insights and uncover new opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="clients__item clients__item--4">
                <div className="clients__content clients__content--block">
                  <div className="clients__media clients__media--fluid clients__media--">
                    <div
                      className="clients__media-inner"
                      style={{
                        backgroundImage:
                          `url(${require("../../../assets/5be2fa1f/img/blockchain-client.jpg")})`
                      }}
                    />
                  </div>
                  <div className="clients__text clients__text--fluid">
                    <h3 className="clients__title clients__title--">
                      Eurostar
                    </h3>
                    <p className="clients__description clients__description--">
                      A high-speed railway pioneer gains a series of automated
                      solutions to process passenger information, improve
                      on-board services, and report critical information to
                      passengers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="clients__item clients__item--4">
                <div className="clients__content clients__content--block">
                  <div className="clients__media clients__media--fluid clients__media--">
                    <div
                      className="clients__media-inner"
                      style={{
                        backgroundImage:
                          `url(${require("../../../assets/5be2fa1f/img/london-client.jpg")})`
                      }}
                    />
                  </div>
                  <div className="clients__text clients__text--fluid">
                    <h3 className="clients__title clients__title--">
                      Ernst & Young
                    </h3>
                    <p className="clients__description clients__description--">
                      Forecasts in Focus confirms E&Y as a thought-leader in the
                      eyes of an audience relying on data to drive smarter
                      investment decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="clients__item clients__item--4">
                <div className="clients__content clients__content--blue">
                  <div className="clients__text clients__text--fluid clients__text--blue">
                    <span className="clients__title clients__title--massive clients__title--massive--">
                      500
                    </span>
                    <span className="clients__tag clients__tag--medium">
                      Loyal Clients
                    </span>
                    <p className="clients__description clients__description--medium m-bottom-35 clients__description--medium--">
                      Over a decade of stellar software solutions
                    </p>
                    <a
                      className="button button--clear button--white button--220 "
                      href="../cases.html"
                    >
                      More Success Stories
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    );
  }
}

export default ITCSContent;
