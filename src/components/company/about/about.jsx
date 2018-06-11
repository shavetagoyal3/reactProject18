import React from "react";
import Hero from "./hero.jsx";
import StatsBlue from "./stats_blue.jsx";
import Map from "./map.jsx";
import DividerB100 from "./divider_b100.jsx";
import Clients from "./clients.jsx";
import Divider2 from "./divider2.jsx";
import Clients2 from "./clients2.jsx";
import Divider130 from "./divider130.jsx";
import Divider3 from "./divider3.jsx";
import Divider4 from "./divider4.jsx";
import Ranking from "./ranking.jsx";
import Container from "./container.jsx";

class About extends React.Component {
  render() {
    return (
        <div>
          <Hero />
          <StatsBlue />
          <Map />
          <DividerB100 />
          <Clients />
          <Divider2 />
          <Clients2 />
          <Divider130 />
          <Divider3 />
          <Divider4 />
          <Ranking />
          <Container />
        </div>
    );
  }
}

export default About;