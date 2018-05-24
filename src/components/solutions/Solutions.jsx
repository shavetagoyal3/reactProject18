import React from "react";
import SolutionSlider from "./SolutionSlider.jsx";
import SolutionFeatures from "./SolutionFeatures.jsx";
import SolutionAbout from "./SolutionAbout.jsx";

class Solutions extends React.Component {
  render() {
    return (
        <div>
          <SolutionSlider />
          <SolutionFeatures />
          <SolutionAbout />
        </div>
    );
  }
}

export default Solutions;