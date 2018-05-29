import React from "react";
import AugmentedHero from "./augmented_hero.jsx";
import Apocalypse from "./apocalypse.jsx";
import AugmentedReality from "./augmented_reality.jsx";
import KeyPoints from "./key_points.jsx";
import TellUs from "../../services/TellUs.jsx";

class Augmented extends React.Component {
  render() {
    return (
        <div>
          <AugmentedHero />
          <Apocalypse />
          <AugmentedReality />
          <KeyPoints />
          <TellUs />
        </div>
    );
  }
}

export default Augmented;