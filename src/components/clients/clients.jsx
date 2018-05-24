import React from "react";
import ClientHero from "./client_hero.jsx";
import Ranking from "./ranking.jsx";
import Stats from "./stats.jsx";
import Cemetery from "./cemetery.jsx";
import Icons from "./icons.jsx";
import ClientsSection from "./clients_section.jsx";
import SectionMargin from "./section_margin.jsx";
import SolutionAbout from "./../solutions/SolutionAbout.jsx";

class Clients extends React.Component {
  render() {
    return (
        <div>
          <ClientHero />
          <Ranking />
          <Stats />
          <Cemetery />
          <Icons />
          <ClientsSection />
          <SectionMargin />
          <SolutionAbout />
        </div>
    );
  }
}

export default Clients;