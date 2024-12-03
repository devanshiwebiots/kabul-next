"use client";
import { Col, Container, Row } from "reactstrap";
import DataTableOrderHistory from "./DataTableOrderHistory";
import AllOrders from "./AllOrders";

const OrderHistoryContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <AllOrders />
          <DataTableOrderHistory />
        </Col>
      </Row>
    </Container>
  );
};

export default OrderHistoryContainer;
