import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";

// react plugin used to create charts
import { Pie } from "react-chartjs-2";
import { estimatedUsageBreakdown } from "variables/estimatedUsageChart.js";

class EstimatedUsageBreakdown extends React.Component {

  render() {

    return(
      <div className="h-100" style={{paddingBottom: 25}}>
        <Card className="h-100" >
          <CardHeader>
            <CardTitle tag="h4" className="text-center">Estimated Usage Breakdown (kWh)</CardTitle>
          </CardHeader>
          <CardBody>
            <Pie
              data={estimatedUsageBreakdown.data}
              options={estimatedUsageBreakdown.options}
            />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default EstimatedUsageBreakdown;
