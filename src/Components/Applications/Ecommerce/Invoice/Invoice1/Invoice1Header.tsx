import { ImagePath } from "@/Constant";
import Image from "next/image";

const Invoice1Header = () => {
  return (
    <td>
      <table className="logo-wrappper" style={{width:"100%"}}>
        <tbody>
          <tr>
            <td>
              <Image height={38} width={114} priority className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
              <Image height={38} width={114} priority className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" />
              <span style={{ color: "#52526C", opacity: "0.8", display: "block", marginTop: 10 }} >202-555-0258</span>
            </td>
            <td className="address" style={{ textAlign: "right", opacity: "0.8", width: "16%" }} >
              <span>1982 Harvest Lane New York, NY12210 United State</span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default Invoice1Header;
