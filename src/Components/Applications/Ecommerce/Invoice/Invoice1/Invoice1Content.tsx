import { AmountDus, BilledTo, InvoiceDate, InvoiceNumber, BerlinMatchettVandelayGroupLTD, UnitedStateTitleText } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { getallCardTotal } from "@/Utils/EcommerceService";

const Invoice1Content = () => {
  const { cart, tax } = useAppSelector((state) => state.cartData);

  return (
    <td>
      <table className="bill-content" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "36%" }}>
              <span style={{ opacity: "0.8" }}>{BilledTo}</span>
              <h6 style={{ width: "46%" }}>{BerlinMatchettVandelayGroupLTD}</h6>
            </td>
            <td style={{ width: "21%" }}>
              <span style={{ opacity: "0.8" }}>{InvoiceDate}</span>
              <h6>09/03/2023</h6>
            </td>
            <td>
              <span style={{ opacity: "0.8" }}>{InvoiceNumber}</span>
              <h6>#VL25000365</h6>
            </td>
            <td style={{ textAlign: "right" }}>
              <span style={{ opacity: "0.8" }}>{AmountDus}</span>
              <h2>$ {getallCardTotal(cart) + getallCardTotal(cart) * tax / 100}</h2>
            </td>
          </tr>
          <tr>
            <td style={{ width: "36%" }}>
              <h6 style={{ width: "63%", paddingTop: 20 }}>{UnitedStateTitleText}</h6>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default Invoice1Content;
