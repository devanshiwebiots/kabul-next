import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Offset, OffsetClass, OffsetValueClass } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridCommonCardFooter from "./Common/GridCommonCardFooter";
import { OffsetData, OffsetList } from "@/Data/UiKits/Grid";

const OffsetCard = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={Offset} span={OffsetData} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            {OffsetList?.map(({ smallSize, extraSmallSize, className, item }, index) => (
              <Col sm={smallSize} xs={extraSmallSize} className={className} key={index}><span>{item}</span></Col>
            ))}
          </Row>
        </CardBody>
        <GridCommonCardFooter className={OffsetClass} valueClass={OffsetValueClass} />
      </Card>
    </Col>
  );
};

export default OffsetCard;
