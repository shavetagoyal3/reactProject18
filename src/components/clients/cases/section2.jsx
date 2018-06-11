import React from "react";

class Section2 extends React.Component {
  render() {
    return (
      <section id="section2" className="case-block section">
        <div className="case-block__flexbox">
          <div className="case-block__wrap">
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#ffd500",
                width: "100%"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/d399aed414d04cd440cbd460f3e224c7545e8de52fb2633d3af20902f37f6069.jpg")})`}}
              />
              <a href="cases/shell.html">
                <h2 className="case-block__logo">Shell</h2>
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#ff5722"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/77af00e8291e9eb868ec2f09550e4399efdd5afa6687c5e403dd9186e41eeb60.png")})`}}
              />
              <a href="cases/banking-web-portal.html">
                <h2 className="case-block__logo">Banking Institution</h2>
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#4caf50"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/7c87c8287141cc5c6ce841fdb60f5f1f89cfe99a43c2a13b78505ffe844e1475.jpg")})`}}
              />
              <a href="cases/mobile-software-as.html">
                <h2 className="case-block__logo">Mobile Software AS</h2>
              </a>
            </div>{" "}
          </div>
          <div className="case-block__wrap">
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#000000"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/fa5fbb9f92fa12a370debbf9f1e5944e44014283e66f75fa80b84b88828f7bf5.jpg")})`}}
              />
              <a href="cases/blockchain.html">
                <h2 className="case-block__logo">Blockchain Wallet App</h2>
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#28cdb6"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/2b5f22868a5afdd1b1b131da389fe9dacb3a0c6aa802fc2d419f8fca3fba3525.jpg")})`}}
              />
              <a href="cases/joiful.html">
                <h2 className="case-block__logo">Joiful</h2>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section2;
