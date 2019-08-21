
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class AccountStatus extends React.Component {
  cardRows = [
    {
      title: "Plan Name",
      data: "Save Solar Discount 10%",
      bold: false,
      red: false
    },
    {
      title: "Account Status Date",
      data: "12/12/2018",
      bold: false,
      red: false
    },
    {
      title: "Customer Number",
      data: "345526378373",
      bold: false,
      red: false
    },
    {
      title: "Last Payment Amount",
      data: "$40",
      bold: false,
      red: false
    },
    {
      title: "Last Payment Received",
      data: "11/29/2018",
      bold: false,
      red: false
    },
    {
      title: "Outstanding Amount",
      data: "($38.86)",
      bold: true,
      red: true
    },
    {
      title: "Due By",
      data: "12/05/2018",
      bold: true,
      red: false
    },
  ]

  render() {

    return(
      <div className="content">
        <Card className="card-stats">
          <CardHeader>
            <Row>
              <Col>
                <div className="text-left">
                  <CardTitle tag="h4">Account Status</CardTitle>
                  <p />
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            {this.cardRows.map( row => {
              return(
                <Row style={row.bold ? {paddingBottom: 15, fontWeight: 'bold'} : {paddingBottom: 15} }>
                  <Col md="6" xs="6">
                    <div className="text-left">
                      {row.title}
                    </div>
                  </Col>
                  <Col md="6" xs="6" style={row.red ? {color: 'red'} : null }>
                    <div className="text-left">
                      {row.data}
                    </div>
                  </Col>
                </Row>
              )
            }
            )}
          </CardBody>
          <CardFooter>
            <hr />
            <Row>
              <Col md="6" xs="6">
                <div className="pull-left">
                  <Button className="btn-round" color="primary">
                    Make a Payment
                  </Button>
                </div>
              </Col>
              <Col md="6" xs="6">
                <div className="pull-right">
                  <Button className="btn-round" color="light-gray">
                    Quick Help
                  </Button>
                </div>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

export default AccountStatus;
