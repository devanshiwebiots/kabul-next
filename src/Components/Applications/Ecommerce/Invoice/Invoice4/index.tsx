"use client";
import ActionButtons from "../Common/ActionButtons";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal";

const InvoiceFourContainer = () => {
  return (
    <table style={{ width: "1110px", margin: "0 auto" }}>
      <tbody>
        <tr>
          <InvoiceFourHeader />
        </tr>
        <tr>
          <InvoiceFourDetail />
        </tr>
        <tr>
          <InvoiceFourTable />
        </tr>
        <tr>
          <td style={{ height: "3px", width: "100%", padding: "0", background: "linear-gradient(90deg, #678f44 20.61%, rgba(111, 90, 153, 0) 103.6%)", display: "block", marginTop: 6 }}></td>
        </tr>
        <tr>
          <InvoiceTotal />
        </tr>
        <tr>
          <td>
            <ActionButtons />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvoiceFourContainer;
