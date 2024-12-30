import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EdgesButtonGroups } from "@/Constant";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonGroupButton from "./Common/CommonGroupButton";

const EdgesButtonGroup = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={EdgesButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <CommonGroupButton data={ButtonGroupData} buttonClass="btn-group-pill" />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EdgesButtonGroup;
