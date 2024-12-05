"use client";
import Invoice4Details from "./Invoice4Details";
import Invoice4Header from "./Invoice4Header";
import Invoice4Table from "./Invoice4Table";
import Invoice4Total from "./Invoice4Total";
import Sign from "./Sign";

const InvoiceFourContainer = () => {
  return (
    <table style={{ width: "1110px", margin: "0 auto" }}>
      <tbody>
        <tr><Invoice4Header /></tr>
        <tr><Invoice4Details /></tr>
        <tr><Invoice4Table /></tr>
        <tr>
          <td style={{ height: "3px", width: "100%", background: "linear-gradient(90deg, #678f44 20.61%, rgba(111, 90, 153, 0) 103.6%)", display: "block" }}></td>
        </tr>
        <tr><Invoice4Total />
        </tr>
        <Sign />
      </tbody>
    </table>
  );
};

export default InvoiceFourContainer;
