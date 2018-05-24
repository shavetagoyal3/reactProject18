import React from "react";

class SubMenu extends React.Component {
  render() {
    return (
      <ul className="sub-menu">
        <li className="menu-item">
          <a href="solutions/blockchain.html">Blockchain Technologies</a>
        </li>
        <li className="menu-item">
          <a href="solutions/azure.html">Cloud Computing</a>
        </li>
        <li className="menu-item">
          <a href="solutions/fintech.html">FinTech</a>
        </li>
        <li className="menu-item">
          <a href="solutions/ai.html">Artificial Intelligence</a>
        </li>
        <li className="menu-item">
          <a href="solutions/augmented-reality.html">Augmented Reality</a>
        </li>
        <li className="menu-item">
          <a href="solutions/internet-of-things.html">Internet of Things</a>
        </li>
      </ul>
    );
  }
}

export default SubMenu;
