import { Description } from "@/Constant";
import Invoice4Body from "./Invoice4Body";
import { InvoiceTableHeader } from "@/Data/Ecommerce";

const Invoice4Table = () => {
  return (
    <td>
      <table style={{ width: "100%", borderSpacing: 0 }}>
        <thead>
          <tr style={{ background: "var(--theme-default)" }}>
            {InvoiceTableHeader?.map((data, i) => (
              <th style={{ border:"none", padding: "18px 15px", textAlign: data === Description ? "left" : "center", position: data === Description ? "relative" : undefined, borderTopLeftRadius: data === Description ? 10 : 0 }} key={i}>
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Invoice4Body />
        </tbody>
      </table>
    </td>
  );
};

export default Invoice4Table;
