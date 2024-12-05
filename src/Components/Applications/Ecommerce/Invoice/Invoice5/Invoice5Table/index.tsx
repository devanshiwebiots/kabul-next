import Invoice5TableHeader from "./Invoice5TableHeader";
import Invoice5Body from "./Invoice5Body";
import Invoice5Total from "./Invoice5Total";

const Invoice5Table = () => {
  return (
    <td>
      <table style={{ width: "100%", borderSpacing: 0 }} >
        <thead>
            <Invoice5TableHeader />
        </thead>
        <tbody>
            <Invoice5Body />
            <Invoice5Total />
        </tbody>
      </table>
    </td>
  );
};

export default Invoice5Table;
