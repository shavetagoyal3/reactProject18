import React from "react";
import FintechHero from "./fintech_hero.jsx";
import Apocalypse from "./apocalypse.jsx";
import Clients from "./clients.jsx";
import DividerB75 from "./divider_b75.jsx";
import KeyPoints from "./key_points.jsx";
import TellUs from "../../services/TellUs.jsx";

class Fintech extends React.Component {
  render() {
    return (
        <div>
          <FintechHero />
          <Apocalypse />
          <KeyPoints />
          <DividerB75 />
          <Clients />          
          <TellUs />
        </div>
    );
  }
}

export default Fintech;