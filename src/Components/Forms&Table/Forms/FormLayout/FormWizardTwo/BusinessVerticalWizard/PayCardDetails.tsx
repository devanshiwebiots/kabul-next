import { Col, Input, Label, Row } from "reactstrap";
import { CVVNumber, Expiration } from "@/Constant";
import { BankLogoListProp } from "@/Types/Forms";
import { useAppSelector } from "@/Redux/Hooks";
import { ListOfYears } from "@/Data/Forms";

const PayCardDetails: React.FC<BankLogoListProp> = ({ getUserData }) => {
  const { payDetailsFormValues } = useAppSelector((state) => state.formWizardTwo);
  const { expiryDate, expiryYear, cvvNumber } = payDetailsFormValues;

  return (
    <Col xs={12}>
      <Row className="g-3">
        <Col md={6}>
          <Label check>{Expiration}</Label>
          <Row className="g-3">
            <Col md={6}>
              <Input id="expiration" type="number" required placeholder="xx/xx" value={expiryDate} name="expiryDate" onChange={getUserData} />
            </Col>
            <Col md={6}>
              <Input value={expiryYear} name="expiryYear" type="select" onChange={getUserData} className="f-w-400 f-14 text-gray">
                <option value="">Year</option>
                {ListOfYears?.map((data, index) => (<option key={index} value={data}>{data}</option>))}
              </Input>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Label check>{CVVNumber}</Label>
          <Input type="text" required value={cvvNumber} name="cvvNumber" onChange={getUserData} />
        </Col>
      </Row>
    </Col>
  );
};

export default PayCardDetails;
