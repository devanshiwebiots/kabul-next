import { PaymentTeams } from "@/Constant";
import Invoice4SubTotal from "./Invoice4SubTotal";
import { Table } from "reactstrap";

const Invoice4Total = () => {
  return (
    <td>
      <Table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "flex-end" }}>
            <td style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "#000248", fontSize: 16, fontWeight: 600 }}>{PaymentTeams} :</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, width: "55%" }}>This denotes a payment credit for a full month's supply.</span>
            </td>
            <td>
              <Invoice4SubTotal />
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default Invoice4Total;
