import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Option1, Option2, RadioButtonGroups } from "@/Constant";
import { ButtonGroupProp } from "@/Types/Buttons";
import { Button, ButtonGroup, Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import { RadiobuttonDataList, RadioButtonGroupData } from "../../../Data/Buttons/ButtonGroup";

const RadioButtonGroup = () => {
  return (
    <Col xs={12}>
      <Card className="radio-checkbox-group">
        <CommonCardHeader title={RadioButtonGroups} span={RadioButtonGroupData} />
        <CardBody className="btn-group-showcase">
          <Row>
            {RadiobuttonDataList?.map(({ idOne, color, idTwo, name }: ButtonGroupProp, index) => (
              <Col xxl={4} md={6} sm={12} key={index}>
                <div className="btn-radio">
                  <ButtonGroup>
                    <Button color={color}>
                      <div className={`radio radio-${color}`}>
                        <Input id={`radio${idOne}`} type="radio" name={name} />
                        <Label htmlFor={`radio${idOne}`}>{Option1}</Label>
                      </div>
                    </Button>
                    <Button color={color}>
                      <div className={`radio radio-${color}`}>
                        <Input id={`radio${idTwo}`} type="radio" name={name} />
                        <Label htmlFor={`radio${idTwo}`}>{Option2}</Label>
                      </div>
                    </Button>
                  </ButtonGroup>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadioButtonGroup;
