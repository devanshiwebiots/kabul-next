import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { GridForColumn } from "@/Constant";
import { ColumnData, GridColumnDetails } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";

const GridColumnCard = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={GridForColumn} span={ColumnData} />
        <CardBody className="grid-showcase">
          <Row>
            {GridColumnDetails?.map((item, index) => (
              <Col md={item} className="text-center" key={index}><span>col-md-{item}</span></Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumnCard;
