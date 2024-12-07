import { ImagePath } from "@/Constant"
import Image from "next/image"
import ActionButtons from "../Common/ActionButtons"

const Invoice4Sign = () => {
    return (
        <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <td>
                <Image height={49} width={154} priority src={`${ImagePath}/email-template/invoice-3/sign.png`} alt="sign" />
                <span style={{ color: '#000248', display: 'block', fontSize: 18, fontWeight: 600 }}>Laurine T. Ebbert</span>
                <span style={{ color: '#52526C', display: 'block', fontSize: 14, paddingTop: 5 }}>( Designer )</span>
            </td>
            <td>
                <ActionButtons />
            </td>
        </tr>
    )
}

export default Invoice4Sign
