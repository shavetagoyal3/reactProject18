import React from "react";
import TEContent from "./tecontent.jsx";
import TEHero from "./tehero.jsx";
import TellUs from "../../services/TellUs.jsx";

class TeamExtension extends React.Component {
  render() {
    return (
        <div>          
          <TEHero />
          <TEContent />
          <TellUs />
        </div>
    );
  }
}

export default TeamExtension;