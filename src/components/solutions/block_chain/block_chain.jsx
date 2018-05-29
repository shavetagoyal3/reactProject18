import React from "react";
import BlockChainHero from "./block_chain_hero.jsx";
import Apocalypse from "./apocalypse.jsx";
import DividerB75 from "./divider_b75.jsx";
import KeyPoints from "./key_points.jsx";
import Clients from "./clients.jsx";
import TellUs from "../../services/TellUs.jsx";

class BlockChain extends React.Component {
  render() {
    return (
        <div>
          <BlockChainHero />
          <Apocalypse />
          <KeyPoints />
          <DividerB75 />
          <Clients />
          <TellUs />
        </div>
    );
  }
}

export default BlockChain;