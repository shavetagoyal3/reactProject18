import React from "react";
import MusicHero from "./music_hero.jsx";
import MusicPhone from "./music_phone.jsx";
import MusicImage from "./music_phone_image.jsx";
import MusicMargin from "./music_section_margin.jsx";
import DividerB75 from "./divider_b75.jsx";
import Clients from "./clients.jsx";
import TellUs from "../../services/TellUs.jsx";

class Music extends React.Component {
  render() {
    return (
        <div>          
          <MusicHero />
          <MusicPhone />
          <MusicImage />
          <MusicMargin />
          <DividerB75 />
          <Clients />
          <TellUs />
        </div>
    );
  }
}

export default Music;