
import React from "react";
import {
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
      data: "Save Solar Discount 10%"
    },
    {
      title: "Account Status Date",
      data: "12/12/2018"
    },
    {
      title: "Customer Number",
      data: "345526378373"
    },
    {
      title: "Last Payment Amount",
      data: "$40"
    },
    {
      title: "Last Payment Received",
      data: "11/29/2018"
    },
    {
      title: "Outstanding Amount",
      data: "($38.86)"
    },
    {
      title: "Due By",
      data: "12/05/2018"
    },
  ]

  render() {

    return(
      <div className="content">
        <Card className="card-stats">
          <CardHeader>
            <Row>
              <Col>
                <div className="text-left numbers">
                  <CardTitle tag="p">Account Status</CardTitle>
                  <p />
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            {this.cardRows.map( (row, index) => {
              return(
                <Row style={index === 0 ? {paddingTop: 0} : {paddingTop: 7}}>
                  <Col md="6" xs="6">
                    <div className="text-left">
                      {row.title}
                    </div>
                  </Col>
                  <Col md="6" xs="6">
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
                <div className="text-left">
                button1
                </div>
              </Col>
              <Col md="6" xs="6">
                <div className="text-right">
                  button2
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
