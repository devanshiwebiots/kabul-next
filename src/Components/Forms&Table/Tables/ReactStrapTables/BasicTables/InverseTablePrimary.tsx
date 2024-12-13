import { Card, Col } from "reactstrap";
import { InverseTablWithPrimaryBackgrounds } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InverseTableWithBackgroundBody, InverseTableWithBackgroundData, InverseTableWithBackgroundHead } from "@/Data/Tables/ReactstrapTables";
import CommonTable from "./Common/CommonTable";

const InverseTablePrimary = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={InverseTablWithPrimaryBackgrounds} span={InverseTableWithBackgroundData} headClass="pb-18" />
        <CommonTable strip headData={InverseTableWithBackgroundHead} tableClass='bg-primary inverse-primary' headClass='tbl-strip-thad-bdr' classname="bg-primary">
          {InverseTableWithBackgroundBody?.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.company}</td>
              <td>{data.salary}</td>
              <td>{data.email}</td>
              <td>{data.position}</td>
              <td>{data.country}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  )
}

export default InverseTablePrimary