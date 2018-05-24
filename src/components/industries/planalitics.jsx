import React from "react";

class Planalitics extends React.Component {
  render() {
    return (
      <div className="planalitics">
        <div className="container">
          <div className="planalitics__list">
            <ul>
              <li>
                <i className="isoi isoi-content-management-2" />
                <h3>Content Management</h3>
                <p>
                  Quickly load, manage, and store all your data in one clean,
                  comprehensive, and intuitive CMS. Immediately preview your
                  content in the dashboard or in a demo app.
                </p>
              </li>
              <li>
                <i className="isoi isoi-analytics" />
                <h3>All the Analytics</h3>
                <p>
                  Easily access your business intelligence, analytics, and data
                  reporting. See all actionable analytics in clean, elegant
                  graphs that allow you to make dependable decisions.
                </p>
              </li>
              <li>
                <i className="isoi isoi-mobile-transfers" />
                <h3>Integrate Your Operations</h3>
                <p>
                  Store your content in the cloud, increase engagement with your
                  targeted and segmented programs, integrate social media, use
                  your Amazon S3 credentials, and more.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="planalitics__image"
            style={{ backgroundImage: `url(${require("../../assets/5be2fa1f/img/image-planalitics.png")})`, opacity:1 }}
          />
        </div>
      </div>
    );
  }
}

export default Planalitics;
