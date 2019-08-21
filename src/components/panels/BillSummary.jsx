
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

class BillSummary extends React.Component {
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
      <div className="content h-100" style={{paddingBottom: 25}}>
        <Card className=" h-100" > 
          <CardHeader>
            <Row>
              <Col>
                <div className="text-left">
                  <CardTitle tag="h4">Bill Summary</CardTitle>
                  <p />
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            {this.cardRows.map( (row, index) => {
              return(
                <Row key={`${row.title}+${index}`} style={row.bold ? {paddingBottom: 15, fontWeight: 'bold'} : {paddingBottom: 15} }>
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
                    Pay Now
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

export default BillSummary;
