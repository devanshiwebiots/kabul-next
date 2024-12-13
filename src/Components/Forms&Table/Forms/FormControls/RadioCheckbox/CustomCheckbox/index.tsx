import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomCheckboxs } from "@/Constant";
import BorderedCheckboxs from "./BorderedCheckboxs";
import IconCheckboxs from "./IconCheckboxs";
import FilledCheckboxs from "./FilledCheckboxs";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomCheckboxData } from "@/Data/Forms";

const CustomCheckbox = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={CustomCheckboxs} span={CustomCheckboxData} />
        <CardBody>
          <Row className="g-3">
            <BorderedCheckboxs />
            <IconCheckboxs />
            <FilledCheckboxs />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomCheckbox;
