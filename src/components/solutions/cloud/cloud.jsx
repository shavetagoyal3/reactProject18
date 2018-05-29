import React from "react";
import AzureHero from "./azure_hero.jsx";
import Apocalypse from "./apocalypse.jsx";
import PlatformClients from "./platform_clients.jsx";
import KeyPoints from "./key_points.jsx";
import TellUs from "../../services/TellUs.jsx";

class Cloud extends React.Component {
  render() {
    return (
        <div>
          <AzureHero />
          <Apocalypse />
          <KeyPoints />
          <PlatformClients />          
          <TellUs />
        </div>
    );
  }
}

export default Cloud;