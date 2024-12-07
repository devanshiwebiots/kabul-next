"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Invoice6Header from "./Invoice6Header";
import UserDetails from "./UserDetails";
import Invoice6Table from "./Invoice6Table";
import Invoice6Buttons from "./Invoice6Buttons";

const InvoiceSixContainer = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Card>
            <CardBody>
              <div className="invoice">
                <div>
                  <Invoice6Header />
                  <hr />
                  <UserDetails />
                  <Invoice6Table />
                </div>
              </div>
              <Invoice6Buttons />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoiceSixContainer;
