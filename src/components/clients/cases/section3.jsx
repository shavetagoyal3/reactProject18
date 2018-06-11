import React from "react";

class Section3 extends React.Component {
  render() {
    return (
      <section id="section3" className="case-block section">
        <div className="case-block__flexbox">
          <div className="case-block__wrap">
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#000000",
                width: "100%"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/2d6b4e53877fd2d59f50d0ec82b3b64468b98865be988abe7c6652c2d6408dba.jpg")})`}}
              />
              <a href="cases/consero-llc.html">
                <h2 className="case-block__logo">Consero LLC</h2>
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#afc61c"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/bb8ee914e8ccf2148f2cd112ec6f7e049383bfad26e2188041eb92f7e02e3598.jpg")})`}}
              />
              <a href="cases/clayton-homes.html">
                <h2 className="case-block__logo">Clayton Homes</h2>
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#dd1d29"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/ab1a8dcaea22c9ec30db987f044beb204613d5bbc70080aa0fec6218320f5575.jpg")})`}}
              />
              <a href="cases/retail-chain-software.html">
                <h2 className="case-block__logo">Retail Chain Client</h2>
              </a>
            </div>{" "}
          </div>
          <div className="case-block__wrap">
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#3471c7",
                width: "100%"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/da6dec773afb13ea5bdde457f47629cc575d581c5c8bef6a6f652f09f04de54f.jpg")})`}}
              />
              <a href="cases/generational-equity.html">
                <h2 className="case-block__logo">Generational Equity</h2>
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#f5bc23"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/ede9f1f9f16a705d791f6d12ea8bd5f834bbf9f8976bb188d49e52c193fadbf6.jpg")})`}}
              />
              <a href="cases/alumties.html">
                <h2 className="case-block__logo">AlumTies</h2>
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#29d7b0"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/37c02b89aa1ce0a51355934c28e4333a23a796852268ccc25f2fcce079f96c3b.png")})` }}
              />
              <a href="cases/dropix.html">
                <h2 className="case-block__logo">Dropix</h2>
              </a>
            </div>
            <div
              className="case-block__item"
              style={{
                backgroundColor: "#03a9f4",
                width: "100%"
              }}
            >
              <div
                className="b-lazy case-block__cover"
                style={{ backgroundImage: `url(${require("../../../upload/images/cases/49e2a0f138b1baad5e62c7e5731149786e4de6b524c395064ffdda26e0018082.png")})` }}
              />
              <a href="cases/building-inspection-solutions.html">
                <h2 className="case-block__logo">Building Inspectors</h2>
              </a>
            </div>{" "}
          </div>
        </div>
      </section>
    );
  }
}

export default Section3;
