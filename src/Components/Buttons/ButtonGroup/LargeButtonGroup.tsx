import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LargeButtonGroups } from "@/Constant";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonGroupButton from "./Common/CommonGroupButton";

const LargeButtonGroup = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={LargeButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <CommonGroupButton data={ButtonGroupData} size="lg" />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LargeButtonGroup