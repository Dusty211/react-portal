import React from "react";
import {
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";

class CommunitySolarSavings extends React.Component {

  render() {

    return(
      <div className="content h-100" style={{paddingBottom: 25}}>
        <Card className="h-100" >
          <CardHeader>
            <CardTitle tag="h4">Community Solar Savings</CardTitle>
          </CardHeader>
          <CardBody>
          <Alert color="primary" style={{padding: 8, display: 'flex', alignItems: 'center'}} >
            <div className="d-inline-block bg-warning" style={{maxWidth: '20%'}} >
              <span>Icon goes here</span>
            </div>
            <div className="d-inline-block" style={{maxWidth: '80%', paddingLeft: 10}} >
              <span>Your Community Solar facility generated 22,500 kWh for the last billing cycle</span>
            </div>
          </Alert>
          <Alert color="primary" style={{padding: 8, display: 'flex', alignItems: 'center'}} >
            <div className="d-inline-block bg-warning" style={{maxWidth: '20%'}} >
              <span>Icon goes here</span>
            </div>
            <div className="d-inline-block" style={{maxWidth: '80%', paddingLeft: 10}} >
              <span>Your 5% allocation equates to 750 kWh’s over the period</span>
            </div>
          </Alert>
          <Alert color="primary" style={{padding: 8, display: 'flex', alignItems: 'center'}} >
            <div className="d-inline-block bg-warning" style={{maxWidth: '20%'}} >
              <span>Icon goes here</span>
            </div>
            <div className="d-inline-block" style={{maxWidth: '80%', paddingLeft: 10}} >
              <span>Your SaveSolar 10% discount equates to $21.50 in savings this statement!</span>
            </div>
          </Alert>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default CommunitySolarSavings;
