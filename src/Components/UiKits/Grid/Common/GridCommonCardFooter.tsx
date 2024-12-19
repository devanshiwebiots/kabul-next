import { Class, ValueOfClass } from "@/Constant";
import { GridCommonCardFooterType } from "@/Types/UiKits";
import { CardFooter, Table } from "reactstrap";

const GridCommonCardFooter:React.FC<GridCommonCardFooterType> = ({ className, valueClass }) => {
  return (
    <CardFooter>
      <div className="table-responsive custom-scrollbar">
        <Table borderless className="w-100">
          <tbody>
            <tr>
              <th>{Class}</th>
              <th>{ValueOfClass}</th>
            </tr>
            <tr>
              <td><code>{className}</code></td>
              <td>{valueClass}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </CardFooter>
  );
};

export default GridCommonCardFooter;
