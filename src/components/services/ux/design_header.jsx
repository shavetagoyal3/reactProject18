import React from "react";

class DesignHeader extends React.Component {
  render() {
    return (
      <section
        className="header"
        style={{
          backgroundImage:
            `url(${require("../../../upload/images/services/33e4e59586b8c9a7db7b9453ef5fbea6ff9c11d5ba08edbc81eb1ed058b13b1c.jpg")})`
        }}
      >
        <div className="container">
          <h1 className="header__title">UI/UX Design</h1>
          <p className="header__lead">
            Even the most powerful, comprehensive, and reliable software
            solutions can fall short of success without an intuitive design and
            a pleasant user experience. Intellectsoft can help you walk that
            extra mile.
          </p>
        </div>
      </section>
    );
  }
}

export default DesignHeader;
