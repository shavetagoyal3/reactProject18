import React from "react";

class NoticeBlock extends React.Component {
  render() {
    return (
      <div className="notice-block">
        <div className="container">
          <div className="notice-block__content">
            <h3 className="notice-block__header">Important Notice: </h3>
            <p className="notice-block__lead">
              Intellectsoft and its representatives will never assign tasks or
              make hires without a preliminary face-to-face or video-call
              interview. Please be mindful and do not reveal any personal
              information during unsolicited phone calls and text
              communications. If you have any additional questions, please
              contact us via e-mail:{" "}
              <a href="mailto:talent.acquisition@intellectsoft.net">
                talent.acquisition@intellectsoft.net
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NoticeBlock;
