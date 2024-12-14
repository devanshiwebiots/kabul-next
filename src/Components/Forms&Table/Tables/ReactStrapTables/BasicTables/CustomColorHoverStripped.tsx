import { Card, Col } from "reactstrap";
import { CustomColorHoverStrippedTitle } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomColorHoverBody, CustomColorHoverData, CustomColorHoverHead } from "@/Data/Tables/ReactstrapTables";
import CommonTable from "./Common/CommonTable";

const CustomColorHoverStripped = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={CustomColorHoverStrippedTitle} span={CustomColorHoverData} headClass="pb-18" />
        <CommonTable strip hover classname="bg-primary" tableClass="bg-primary inverse-primary" headClass="tbl-strip-thad-bdr" headData={CustomColorHoverHead} >
          {CustomColorHoverBody?.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.year}</td>
              <td>{data.studio}</td>
              <td>{data.budget}</td>
              <td>{data.boxOffice}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
}

export default CustomColorHoverStripped