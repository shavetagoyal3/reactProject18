import React from "react";

class KeyPoints extends React.Component {
  render() {
    return (
      <div className="key-points">
        <div className="container container--flex">
          <h2 className="apocalypse__title apocalypse__title--key-points" />
          <div className="key-points__cards">
            <div
              className="key-points__card"
              style={{
                backgroundImage:
                  `url(${require("../../../assets/5be2fa1f/img/svg-animated/ai-1.svg")})`
              }}
            >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/ai-1.svg')}/>
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  Greater Automation
                </h2>
                <p className="key-points__description">
                  Use custom machine learning models and other AI-based software
                  solutions to automate the operations across all departments:
                  sales, finance, marketing, human resources, customer service,
                  production, or any other. Employ machine learning in sales to
                  quickly single out prospects, automate the entire production
                  chain, and let AI act as a headhunter in HR. AI-based
                  solutions are characterised by computational accuracy and
                  quick processing, allowing your business to operate faster and
                  grow exponentially.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Artificial Intelligence chat bots and apps
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Machine learning models
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Neural networks and deep learning
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Visual information processing
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Cloud-based AI models
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
                backgroundImage:
                  `url(${require("../../../assets/5be2fa1f/img/svg-animated/ai-2.svg")})`
              }}>
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/ai-2.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  Greater Enterprise Efficiency
                </h2>
                <p className="key-points__description">
                  Use a variety of AI-based software solutions to instantly
                  derive insights from your Big Data. Build predictive machine
                  learning models to determine how your company will grow after
                  an investment. Use the predictive models to gain customer
                  behaviour insights. AI-based technologies quickly analyse vast
                  amounts of data and present information that ensures fail-safe
                  decision making.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Predictive machine learning models
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Data generation and augmentation
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Sentiment analysis
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Data analysis management
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Raw data management
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
                backgroundImage:
                  `url(${require("../../../assets/5be2fa1f/img/svg-animated/ai-3.svg")})`
              }}>
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/ai-3.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  Greater Business Security
                </h2>
                <p className="key-points__description">
                  Leverage the virtual cryptocurrency within an app or a
                  marketplace to create more value for its first users and
                  ensure fast early network growth. Your early adopters will
                  benefit from app token cost growth, stimulating rapid platform
                  growth by attracting new users.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Custom machine learning models
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Voice recognition
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Video search
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Neural networks
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Face recognition
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="key-points__card"
              style={{
                backgroundImage:
                  `url(${require("../../../assets/5be2fa1f/img/svg-animated/ai-4.svg")})`
              }}
              >
              <div className="key-points__image key-points__image--">
                <iframe src={require('../../../assets/5be2fa1f/img/svg-animated/ai-4.svg')} />
              </div>
              <div className="key-points__content">
                <h2 className="title title--black key-points__header">
                  Greater Productivity
                </h2>
                <p className="key-points__description">
                  Leverage AI-based solutions at your enterprise in a
                  “human-augmented approach,” when your employees work alongside
                  artificial intelligence software. Use AI-based speech-to-text
                  on client meetings, and let it comprise a contract
                  automatically. Create your own proactive AI assistant to help
                  your employees on a daily basis. Use AI-enabled solutions to
                  remove workflow impediments and single out actions that can be
                  assisted and automated with AI-based solutions.
                </p>
                <ul className="platform-client__list">
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Language understanding
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    AI enterprise apps
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Voice processing
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Text-to-speech AI
                  </li>
                  <li className="platform_client__list-item platform_client__list-item--column">
                    Speech-to-text AI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyPoints;
