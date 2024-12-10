import { Card, CardBody, Col, Row } from "reactstrap";
import { AnimatedButton } from "@/Constant";
import AnimatedRadio from "./AnimatedRadio";
import AnimatedCheckbox from "./AnimatedCheckbox";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AnimatedButtonData } from "@/Data/Forms";

const AnimatedButtons = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={AnimatedButton} span={AnimatedButtonData} />
        <CardBody>
          <Row className="g-3">
            <AnimatedRadio />
            <AnimatedCheckbox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedButtons;
