"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Table } from "reactstrap";
import BackImage from "./BackImage";
import Invoice1Content from "./Invoice1Content";
import Invoice1Header from "./Invoice1Header";
import Invoice1Order from "./Invoice1Order";
import Sign from "./Sign";

const InvoiceOneContainer = () => {

  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div ref={contentRef}>
      <Table borderless className="table-wrapper">
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
    </div>
  );
};

export default InvoiceOneContainer;
