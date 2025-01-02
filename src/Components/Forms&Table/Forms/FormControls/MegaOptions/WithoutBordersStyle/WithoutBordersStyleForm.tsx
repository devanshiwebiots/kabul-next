import { WithoutBorderDataList } from "@/Data/Forms";
import { Badge, Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const WithoutBordersStyleForm = () => {
  return (
    <Form className="mega-inline plain-style">
      <Row>
        {WithoutBorderDataList?.map(({ color, badgeTitle, digits, plansText, check }, index) => (
          <Col sm={6} key={index}>
            <Card>
              <div className="d-flex p-20">
                <FormGroup className={`checkbox checkbox-${color} m-0`} check>
                  <Input id={`checkbox${index + 1}`} type="checkbox" defaultChecked={check} />
                  <Label htmlFor={`checkbox${index + 1}`} check>
                    <span className="flex-grow-1 megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        ${badgeTitle}
                        <Badge color={color} className="pull-right digits">{digits}</Badge>
                      </span>
                      <span> {plansText}</span>
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

export default WithoutBordersStyleForm;
