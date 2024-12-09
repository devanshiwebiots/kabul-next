import { InvoiceThreeData } from "@/Data/Ecommerce";

const Invoice3Body = () => {
  return (
    <>
      {InvoiceThreeData?.map((data,i)=>(
        <tr key={i}>
          <td style={{ padding: "18px 15px 18px 0", display: "flex", alignItems: "center",gap: 10, borderBottom: "1px solid #52526C4D"}} >
            <span style={{ width: 3, height: 37, backgroundColor: `#${data.color}` }} />
            <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
              <li>
                <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#000248" }}>{data.title} Admin template</h4>
                <span style={{ opacity: "0.8", fontSize: 16 }}>Regular License</span>
              </li>
            </ul>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid #52526C4D" }} >
            <span style={{ opacity: "0.8" }}>{data.quantity}</span>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid #52526C4D"}} >
            <span style={{ opacity: "0.8" }}>${data.price}</span>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid #52526C4D" }} >
            <span style={{ opacity: "0.8" }}>${data.total}</span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Invoice3Body;