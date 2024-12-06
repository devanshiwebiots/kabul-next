import { ContactNo, Email, ImagePath, Website } from "@/Constant";
import Image from "next/image";

const Invoice2Header = () => {
  return (
    <td>
      <table style={{ width: "100%" }} >
        <tbody>
          <tr>
            <td style={{ minWidth: 347, width: "30%" }}>
              <Image height={38} width={114} priority className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
              <Image height={38} width={114} className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" />
              <address style={{ opacity: "0.8", width: "80%", marginTop: 10, fontStyle: "normal" }}>
                <span style={{ fontSize: 16, lineHeight: "1.5", fontWeight: 500 }}>1982 Harvest Lane New York, NY12210 United State</span>
              </address>
            </td>
            <td style={{ opacity: "0.8", textAlign: "end" }}>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 500 }}>
                {Email} : Kabul@themesforest.com
              </span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 500 }}>
                {Website}: www.Kabulthemes.com
              </span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 500 }} >
                {ContactNo} : (316) 555-0116
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default Invoice2Header;
