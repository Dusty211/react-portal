import React from "react";
import {
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";

import { ReactComponent as SunIcon } from '../../assets/img/savesolar/sun-solid.svg'
import { ReactComponent as LinkIcon } from '../../assets/img/savesolar/link-solid.svg'
import { ReactComponent as DollarIcon } from '../../assets/img/savesolar/dollar-sign-solid.svg'

class CommunitySolarSavings extends React.Component {

  render() {

    return(
      <div className="content h-100" style={{paddingBottom: 25}}>
        <Card className="h-100" >
          <CardHeader>
            <CardTitle tag="h4">Community Solar Savings - December</CardTitle>
          </CardHeader>
          <CardBody>
          <Alert color="primary" style={{padding: 8, display: 'flex', alignItems: 'center'}} >
            <div className="d-inline-block bg-white" style={{width: '100px', height: '100px'}} >
              <SunIcon color="#0746a5" title='Sun icon'/>
            </div>
            <div className="d-inline-block" style={{ paddingLeft: 10}} >
              <span>Your Community Solar facility generated 22,500 kWh for the last billing cycle</span>
            </div>
          </Alert>
          <Alert color="primary" style={{padding: 8, display: 'flex', alignItems: 'center'}} >
            <div className="d-inline-block bg-white" style={{padding: 15, width: 100, height: 100}} >
              <LinkIcon color="#0746a5" title='Link icon'/>
            </div>
            <div className="d-inline-block" style={{maxWidth: '80%', paddingLeft: 10}} >
              <span>Your 5% allocation equates to 750 kWh’s over the period</span>
            </div>
          </Alert>
          <Alert color="primary" style={{padding: 8, display: 'flex', alignItems: 'center'}} >
            <div className="d-inline-block bg-white" style={{padding: 28, width: 100, height: 100}} >
              <DollarIcon color="#0746a5" title='Dollar icon'/>
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
