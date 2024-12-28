import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CheckboxButtonGroups, Option1, Option2 } from "@/Constant";
import { ChechboxButtonGroupData, RadiobuttonDataList } from "@/Data/Buttons/ButtonGroup";
import { ButtonGroupProp } from "@/Types/Buttons";
import { Button, ButtonGroup, Card, CardBody, Col, Input, Label, Row } from "reactstrap";

const CheckBoxButtonGroup = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={CheckboxButtonGroups} span={ChechboxButtonGroupData} />
        <CardBody className="btn-group-showcase">
          <Row>
            {RadiobuttonDataList?.map(({ idOne, color, idTwo }: ButtonGroupProp, index) => (
              <Col sm={12} xl={6} key={index}>
                <ButtonGroup className="btn-option">
                  <Button color={color}>
                    <div className={`checkbox checkbox-${color}`}>
                      <Input id={`checkbox${idOne}`} type="checkbox" />
                      <Label htmlFor={`checkbox${idOne}`}>{Option1}</Label>
                    </div>
                  </Button>
                  <Button color={color}>
                    <div className={`checkbox checkbox-${color}`}>
                      <Input id={`checkbox${idTwo}`} type="checkbox" />
                      <Label htmlFor={`checkbox${idTwo}`}>{Option2}</Label>
                    </div>
                  </Button>
                </ButtonGroup>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CheckBoxButtonGroup