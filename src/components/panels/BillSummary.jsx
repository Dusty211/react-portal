
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

class BillSummary extends React.Component {
  cardRows = [
    {
      title: "Billing Period End Date",
      data: "12/22/2018"
    },
    {
      title: "Previous Balance",
      data: "($38.86)"
    },
    {
      title: "Current Period",
      data: "$118.33"
    },
    {
      title: "Due By",
      data: "11/29/2018"
    },
    {
      title: "Total Account Balance",
      data: "$155.43"
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
                  <CardTitle tag="p">Bill Summary</CardTitle>
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

export default BillSummary;
