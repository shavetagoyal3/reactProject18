import React from "react";
import HealthHero from "./health_hero.jsx";
import Phone from "./health_phone.jsx";
import HealthImage from "./health_image.jsx";
import SectionMargin from "./health_section_margin.jsx";
import DividerB75 from "./divider_b75.jsx";
import Clients from "./health_clients.jsx";
import TellUs from "../../services/TellUs.jsx";

class Healthcare extends React.Component {
  render() {
    return (
        <div>          
          <HealthHero />
          <Phone />
          <HealthImage />
          <SectionMargin />
          <DividerB75 />
          <Clients />
          <TellUs />
        </div>
    );
  }
}

export default Healthcare;