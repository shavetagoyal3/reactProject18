import React from "react";
import MDHero from "./mdhero.jsx";
import MDContent from "./mdcontent.jsx";
import TellUs from "../../services/TellUs.jsx";

class MobileDevelopment extends React.Component {
  render() {
    return (
        <div>          
          <MDHero />
          <MDContent />
          <TellUs />
        </div>
    );
  }
}

export default MobileDevelopment;