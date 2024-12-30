import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineButtonGroups } from "@/Constant";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonGroupButton from "./Common/CommonGroupButton";

const OutlineButtons = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={OutlineButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <CommonGroupButton data={ButtonGroupData} buttonClass="btn-group" outline={true} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineButtons;
