import React from "react";

class QAHeader extends React.Component {
  render() {
    return (
      <section
        className="header"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/services/6559c069c86c92ec197df0512802fb5803425ddbcb5590dfd514f17aefa1acaa.jpg")})`
        }}
      >
        <div className="container">
          <h1 className="header__title">Quality Assurance</h1>
          <p className="header__lead">
            Avoid future challenges by ensuring you are working with great
            software from the very start. Our qualified Quality Assurance and
            software testing team can help you be sure that the software that
            your business runs on works smoothly and as expected — always.
          </p>
        </div>
      </section>
    );
  }
}

export default QAHeader;
