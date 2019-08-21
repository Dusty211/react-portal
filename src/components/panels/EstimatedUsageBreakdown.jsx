import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle
} from "reactstrap";

// react plugin used to create charts
import { Pie } from "react-chartjs-2";
import { estimatedUsageBreakdown } from "variables/estimatedUsageChart.js";

class EstimatedUsageBreakdown extends React.Component {
  cardRows = [
    {
      title: "Billing Period End Date",
      data: "12/22/2018",
      bold: false,
      red: false
    },
    {
      title: "Previous Balance",
      data: "($38.86)",
      bold: false,
      red: false
    },
    {
      title: "Current Period",
      data: "$118.33",
      bold: false,
      red: false
    },
    {
      title: "Due By",
      data: "11/29/2018",
      bold: true,
      red: false
    },
    {
      title: "Total Account Balance",
      data: "$155.43",
      bold: true,
      red: false
    },
  ]

  render() {

    return(
      <div className="content">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Estimated Usage Breakdown</CardTitle>
          </CardHeader>
          <CardBody>
            <Pie
              data={estimatedUsageBreakdown.data}
              options={estimatedUsageBreakdown.options}
            />
          </CardBody>
          <CardFooter>
            <div className="legend">
              <i className="fa fa-circle text-primary" /> Opened{" "}
              <i className="fa fa-circle text-warning" /> Read{" "}
              <i className="fa fa-circle text-danger" /> Deleted{" "}
              <i className="fa fa-circle text-gray" /> Unopened
            </div>
            <hr />
            <div className="stats">
              <i className="fa fa-calendar" /> Number of emails sent
            </div>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

export default EstimatedUsageBreakdown;
