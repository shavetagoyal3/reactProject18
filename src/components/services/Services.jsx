import React from "react";
import HeaderServices from "./HeaderServices.jsx";
import ServiceAbout from "./ServiceAbout.jsx";
import ContactBtn from "./ContactBtn.jsx";
import DownloadEbook from "./DownloadEbook.jsx";
import Cemetery from "./Cemetery.jsx";
import ContactSection from "./../home/contact_section.jsx";
import TellUs from "./TellUs.jsx";

class Services extends React.Component {
  render() {
    return (
        <div>
          <HeaderServices />
          <ServiceAbout />
          <ContactBtn />
          <DownloadEbook />
          <Cemetery />
          <ContactSection />
        </div>
    );
  }
}

export default Services;