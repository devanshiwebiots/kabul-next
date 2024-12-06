import { InvoiceFourData } from "@/Data/Ecommerce";

const Invoice5Body = () => {
  return (
    <>
      {InvoiceFourData?.map((data, i) => (
        <tr key={i}>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "#F5F6F9" }}>
            <span style={{ opacity: "0.8", fontWeight: 600 }}>{i + 1}</span>
          </td>
          <td style={{ padding: 16, borderBottom: "1px solid rgba(82, 82, 108, 0.2)" }}>
            <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#000248" }}>{data.title}</h4>
            <span style={{ opacity: "0.8", fontSize: 16 }}>Regular License</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "#F5F6F9" }}>
            <span style={{ fontWeight: 600 }}>${data.price}.00</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)" }}>
            <span style={{ fontWeight: 600 }}>{data.quantity}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "#F5F6F9" }}>
            <span style={{ color: "#000248", fontWeight: 600, opacity: "0.9" }}>${data.total}.00</span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Invoice5Body;
