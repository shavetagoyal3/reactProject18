import React from "react";
import StaticPage from "./static_page.jsx";
import TeamTop from "./team_top.jsx";

class Team extends React.Component {
  render() {
    return (
        <div>
          <StaticPage />
          <TeamTop />
        </div>
    );
  }
}

export default Team;