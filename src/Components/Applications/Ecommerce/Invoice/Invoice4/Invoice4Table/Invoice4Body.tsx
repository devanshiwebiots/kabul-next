import { InvoiceFourData } from "@/Data/Ecommerce";

const Invoice4Body = () => {
  return (
    <>
      {InvoiceFourData?.map((data, i) => (
        <tr key={i}>
          <td style={{ padding: 30 }}>
            <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#000248" }}>{data.title}</h4>
            <span style={{ opacity: "0.8", fontSize: 16 }}>Regular License</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ opacity: "0.8" }}>${data.price}.00</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ opacity: "0.8" }}>{data.quantity}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ color: "#000248", fontWeight: 600, opacity: "0.9" }}>${data.total}.00</span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Invoice4Body;
