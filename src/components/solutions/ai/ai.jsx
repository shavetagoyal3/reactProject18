import React from "react";
import AIApocalypse from "./aiapocalypse.jsx";
import AIHero from "./aihero.jsx";
import KeyPoints from "./key_points.jsx";
import TellUs from "../../services/TellUs.jsx";

class AI extends React.Component {
  render() {
    return (
        <div>          
          <AIHero />
          <AIApocalypse />
          <KeyPoints />
          <TellUs />
        </div>
    );
  }
}

export default AI;