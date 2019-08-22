import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";

// react plugin used to create charts
import { Bar } from "react-chartjs-2";
import { monthlyEnergyUsage } from "variables/monthlyEnergyUsageChart.js";

class MonthlyEnergyUsage extends React.Component {
  render() {
    return(
      <Card className="card-chart">
      <CardHeader>
        <CardTitle tag="h4" className="text-center">Monthly Energy Usage</CardTitle>
      </CardHeader>
        <CardBody>
          <Bar
            data={monthlyEnergyUsage.data}
            options={monthlyEnergyUsage.options}
          />
        </CardBody>
      </Card>
    )
  }
}

export default MonthlyEnergyUsage;
