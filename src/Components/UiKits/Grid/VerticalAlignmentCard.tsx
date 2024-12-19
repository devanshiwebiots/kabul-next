import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VerticalAlignment, VerticalAlignmentClass, VerticalAlignmentValueClass } from "@/Constant";
import { AlignmentData, VerticalAlignmentHeading } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridCommonCardFooter from "./Common/GridCommonCardFooter";

const VerticalAlignmentCard = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={VerticalAlignment} span={VerticalAlignmentHeading} />
        <CardBody className="grid-showcase mb-0">
          <Row>
            {AlignmentData?.map((item, index) => (
              <Col lg={4} key={index}>
                <Row className={`grid-vertical align-items-${item} m-1 g-2 bg-light`}>
                  <Col xs={6}><span className="bg-white">one column</span></Col>
                  <Col xs={6}><span className="bg-white">two column</span></Col>
                </Row>
              </Col>
            ))}
          </Row>
        </CardBody>
        <GridCommonCardFooter className={VerticalAlignmentClass} valueClass={VerticalAlignmentValueClass} />
      </Card>
    </Col>
  );
};

export default VerticalAlignmentCard;
