import React from "react";
import MaintenanceHeader from "./maintenance_header.jsx";
import MaintenanceAbout from "./maintenance_about.jsx";
import MaintenanceCaseStudies from "./maintenance_case_studies.jsx";
import MaintenanceContactBtn from "./maintenance_contact_btn.jsx";
import MaintenanceFormWrap from "./maintenance_form_wrap.jsx";
import MaintenanceNumbers from "./maintenance_numbers.jsx";
import MaintenanceCemetery from "./maintenance_cemetery.jsx";
import TellUs from "../../services/TellUs.jsx";

class Maintenance extends React.Component {
  render() {
    return (
        <div>          
          <MaintenanceHeader />
          <MaintenanceAbout />
          <MaintenanceCaseStudies />
          <MaintenanceContactBtn />
          <MaintenanceFormWrap />
          <MaintenanceNumbers />
          <MaintenanceCemetery />
          <TellUs />
        </div>
    );
  }
}

export default Maintenance;