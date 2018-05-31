import React from "react";
import DesignHeader from "./design_header.jsx";
import DesignAbout from "./design_about.jsx";
import DesignCaseStudies from "./design_case_studies.jsx";
import DesignContactBtn from "./design_contact_btn.jsx";
import DesignFormWrap from "./design_form_wrap.jsx";
import DesignNumbers from "./design_numbers.jsx";
import DesignCemetery from "./design_cemetery.jsx";
import TellUs from "../../services/TellUs.jsx";

class UX extends React.Component {
  render() {
    return (
        <div>          
          <DesignHeader />
          <DesignAbout />
          <DesignCaseStudies />
          <DesignContactBtn />
          <DesignFormWrap />
          <DesignNumbers />
          <DesignCemetery />
          <TellUs />
        </div>
    );
  }
}

export default UX;