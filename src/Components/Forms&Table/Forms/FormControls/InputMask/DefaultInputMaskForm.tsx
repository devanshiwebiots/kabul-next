import { CardNumber, CardNumberPlaceholder, Currency, CurrencyPlaceholder, Delimiter, DelimiterPlaceholder, PhoneNumberPlaceholder, Prefix, PrefixPlaceholder, Tailprefix, TailprefixPlaceholder } from "@/Constant";
import { CleaveInputType } from "@/Types/Forms";
import Cleave from "cleave.js";
import { NumeralThousandsGroupStyleType } from "cleave.js/options";
import React, { useEffect, useRef } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";
import PhoneInput from "react-phone-input-2";

const CleaveInput: React.FC<CleaveInputType> = ({ className, options, placeholder }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      new Cleave(inputRef.current, options);
    }
  }, [options]);

  return <Input innerRef={inputRef} className={className} placeholder={placeholder} />;
};

const DefaultInputMaskForm = () => {

  return (
    <Form>
      <Row className="g-3">
        <Col xxl={4} sm={6}>
          <Label className="col-form-label" htmlFor="cleave-number-format">{Currency}</Label>
          <CleaveInput className="form-control" options={{ numeral: true, numeralThousandsGroupStyle: "thousand" as NumeralThousandsGroupStyleType }} placeholder={CurrencyPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <Label className="col-form-label" htmlFor="cleave-type-prefix">{Prefix}</Label>
          <CleaveInput className="form-control" options={{ prefix: "PREFIX", delimiter: "-", blocks: [6, 4, 4, 4], uppercase: true }} placeholder={PrefixPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <Label className="col-form-label" htmlFor="cleave-type-delimiter">{Delimiter}</Label>
          <CleaveInput className="form-control" options={{ delimiters: [".", ".", "-"], blocks: [3, 3, 3], uppercase: true }} placeholder={DelimiterPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <PhoneInput country={"us"} placeholder={PhoneNumberPlaceholder} inputClass="form-control" />
        </Col>
        <Col xxl={4} sm={6}>
          <Label>{CardNumber}</Label>
          <CleaveInput className="form-control" options={{ creditCard: true }} placeholder={CardNumberPlaceholder} />
        </Col>
        <Col xxl={4} sm={6}>
          <Label>{Tailprefix}</Label>
          <CleaveInput className="form-control" options={{ prefix: "€", tailPrefix: true, numeral: true, numeralThousandsGroupStyle: "thousand" }} placeholder={TailprefixPlaceholder} />
        </Col>
      </Row>
    </Form>
  );
};

export default DefaultInputMaskForm;
