import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LargeEdgesButtonGroups } from "@/Constant";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonGroupButton from "./Common/CommonGroupButton";

const LargeEdgesButtonGroup = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={LargeEdgesButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <CommonGroupButton data={ButtonGroupData} buttonClass="btn-group-pill" size="lg" />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LargeEdgesButtonGroup