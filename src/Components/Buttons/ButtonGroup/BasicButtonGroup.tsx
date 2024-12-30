import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicButtonGroups } from "@/Constant";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonGroupButton from "./Common/CommonGroupButton";

const BasicButtonGroup = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={BasicButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <CommonGroupButton data={ButtonGroupData} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicButtonGroup;
