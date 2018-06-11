import React from "react";

class Section1 extends React.Component {
  render() {
    return (
      <section id="section1" className="case-block section">
        <div className="case-block__flexbox">
          <div className="case-block__wrap">
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#064773",
                width: "100%"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/b4f5411e979896e579acef5cd48f54bda090812baaccf5de4b619418f296335a.jpg")})`}}
              />
              <a href="cases/cirrus.html">
                <img
                  className="case-block__logo"
                  src={require('../../../assets/5be2fa1f/img/cases/cirrus.png')}
                  alt="Cirrcus"
                />
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#000000"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/202235a08da0f39436e7c4f8fa5e00aeda2bcffd1138ccc50d41fb498b7222bc.jpg")})`}}
              />
              <a href="cases/guinness.html">
                <img
                  className="case-block__logo"
                  src={require('../../../assets/5be2fa1f/img/cases/guinness.png')}
                  alt="guiness"
                />
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#ec5800"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/f31298498b6d1473fc4c1c2832a49156a2c9444d2416113344fcb8d94880ffb5.jpg")})`}}
              />
              <a href="cases/harley-davidson.html">
                <img
                  className="case-block__logo"
                  src={require('../../../assets/5be2fa1f/img/cases/harley.png')}
                  alt="harley"
                />
              </a>
            </div>
          </div>
          <div className="case-block__wrap">
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#ffe600"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/74ec3ceab755c7e5c4794ae32707f01ee03f1f7cfe4a0a9a22f52f5dc1060931.jpg")})`}}
              />
              <a href="cases/ernst-young.html">
                <img
                  className="case-block__logo"
                  src={require('../../../assets/5be2fa1f/img/cases/ernst.png')}
                  alt="ernst"
                />{" "}
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#1d3128"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/d59ccb1bd8e2217ff912a44dcb7ed676c8bbc581f17a5a2312fb016d4d6f2369.jpg")})`}}
              />
              <a href="cases/jaguar-talk.html">
                <img
                  className="case-block__logo"
                  src={require('../../../assets/5be2fa1f/img/cases/jaguar.png')}
                  alt="jaguar"
                />{" "}
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#073d66",
                width: "100%"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/e3f907124775ae106e1d25d9bbbb8f05b261f746c525ea2c70ab94e4141cc62e.jpg")})`}}
              />
              <a href="cases/eurostar.html">
                <img
                  className="case-block__logo"
                  src={require('../../../assets/5be2fa1f/img/cases/eurostar.png')}
                  alt="eurostar"
                />{" "}
              </a>
            </div>{" "}
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;
