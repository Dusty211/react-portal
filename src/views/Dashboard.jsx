/*!

=========================================================
* Paper Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

//Standalone panel components
import AccountStatus from "../components/panels/AccountStatus.jsx";
import BillSummary from "../components/panels/BillSummary.jsx";
import EstimatedUsageBreakdown from "../components/panels/EstimatedUsageBreakdown.jsx";
import MonthlyEnergyUsage from "../components/panels/MonthlyEnergyUsage.jsx";
import CommunitySolarSavings from "../components/panels/CommunitySolarSavings.jsx";


class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xl="4" lg="6" md="6" sm="6" className="align-self-stretch">
              <AccountStatus />
            </Col>
            <Col xl="4" lg="6" md="6" sm="6" className="align-self-stretch">
              <BillSummary />
            </Col>
            <Col xl="4" lg="6" md="6" sm="6" className="align-self-stretch">
              <EstimatedUsageBreakdown/>
            </Col>
          </Row>
          <Row>
            <Col xl="8" lg="8" md="8" sm="8" className="align-self-stretch">
              <MonthlyEnergyUsage />
            </Col>
            <Col xl="4" lg="4" md="4" sm="4" className="align-self-stretch">
              <CommunitySolarSavings />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
