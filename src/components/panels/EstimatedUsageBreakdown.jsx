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
      <div className="content h-100" style={{paddingBottom: 25}}>
        <Card className="h-100" >
          <CardHeader>
            <CardTitle tag="h4">Estimated Usage Breakdown (kWh)</CardTitle>
          </CardHeader>
          <CardBody>
            <Pie
              data={estimatedUsageBreakdown.data}
              options={estimatedUsageBreakdown.options}
            />
          </CardBody>
          {/*
            <CardFooter>
              <div className="legend">
                <i className="fa fa-circle" style={{color: 'yellow'}}/> Lighting{" "}
                <i className="fa fa-circle" style={{color: 'red'}}/> Food Refrigeration{" "}
                <i className="fa fa-circle" style={{color: 'blue'}}/> Electrical Appliances{" "}
                <i className="fa fa-circle" style={{color: 'green'}}/> Space Heating{" "}
                <i className="fa fa-circle" style={{color: 'gray'}}/> Domestic Hot Water{" "}
                <i className="fa fa-circle" style={{color: 'purple'}}/> Cooking
              </div>
            </CardFooter>
            */}
        </Card>
      </div>
    )
  }
}

export default EstimatedUsageBreakdown;
