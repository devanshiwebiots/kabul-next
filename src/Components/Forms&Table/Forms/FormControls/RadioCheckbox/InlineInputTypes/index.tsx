import { Card, CardBody, Col, Row } from "reactstrap";
import { InlineInputType } from "@/Constant";
import InlineSwitch from "./InlineSwitch";
import InlineRadios from "./InlineRadios";
import InlineCheckboxs from "./InlineCheckboxs";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InlineInputData } from "@/Data/Forms";

const InlineInputTypes = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={InlineInputType} span={InlineInputData} />
        <CardBody>
          <Row className="g-3">
            <InlineCheckboxs />
            <InlineRadios />
            <InlineSwitch />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineInputTypes;
