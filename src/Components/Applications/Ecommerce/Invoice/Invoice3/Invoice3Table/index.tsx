import Invoice3Body from "./Invoice3Body";
import { InvoiceThreeHeader } from "@/Data/Ecommerce";

const Invoice3Table = () => {
  return (
    <td>
      <table style={{ width: "100%", borderSpacing: 0 }} >
        <thead>
          <tr style={{ background: "var(--theme-default)" }}>
            {InvoiceThreeHeader?.map((data, i) => (
              <th style={{ padding: "18px 15px", textAlign: i === 0 ? "left" : "center", borderInline: i === 3 ? "" : "3px solid #fff" }} key={i}>
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Invoice3Body />
        </tbody>
      </table>
    </td>
  );
};

export default Invoice3Table;
