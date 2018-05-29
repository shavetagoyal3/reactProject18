import React from "react";
import { Link } from "react-router-dom";

class SubMenu extends React.Component {
  render() {
    return (
      <ul className="sub-menu">
        <li className="menu-item">
          <Link to="/solutions/blockchain">Blockchain Technologies</Link>
        </li>
        <li className="menu-item">
          <Link to="/solutions/azure">Cloud Computing</Link>
        </li>
        <li className="menu-item">
          <Link to="/solutions/fintech">FinTech</Link>
        </li>
        <li className="menu-item">
          <Link to="/solutions/ai">Artificial Intelligence</Link>
        </li>
        <li className="menu-item">
          <Link to="/solutions/augmented-reality">Augmented Reality</Link>
        </li>
        <li className="menu-item">
          <Link to="/solutions/internet-of-things">Internet of Things</Link>
        </li>
      </ul>
    );
  }
}

export default SubMenu;
