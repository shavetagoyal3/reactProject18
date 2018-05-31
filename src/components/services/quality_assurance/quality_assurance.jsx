import React from "react";
import QAHeader from "./qaheader.jsx";
import QAAbout from "./qaabout.jsx";
import QACaseStudies from "./qacase_studies.jsx";
import QAContactBtn from "./qacontact_btn.jsx";
import QAFormWrap from "./qaform_wrap.jsx";
import QANumbers from "./qanumbers.jsx";
import QACemetery from "./qacemetery.jsx";
import TellUs from "../../services/TellUs.jsx";

class QualityAssurance extends React.Component {
  render() {
    return (
        <div>          
          <QAHeader />
          <QAAbout />
          <QACaseStudies />
          <QAContactBtn />
          <QAFormWrap />
          <QANumbers />
          <QACemetery />
          <TellUs />
        </div>
    );
  }
}

export default QualityAssurance;