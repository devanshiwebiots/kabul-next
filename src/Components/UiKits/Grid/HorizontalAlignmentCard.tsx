import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalAlignment, HorizontalAlignmentClass, HorizontalAlignmentValueClass } from "@/Constant";
import { AlignmentData, HorizontalAlignmentHeading } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridCommonCardFooter from "./Common/GridCommonCardFooter";

const HorizontalAlignmentCard = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={HorizontalAlignment} span={HorizontalAlignmentHeading} />
        <CardBody className="grid-showcase grid-align">
          {AlignmentData?.map((item, index) => (
            <Row className={`justify-content-${item} bg-light`} key={index}>
              <Col xs={5}><span className="bg-white text-dark">One column</span></Col>
              <Col xs={5}><span className="bg-white text-dark">Two column</span></Col>
            </Row>
          ))}
        </CardBody>
        <GridCommonCardFooter className={HorizontalAlignmentClass} valueClass={HorizontalAlignmentValueClass} />
      </Card>
    </Col>
  );
};

export default HorizontalAlignmentCard;
