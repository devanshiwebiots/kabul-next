import { Email, ImagePath, Phone, Website } from "@/Constant";
import Image from "next/image";

const Invoice4RightLogo = () => {
  return (
    <td>
      <Image height={38} width={114} className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" style={{ marginBottom: 14 }} />
      <Image height={38} width={114} className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" style={{ marginBottom: 14 }} />
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }} >
        2118 Thornridge Cir. Syracuse, Connecticut 35624, United State
      </span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>{Phone} : (239) 555-0108</span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>{Email} : Kabul@themesforest.com</span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8"}}>{Website}: www.Kabulthemes.com</span>
    </td>
  );
};

export default Invoice4RightLogo;
