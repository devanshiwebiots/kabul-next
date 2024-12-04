'use client'
import ActionButtons from "../Common/ActionButtons";
import Invoice3BankTransfer from "./Invoice3BankTransfer";
import Invoice3ClientDetails from "./Invoice3ClientDetails";
import Invoice3Header from "./Invoice3Header";
import Invoice3Table from "./Invoice3Table";

const InvoiceThreeContainer = () => {
  return (
    <table style={{ width: "1075px", margin: "0 auto" }}>
      <tbody>
        <tr><Invoice3Header /></tr>
        <tr><Invoice3ClientDetails /></tr>
        <tr>
          <td>
            <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }}></span>
          </td>
        </tr>
        <tr><Invoice3Table /></tr>
        <tr><Invoice3BankTransfer /></tr>
        <tr>
          <td>
            <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 30 }} />
          </td>
        </tr>
        <tr>
          <td><ActionButtons /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceThreeContainer;
