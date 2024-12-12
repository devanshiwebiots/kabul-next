import { Card, Col } from "reactstrap";
import { InverseTables } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InverseTableBody, InverseTableData, InverseTableHead } from "@/Data/Tables";
import CommonTable from "./Common/CommonTable";

const InverseTable = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={InverseTables} span={InverseTableData} headClass="pb-18"/>
        <CommonTable tableClass="table-inverse" headData={InverseTableHead} headRowClass="border-bottom-light">
          {InverseTableBody?.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.office}</td>
              <td>{data.position}</td>
              <td>{data.salary}</td>
              <td>{data.joinDate}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
};

export default InverseTable;
