import { Email, Invoice, InvoiceTo, Phone, Website } from "@/Constant";
import Invoice4RightLogo from "./Invoice4RightLogo";
import { Table } from "reactstrap";

const Invoice4Header = () => {
  return (
    <td>
      <Table style={{ width: "100%" }} >
        <tbody>
          <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between" }} >
            <td>
              <h4 style={{ fontSize: 42, fontWeight: 600, color: "#000248", margin: 0 }} >{Invoice}</h4>
              <ul style={{ listStyle: "none", display: "flex", gap: 15, padding: 0, margin: "20px 0" }}>
                <li>
                  <span style={{ color: "#52526C", fontSize: 18, fontWeight: 600, opacity: "0.8" }} >{InvoiceTo} :</span>
                </li>
                <li>
                  <span style={{ fontWeight: 600, fontSize: 18, color: "#000248", display: "block", marginBottom: 8 }}>Brooklyn Simmons</span>
                  <span style={{ width: "75%", display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }} >2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                  <span style={{ lineHeight: "1.9", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }} >{Phone} : (219) 555-0114</span>
                  <span style={{ lineHeight: "1.7", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }} >{Email} : yourmail@themesforest.com</span>
                  <span style={{ lineHeight: "1.7", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }} >{Website}: www.websites.com</span>
                </li>
              </ul>
            </td>
            <Invoice4RightLogo />
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default Invoice4Header;
