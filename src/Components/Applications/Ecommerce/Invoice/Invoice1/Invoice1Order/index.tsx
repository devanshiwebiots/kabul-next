import Invoice1OrderHeader from "./Invoice1OrderHeader";
import Invoice1OrderBody from "./Invoice1OrderBody";

const Invoice1Order = () => {
  return (
    <td>
      <table className="order-details" style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }} >
        <thead>
          <Invoice1OrderHeader />
        </thead>
        <tbody>
          <Invoice1OrderBody />
        </tbody>
      </table>
    </td>
  );
};

export default Invoice1Order;
