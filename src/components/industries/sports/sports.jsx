import React from "react";
import SportsHero from "./sports_hero.jsx";
import Phone from "./sports_phone.jsx";
import PhoneImage from "./phone_image.jsx";
import SectionMargin from "./section_margin.jsx";
import DividerB75 from "./divider_b75.jsx";
import Clients from "./clients.jsx";
import TellUs from "../../services/TellUs.jsx";

class Sports extends React.Component {
  render() {
    return (
        <div>          
          <SportsHero />
          <Phone />
          <PhoneImage />
          <SectionMargin />
          <DividerB75 />
          <Clients />
          <TellUs />
        </div>
    );
  }
}

export default Sports;