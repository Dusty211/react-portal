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
      <div className="h-100" style={{paddingBottom: 25}} >
      <Card className="card-chart h-100">
        <CardHeader>
          <CardTitle tag="h4" className="text-center">Monthly Energy Usage</CardTitle>
        </CardHeader>
        <CardBody style={{maxHeight: 350}}>
          <Bar
            data={monthlyEnergyUsage.data}
            options={monthlyEnergyUsage.options}
          />
        </CardBody>
      </Card>
      </div>
    )
  }
}

export default MonthlyEnergyUsage;
