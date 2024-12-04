import { Table } from "reactstrap";
import Invoice2Header from "./Invoice2Header";
import Invoice2Data from "./Invoice2Data";

const Invoice2Content = () => {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, border: "1px dashed rgba(82, 82, 108, 0.1)"}}>
        <thead>
          <tr style={{ background: "var(--theme-default)", borderRadius: "5.47059px", overflow: "hidden", boxShadow: "0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)" }} >
            <Invoice2Header />
          </tr>
        </thead>
        <tbody>
            <Invoice2Data />
        </tbody>
      </Table>
    </td>
  );
};

export default Invoice2Content;
