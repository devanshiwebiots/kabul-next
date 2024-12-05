import { ImagePath, Invoice } from "@/Constant";
import Image from "next/image";

const Invoice3Header = () => {
  return (
    <td>
      <table style={{ width: "100%", backgroundImage: `url(${ImagePath}/email-template/invoice-3/bg-0.png)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: 10 }} >
        <tbody>
          <tr>
            <td style={{ color: "#52526C", padding: "30px 0 30px 30px" }}>
              <Image height={38} width={114} priority src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
              <address style={{ opacity: "0.8", width: "36%", marginTop: 10, fontStyle: "normal" }}>
                <span style={{ fontSize: 18, lineHeight: "1.5", fontWeight: 500 }} >1982 Harvest Lane New York, NY12210 United State</span>
              </address>
            </td>
            <td style={{ textAlign: "end", padding: "30px 30px 30px 0" }}>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 700 }}>{Invoice}</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 500 }}>Receipt #1923195</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 500 }}>May 02, 2024
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default Invoice3Header;
