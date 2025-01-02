import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath } from "@/Constant";
import { OfferBorderStyleDataList } from "@/Data/Forms";
import { Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const OfferStyleBorderForm = () => {
  return (
    <Form className="mega-inline offer-style">
      <Row className="flex-column">
        {OfferBorderStyleDataList?.map(({ color, image, spanText, check }, index) => (
          <Col xs={12} key={index}>
            <Card>
              <div className="d-flex p-20">
                <FormGroup className={`checkbox checkbox-${color}`} check>
                  <Input id={`checkbox-${index + 1}`} type="checkbox" defaultChecked={check} />
                  <Label className="my-0" htmlFor={`checkbox-${index + 1}`} check>
                    <span className="flex-grow-1">
                      <span className="d-flex list-behavior-1">
                        <span className="flex-shrink-0">
                          <RatioImage className="tab-img b-r-0 img-fluid" src={`${ImagePath}/email-template/${image}.jpg`} alt="image" />
                        </span>
                        <span className="flex-grow-1">
                          <span className="mb-0">{spanText}</span>
                        </span>
                      </span>
                    </span>
                  </Label>
                </FormGroup>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>
  )
};

export default OfferStyleBorderForm;
