import { Table } from "reactstrap";
import Invoice6TableHeader from "./Invoice6TableHeader";
import Invoice6Total from "./Invoice6Total";
import Invoice6Body from "./Invoice6Body";
import Invoice6Footer from "./Invoice6Footer";

const Invoice6Table = () => {
  return (
    <div>
      <div className="table-responsive invoice-table" id="table">
        <Table bordered striped>
          <tbody>
            <tr><Invoice6TableHeader /></tr>
            <Invoice6Body />
            <tr><Invoice6Total /></tr>
          </tbody>
        </Table>
      </div>
      <Invoice6Footer />
    </div>
  );
};

export default Invoice6Table;
