import React from "react";
import CompanyFull from "./company_full.jsx";
import CompanyStats from "./company_stats.jsx";
import Map from "./map.jsx";
import DividerB from "./divider_b.jsx";
import CompanyClients from "./company_clients.jsx";
import DividerB1001 from "./divider_b100_1.jsx";
import DividerB100 from "./divider_b100.jsx";
import CompanyClients2 from "./company_clients2.jsx";
import CompanyDivider from "./company_divider.jsx";
import DividerT100 from "./divider_t100.jsx";
import Ranking from "./ranking.jsx";
import DividerT70 from "./divider_t70.jsx";

class Companies extends React.Component {
  render() {
    return (
        <div>
        <CompanyFull />
        <CompanyStats />
        <Map />
        <DividerB />
        <CompanyClients />
        <DividerB1001 />
        <CompanyClients2 />
        <CompanyDivider />
        <DividerT100 />
        <DividerB100 />
        <Ranking />
        <DividerT70 />
        </div>
    );
  }
}

export default Companies;