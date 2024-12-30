import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { OutlineEdgeButton, Left, Middle, Right } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CommonGroupButton from "./Common/CommonGroupButton";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";

const OutlineEdgesButton = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={OutlineEdgeButton} />
        <CardBody className="btn-group-showcase">
          <Row>
            <CommonGroupButton data={ButtonGroupData}  buttonClass="btn-group-pill" outline={true} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineEdgesButton