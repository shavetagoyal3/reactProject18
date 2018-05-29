import React from "react";
import IOTHero from "./iothero.jsx";
import IOTContainer from "./iotcontainer.jsx";
import KeyPoints from "./key_points.jsx";
import TellUs from "../../services/TellUs.jsx";

class IOT extends React.Component {
  render() {
    return (
        <div>
          <IOTHero />
          <IOTContainer />
          <KeyPoints />       
          <TellUs />
        </div>
    );
  }
}

export default IOT;