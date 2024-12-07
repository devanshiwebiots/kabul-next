import { ShippingRate, Subtotal, TotalAmount, Vat } from "@/Constant";
import { Table } from "reactstrap";

const Invoice2Total = () => {
  return (
    <td>
      <Table borderless style={{ float: "right" }}>
        <tfoot>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", paddingTop: 15 }}>
              <span style={{ fontSize: 18, fontWeight: 400, color: "#52526C" }}>{Subtotal} :</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 15 }}>
              <span style={{ fontSize: "18px" }}>$26,400.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0" }}>
              <span style={{ fontSize: 18, fontWeight: 400, color: "#52526C" }}>{Vat} (0%) :</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 0 }} >
              <span style={{ fontSize: "18px" }}>$0.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", minWidth: 200 }}>
              <span style={{ fontSize: 18, fontWeight: 400, color: "#52526C" }}> {ShippingRate} : </span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 0 }} >
              <span style={{ fontSize: "18px" }}>$10.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "12px 24px 5px 0", minWidth: 200 }}>
              <span style={{ fontWeight: 600, fontSize: 20, color: "rgba(0, 2, 72, 1)" }}>
                {TotalAmount} :
              </span>
            </td>
            <td style={{ padding: "12px 24px 5px 0", textAlign: "left" }} >
              <span style={{ fontWeight: 500, fontSize: 20, color: "var(--theme-default)" }} >
                $26,410.00
              </span>
            </td>
          </tr>
        </tfoot>
      </Table>
    </td>
  );
};

export default Invoice2Total;
