import Invoice1OrderHeader from "./Invoice1OrderHeader";
import Invoice1OrderBody from "./Invoice1OrderBody";
import { Table } from "reactstrap";

const Invoice1Order = () => {
  return (
    <td>
      <Table borderless className="order-details" style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }} >
        <thead>
          <Invoice1OrderHeader />
        </thead>
        <tbody>
          <Invoice1OrderBody />
        </tbody>
      </Table>
    </td>
  );
};

export default Invoice1Order;
