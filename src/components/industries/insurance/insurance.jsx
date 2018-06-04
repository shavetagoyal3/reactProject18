import React from "react";
import InsuranceHero from "./insurance_hero.jsx";
import InsurancePhone from "./insurance_phone.jsx";
import InsuranceImage from "./insurance_image.jsx";
import SectionMargin from "./insurance_section_margin.jsx";
import DividerB75 from "./divider_b75.jsx";
import Clients from "./clients.jsx";
import TellUs from "../../services/TellUs.jsx";

class Insurance extends React.Component {
  render() {
    return (
        <div>          
          <InsuranceHero />
          <InsurancePhone />
          <InsuranceImage />
          <SectionMargin />
          <DividerB75 />
          <Clients />
          <TellUs />
        </div>
    );
  }
}

export default Insurance;