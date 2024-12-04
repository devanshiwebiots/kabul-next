"use client";
import React, { useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import Invoice1Header from "./Invoice1Header";
import BackImage from "./BackImage";
import Invoice1Content from "./Invoice1Content";
import Invoice1Order from "./Invoice1Order";
import Sign from "./Sign";
import { useReactToPrint } from "react-to-print";

const InvoiceOneContainer = () => {

  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div ref={contentRef}>
      {/* <Container>
          <Card className="invoice-1">
            <CardBody> */}
      <Table className="table-wrapper" borderless>
        <tbody>
          <tr><Invoice1Header /></tr>
          <tr><BackImage /></tr>
          <tr><Invoice1Content /></tr>
          <tr><Invoice1Order /></tr>
        </tbody>
        <tbody>
          <Sign handlePrint={handlePrint} />
        </tbody>
      </Table>
      {/* </CardBody>
          </Card>
        </Container> */}
    </div>
  );
};

export default InvoiceOneContainer;
