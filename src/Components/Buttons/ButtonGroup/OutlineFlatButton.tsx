import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineFlatButtons } from "@/Constant";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonGroupButton from "./Common/CommonGroupButton";

const OutlineFlatButton = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={OutlineFlatButtons} />
        <CardBody className="btn-group-showcase">
          <Row>
            <CommonGroupButton data={ButtonGroupData} buttonClass="btn-group-square" outline={true} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineFlatButton