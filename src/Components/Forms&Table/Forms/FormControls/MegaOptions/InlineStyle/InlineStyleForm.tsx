import { InlineStyeDataList } from "@/Data/Forms";
import { Badge, Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const InlineStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {InlineStyeDataList?.map(({ color, badgeTitle, digits, shippingText }, index) => (
          <Col sm={6} key={index}>
            <Card>
              <div className="d-flex p-20">
                <FormGroup className={`radio radio-${color} m-0 w-100`} check>
                  <Input id={`radio=${index + 1}`} type="radio" name="radio1" value="option1" />
                  <Label className="mb-0 w-100" htmlFor={`radio=${index + 1}`} check>
                    <span className="flex-grow-1">
                      <span className="mt-0 mega-title-badge">
                        {badgeTitle}
                        <Badge color={color} className="pull-right digits">{digits}</Badge>
                      </span>
                      <span>Estimated {shippingText} Day Shipping ( Duties end taxes may be due upon delivery )</span>
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

export default InlineStyleForm;