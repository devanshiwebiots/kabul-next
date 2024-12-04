'use client';
import { Card, CardBody, Container, Table } from "reactstrap";
import Invoice2Header from "./Invoice2Header";
import Invoice2Details from "./Invoice2Details";
import Invoice2Billing from "./Invoice2Billing";
import Invoice2Content from "./Invoice2Content";
import Invoice2Total from "./Invoice2Total";
import ActionButtons from "../Common/ActionButtons";

const InvoiceTwoContainer = () => {
  return (
    // <Container className="invoice-2">
    //   <Card>
    //     <CardBody>
    <Table style={{ width: "1070px", margin: "0 auto" }} className="table-wrapper table-responsive theme-scrollbar" borderless>
      <tbody>
        <tr><Invoice2Header /></tr>
        <tr><Invoice2Details /></tr>
        <tr><Invoice2Billing /></tr>
        <tr><Invoice2Content /></tr>
        <tr><Invoice2Total /></tr>
        <tr>
          <td>
            <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
          </td>
        </tr>
        <tr>
          <td><ActionButtons /></td>
        </tr>
      </tbody>
    </Table>
    //     </CardBody>
    //   </Card>
    // </Container>

  );
};

export default InvoiceTwoContainer;
