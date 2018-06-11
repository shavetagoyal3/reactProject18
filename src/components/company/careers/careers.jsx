import React from "react";
import StaticPageTitle from "./static_page_title.jsx";
import PhotoSlider from "./photo_slider.jsx";
import Jobs from "./jobs.jsx";
import WorkableBlock from "./workable_block.jsx";
import NoticeBlock from "./notice_block.jsx";

class Careers extends React.Component {
  render() {
    return (
        <div>
          <StaticPageTitle />
          <PhotoSlider />
          <Jobs />
          <WorkableBlock />
          <NoticeBlock />
        </div>
    );
  }
}

export default Careers;