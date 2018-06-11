import React from "react";

class DocsContent extends React.Component {
  render() {
    return (
      <section className="docs">
        <div className="container">
          <div className="page-title docs__title">
            <h1>Insights</h1>
          </div>
          <div className="docs__item">
            <a href="docs/mobile-app-development-guide.html">
              <div
                className="docs__image"
                style={{ backgroundImage: `url(${require("../../../upload/images/docs/d5682c72ef52b36ac48b02006fbce3bd7a1d9fde930c708cfde410a90d02467f.jpg")})`
                }}
              >
                <div className="fade" />
              </div>
              <p className="docs__heading">Get Mobile or Get Lost</p>
              <i className="docs__stripe" />
            </a>
          </div>
          <div className="docs__item">
            <a href="docs/user-acquisition-strategy.html">
              <div
                className="docs__image"
                style={{ backgroundImage: `url(${require("../../../upload/images/docs/5a9e2159d2982180047e7bd881c7dc7c10a7d549e8f5e06f11cf4b962778f3ad.jpg")})`
                }}
              >
                <div className="fade" />
              </div>
              <p className="docs__heading">
                User Acquisition Explained. A Cost-Effective Strategy For
                Finding The Audience Your App Deserves
              </p>
              <i className="docs__stripe" />
            </a>
          </div>
          <div className="docs__item">
            <a href="docs/staff-augmentation.html">
              <div
                className="docs__image"
                style={{ backgroundImage: `url(${require("../../../upload/images/docs/baf95aac00bff5da383dbe302532429f63318a46c0d74c91c60cdf93e5d143aa.jpg")})`
                }}
              >
                <div className="fade" />
              </div>
              <p className="docs__heading">
                Staff Augmentation: An Intelligent Solution for Supplementing
                Your Software Teams
              </p>
              <i className="docs__stripe" />
            </a>
          </div>
          <div className="docs__item">
            <a href="docs/cost-to-make-a-mobile-app.html">
              <div
                className="docs__image"
                style={{ backgroundImage: `url(${require("../../../upload/images/docs/dd90fc91539a630582fcda98267450773bd9fa4ce1d69ea1b519122e7fa492d0.jpg")})`
                }}
              >
                <div className="fade" />
              </div>
              <p className="docs__heading">
                How Much Does It Cost to Create a Mobile App?
              </p>
              <i className="docs__stripe" />
            </a>
          </div>
          <div className="docs__item">
            <a href="docs/blockchain-webinar.html">
              <div
                className="docs__image"
                style={{ backgroundImage: `url(${require("../../../upload/images/docs/5520fdf0582bf5eba68d604ac694a3843a7dab73e978ca2ab46c83d570faa5d3.jpg")})`
                }}
              >
                <div className="fade" />
              </div>
              <p className="docs__heading">
                BLOCKCHAIN – A REVOLUTION YOU CAN’T STOP
              </p>
              <i className="docs__stripe" />
            </a>
          </div>
          <div className="docs__item">
            <a href="docs/blockchain-technology-guide.html">
              <div
                className="docs__image"
                style={{ backgroundImage: `url(${require("../../../upload/images/docs/9b657d04f8177f642f0006b2bffe318da809ab110f4a763be33f333bde8e2519.jpg")})`
                }}
              >
                <div className="fade" />
              </div>
              <p className="docs__heading">
                BLOCKCHAIN – A REVOLUTION YOU CAN’T STOP (EBOOK)
              </p>
              <i className="docs__stripe" />
            </a>
          </div>
          <div className="docs__item docs__coming">
            <div className="docs__image" />
            <p className="docs__heading">Coming next</p>
            <i className="docs__stripe" />
          </div>
        </div>
      </section>
    );
  }
}

export default DocsContent;
