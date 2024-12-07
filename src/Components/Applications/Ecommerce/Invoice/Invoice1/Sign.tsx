import { AuthorizedSign, ImagePath } from "@/Constant";
import ActionButtons from "../Common/ActionButtons";
import { InvoicePrintType } from "@/Types/Ecommerce";
import Image from "next/image";

const Sign: React.FC<InvoicePrintType> = ({handlePrint}) => {
  return (
    <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 12 }}>
      <td>
        <Image height={49} width={154} priority src={`${ImagePath}/email-template/invoice-1/sign.png`} alt="sign" />
        <span style={{display: "block",background: "rgba(82, 82, 108, 0.3)",height: 1,width: 200,marginBottom: 10,}}/>
        <span style={{ color: "rgba(82, 82, 108, 0.8)" }}>{AuthorizedSign}</span>
      </td>
      <td>  
      <ActionButtons handlePrint={handlePrint} />
      </td>
    </tr>
  );
};

export default Sign;
