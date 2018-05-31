import React from "react";
import ITCSHero from "./itcshero.jsx";
import ITCSContent from "./itcscontent.jsx";
import TellUs from "../../services/TellUs.jsx";

class Consulting extends React.Component {
  render() {
    return (
        <div>          
          <ITCSHero />
          <ITCSContent />
          <TellUs />
        </div>
    );
  }
}

export default Consulting;