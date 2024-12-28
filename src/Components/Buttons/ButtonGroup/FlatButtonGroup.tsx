import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlatButtonGroups } from "@/Constant";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonGroupButton from "./Common/CommonGroupButton";

const FlatButtonGroup = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={FlatButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <CommonGroupButton data={ButtonGroupData} buttonClass="btn-group-square" />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FlatButtonGroup