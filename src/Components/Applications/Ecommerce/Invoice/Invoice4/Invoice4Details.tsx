import { InvoiceFourDetails } from "@/Data/Ecommerce";

const Invoice4Details = () => {
  return (
    <td>
      <table style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }}>
        <tbody>
          <tr>
            {InvoiceFourDetails?.map((data, i) => (
              <td style={{ background: "#F5F6F9", padding: "15px 25px" }} key={i}>
                <p style={{ fontSize: 16, fontWeight: 500, color: "52526C", opacity: "0.8", margin: 0, lineHeight: 2 }}>{data.title} :</p>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{data.value}</span>
              </td>
            ))}
          </tr>
           
        </tbody>
      </table>
    </td>
  );
};

export default Invoice4Details;
