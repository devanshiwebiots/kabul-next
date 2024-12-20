import { Description, Subtotal } from "@/Constant";
import Invoice4Body from "./Invoice4Body";
import { InvoiceTableHeader } from "@/Data/Ecommerce";
import { Table } from "reactstrap";

const Invoice4Table = () => {
  return (
    <td>
      <Table style={{ width: "100%", borderSpacing: 0 }}>
        <thead>
          <tr style={{ background: "var(--theme-default)" }}>
            {InvoiceTableHeader?.map((data, i) => (
              <th style={{ border: "none", padding: "18px 15px", textAlign: data === Description ? "left" : "center", position: data === Description ? "relative" : undefined, borderTopLeftRadius: data === Description ? 10 : 0, borderTopRightRadius: data === Subtotal ? 10 : 0 }} key={i}>
                <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Invoice4Body />
        </tbody>
      </Table>
    </td>
  );
};

export default Invoice4Table;
