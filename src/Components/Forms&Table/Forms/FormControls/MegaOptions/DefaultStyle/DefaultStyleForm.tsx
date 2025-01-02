import { DefaultFormData } from "@/Data/Forms";
import { Badge, Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const DefaultStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {DefaultFormData?.map(({ color, badgeTitle, digits, shippingText }, index) => (
          <Col sm={6} key={index}>
            <Card>
              <div className="d-flex p-20">
                <FormGroup className={`radio radio-${color} m-0"`} check>
                  <Input id={`radio${index + 1}`} type="radio" name="radio1" value="option1" />
                  <Label htmlFor={`radio${index + 1}`} check>
                    <span className="flex-grow-1 megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {badgeTitle}
                        <Badge color={color} className="pull-right digits">{digits} INR</Badge>
                      </span>
                      <span>Estimated {shippingText} Day Shipping ( Duties end tax may be due delivery )</span>
                    </span>
                  </Label>
                </FormGroup>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>
  );
};

export default DefaultStyleForm;
