import { CardNumber, CardNumberPlaceholder, Currency, CurrencyPlaceholder, Delimiter, DelimiterPlaceholder, PhoneNumber, PhoneNumberPlaceholder, Prefix, PrefixPlaceholder, Tailprefix, TailprefixPlaceholder } from "@/Constant";
import "cleave.js/dist/addons/cleave-phone.us.js";
import { NumeralThousandsGroupStyleType } from "cleave.js/options";
import { Col, Form, Label, Row } from "reactstrap";
import CleaveInput from "./Common/CleaveInput";

const DefaultInputMaskForm = () => {

  return (
    <Form>
      <Row className="g-3">
        <Col xxl={4} sm={6}>
          <Label className="col-form-label">{Currency}</Label>
          <CleaveInput options={{ numeral: true, numeralThousandsGroupStyle: "thousand" as NumeralThousandsGroupStyleType }} placeholder={CurrencyPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <Label className="col-form-label">{Prefix}</Label>
          <CleaveInput options={{ prefix: "PREFIX", delimiter: "-", blocks: [6, 4, 4, 4], uppercase: true }} placeholder={PrefixPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <Label className="col-form-label">{Delimiter}</Label>
          <CleaveInput options={{ delimiters: [".", ".", "-"], blocks: [3, 3, 3], uppercase: true }} placeholder={DelimiterPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <Label className="col-form-label">{PhoneNumber}</Label>
          <CleaveInput options={{ phone: true, phoneRegionCode: "US" }} placeholder={PhoneNumberPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <Label className="col-form-label">{CardNumber}</Label>
          <CleaveInput options={{ creditCard: true }} placeholder={CardNumberPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <Label className="col-form-label">{Tailprefix}</Label>
          <CleaveInput options={{ prefix: "€", tailPrefix: true, numeral: true, numeralThousandsGroupStyle: "thousand" }} placeholder={TailprefixPlaceholder} />
        </Col>
      </Row>
    </Form>
  );
};

export default DefaultInputMaskForm;
