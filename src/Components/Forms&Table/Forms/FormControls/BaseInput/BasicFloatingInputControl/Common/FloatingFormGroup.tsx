import { FloatingInputGroup, FloatingInputGroupFeed } from "@/Constant";
import { CommonFloatingFormGruopProp } from "@/Types/Forms";
import { Col, FormFeedback, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const FloatingFormGroup :React.FC<CommonFloatingFormGruopProp>= ({ floatingLabel,inputClass,floatClass,invalid,required }) => {
  return (
    <Row className="mb-3">
      <Col sm={3}><Label check>{FloatingInputGroup}</Label></Col>
      <Col sm={9}>
        <InputGroup className={inputClass}>
          <InputGroupText>@</InputGroupText>
          <div className={`form-floating ${floatClass}`}>
            <Input type="text" invalid={invalid} required={required} />
            <Label check>{floatingLabel}</Label>
          </div>
         <FormFeedback>{FloatingInputGroupFeed}</FormFeedback>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default FloatingFormGroup;