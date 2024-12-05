import { ImagePath } from "@/Constant";
import Invoice5Details from "./Invoice5Details";
import Invoice5RightSide from "./Invoice5RightSide";
import Image from "next/image";
import Invoice5Address from "./Invoice5Address";

const Invoice5Header = () => {
  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <td>
            <Image height={38} width={114} className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
            <Image height={38} width={114} className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" />
          </td>
          <td><Invoice5RightSide /></td>
        </tr>
        <tr style={{ display: "flex", justifyContent: "space-between" }}>
          <Invoice5Address />
          <Invoice5Details />
        </tr>
      </tbody>
    </table>
  );
};

export default Invoice5Header;
