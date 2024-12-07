import { AccountNo, Date, DueAmount, InvoiceNo } from "@/Constant";
import { Table } from "reactstrap";

const Invoice5Number = () => {
  return (
    <td>
      <Table style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }} >
        <tbody>
          <tr>
            <td style={{ background: "#F5F6F9", padding: "15px 25px" }} >
              <p style={{ fontSize: 16, fontWeight: 500, opacity: "0.8", margin: 0, lineHeight: 2 }} >{Date} :</p>
              <span style={{ fontSize: 18, fontWeight: 600 }}>10 Mar, 2023</span>
            </td>
            <td style={{ background: "#F5F6F9", padding: "15px 25px" }} >
              <p style={{ fontSize: 16, fontWeight: 500, opacity: "0.8", margin: 0, lineHeight: 2 }} >{InvoiceNo} :</p>
              <span style={{ fontSize: 18, fontWeight: 600 }}>#VL25000365</span>
            </td>
            <td style={{ background: "#F5F6F9", padding: "15px 25px" }}>
              <p style={{ fontSize: 16, fontWeight: 500, opacity: "0.8", margin: 0, lineHeight: 2 }}>{AccountNo} :</p>
              <span style={{ fontSize: 18, fontWeight: 600 }}>0981234098765</span>
            </td>
            <td style={{ background: "#F5F6F9", padding: "15px 25px" }} >
              <p style={{ fontSize: 16, fontWeight: 500, opacity: "0.8", margin: 0, lineHeight: 2 }} >{DueAmount} :</p>
              <span style={{ fontSize: 18, fontWeight: 600 }}>$7860.00 </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default Invoice5Number;
