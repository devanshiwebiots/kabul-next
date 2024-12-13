import { HomeAndOfficeData } from "@/Data/Forms";
import { ShippingInformationCommonProps } from "@/Types/Forms";
import { Col, Row, FormGroup, Input, Label } from "reactstrap";

const HomeAndOfficeAddress :React.FC<ShippingInformationCommonProps> = ({radioBoxValues,getUserData,}) => {
  const { address } = radioBoxValues;

  return (
    <Row className="g-3">
      {HomeAndOfficeData?.map((data, index) => (
        <Col xxl={4} sm={6} key={index}>
          <div className="card-wrapper border rounded-3 h-100 light-card shipping-wizard">
            <div className="collect-address">
              <div className="d-flex gap-2 align-items-center">
                <FormGroup check className="radio radio-primary">
                  <Input id={`shipping-choose${index+1}`} type="radio" name="address" value={`shipping-choose${index+1}`} checked={address === `shipping-choose${index+1}`} onChange={getUserData}/>
                  <Label className="mb-0" htmlFor={`shipping-choose${index+1}`} check>{data.label}</Label>
                </FormGroup>
              </div>
              <div className="card-icon">
                <i className="fa fa-pencil" />
                <i className="fa fa-trash-o" />
              </div>
            </div>
            <div className="shipping-address p-0">
              <h6>{data.name}</h6>
              <span>Address: {data.address}</span>
              <span>Contact: {data.contact}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default HomeAndOfficeAddress;
