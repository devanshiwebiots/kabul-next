'use client';
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BillingDetails } from "@/Constant";
import { Card, CardBody, Container, Row } from "reactstrap";
import CheckoutTableData from "./CheckoutTableData";
import ProductCheckout from "./ProductCheckout"; 

const CheckOutContainer = () => {
  return (
    <Container fluid>
      <Card className="checkout">
        <CommonCardHeader title={BillingDetails} />
        <CardBody>
          <Row>
            <CheckoutTableData />
            <ProductCheckout />
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CheckOutContainer;
