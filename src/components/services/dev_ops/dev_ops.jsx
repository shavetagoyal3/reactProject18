import React from "react";
import DevOpsHero from "./dev_ops_hero.jsx";
import DevOpsContent from "./dev_ops_content.jsx";
import TellUs from "../../services/TellUs.jsx";

class DevOps extends React.Component {
  render() {
    return (
        <div>          
          <DevOpsHero />
          <DevOpsContent />
          <TellUs />
        </div>
    );
  }
}

export default DevOps;