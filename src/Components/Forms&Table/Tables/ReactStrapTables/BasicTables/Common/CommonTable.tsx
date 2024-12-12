import { CommonTableProp } from "@/Types/Tables";
import { Table } from "reactstrap";

const CommonTable :React.FC<CommonTableProp>= ({ tableClass, strip, caption, size, hover, headClass, headRowClass, headData, children ,classname}) => {
  return (
    <div className={`table-responsive theme-scrollbar ${tableClass ? tableClass : ""}`}>
      <Table striped={strip} hover={hover} size={size} className={classname}>
        {caption && <caption>{caption}</caption>}
        <thead className={headClass}>
          <tr className={headRowClass}>
            {headData?.map((head) => (
              <th key={head.id} scope="col">
                {head.head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
     </div>
  );
};

export default CommonTable;

