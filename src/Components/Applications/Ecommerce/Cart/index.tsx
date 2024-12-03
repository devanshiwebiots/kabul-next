'use client';
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Cart } from "@/Constant";
import { Card, CardBody, Col, Container } from "reactstrap";
import TableData from "./TableData";

const CartContainer = () => {
  return (
    <Container fluid>
      <Col sm={12}>
        <Card>
          <CommonCardHeader title={Cart} />
          <CardBody>
            <TableData />
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
};

export default CartContainer;
