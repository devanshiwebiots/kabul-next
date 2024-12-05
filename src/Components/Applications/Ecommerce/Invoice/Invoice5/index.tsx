"use client";
import Invoice5Header from "./Invoice5Header";
import Invoice5Number from "./Invoice5Number";
import Invoice5Table from "./Invoice5Table";
import Sign from "./Sign";

const InvoiceFiveContainer = () => {
  return (
    <table style={{ width: "1100px", margin: "0 auto" }}>
      <tbody>
        <tr>
          <td><Invoice5Header /></td>
        </tr>
        <tr><Invoice5Number /></tr>
        <tr><Invoice5Table /></tr>
        <Sign />
      </tbody>
    </table>
  );
};

export default InvoiceFiveContainer;
