import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicTableWithBorderBottomColor, ImagePath } from "@/Constant";
import { BasicTableBody, BasicTableBorderColor, BasicTableHead } from "@/Data/Tables/ReactstrapTables";
import { Badge, Card, Col } from "reactstrap";
import CommonTable from "./Common/CommonTable";
import Image from "next/image";

const BasicTableBorderBottomColor = () => {
  return (
    <Col sm={12}>
      <Card className="basicborder-table">
        <CommonCardHeader title={BasicTableWithBorderBottomColor} span={BasicTableBorderColor} headClass="pb-18"/>
        <CommonTable headData={BasicTableHead} headRowClass="border-bottom-primary">
          {BasicTableBody?.map((data) => (
            <tr className={`border-bottom-${data.color}`} key={data.id}>
              <th scope="row">{data.id}</th>
              <td>
                <Image height={30} width={30} priority className="me-2" src={`${ImagePath}/user/${data.image}.jpg`} alt="users" />
                {data.firstname}
              </td>
              <td>{data.lastName}</td>
              <td>{data.userName}</td>
              <td>{data.designation}</td>
              <td>{data.company}</td>
              <td>
                <Badge color={`light-${data.badgeColor}`} className={`text-${data.badgeColor}`}>{data.language}</Badge>
              </td>
              <td>{data.country}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
};

export default BasicTableBorderBottomColor;
