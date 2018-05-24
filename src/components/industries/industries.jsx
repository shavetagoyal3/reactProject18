import React from "react";
import Hero from "./hero.jsx";
import BullsEye from "./bulls_eye.jsx";
import DividerB from "./divider_b.jsx";
import Snakepit from "./snakepit.jsx";
import Apocalypse from "./apocalypse.jsx";
import DividerB75 from "./divider_b75.jsx";
import Planalitics from "./planalitics.jsx";
import Cemetery from "./cemetery.jsx";
import TellUs from "./../services/TellUs.jsx";

class Industries extends React.Component {
  render() {
    return (
        <div>
        	<Hero />
        	<BullsEye />
			<DividerB />
			<Snakepit />
			<Apocalypse />
			<DividerB75 />
			<Planalitics />
			<Cemetery />
			<TellUs />
        </div>
    );
  }
}

export default Industries;