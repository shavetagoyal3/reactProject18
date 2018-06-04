import React from "react";
import ARHero from "./arhero.jsx";
import ARAugmentedProcess from "./araugmented_process.jsx";
import ARAugmentedValidation from "./araugmented_validation.jsx";
import ARAugmentedReconstruction from "./araugmented_reconstruction.jsx";
import ARAugmentedHazard from "./araugmented_hazard.jsx";
import ARAugmentedCollab from "./araugmented_collab.jsx";
import DividerB75 from "./divider_b75.jsx";
import Clients from "./clients.jsx";
import TellUs from "../../services/TellUs.jsx";

class AR extends React.Component {
  render() {
    return (
        <div>          
          <ARHero />
          <ARAugmentedProcess />
          <ARAugmentedValidation />
          <ARAugmentedReconstruction />
          <ARAugmentedHazard />
          <ARAugmentedCollab />
          <DividerB75 />
          <Clients />
          <TellUs />
        </div>
    );
  }
}

export default AR;