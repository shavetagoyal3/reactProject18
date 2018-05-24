import React from "react";

class DocumentsBanner extends React.Component {
  render() {
    return (
      <div className="documents-banner">
        <div className="container">
          <div className="grid mb-40 mt-40 p-left-20 p-right-20">
            <div className="column column-flex-3">
              <h2 className="title title--black">
                <span className="title__preheader" />
                Assets
              </h2>
            </div>
          </div>
          <div className="documents-banner__container">
            <div className="documents-banner__picture">
              <img src={require('../../assets/5be2fa1f/img/docs-bloc-picture.jpg')} alt="" />
            </div>
            <div className="documents-banner__content">
              <h2 className="documents-banner__content-text">
                Make your business better with our spot-on content collection{" "}
              </h2>
              <a
                href="docs.html"
                className="button button--clear button--white"
              >
                See All Assets <i className="isoi-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentsBanner;
