import { CommentsPlaceholder, FloatingComment, FloatingCommentLabel, FloatingComments, FloatingEmail, FloatingEmailLabel, FloatingInputGroupLabel, FloatingLayout, FloatingOpenLabel, FloatingPassword, FloatingValidInput, FloatOpenFloatingLabel, InputWithValue, InputWithValuePlaceholder, InputWithValuePlaceholderValue, InvalidInput, InvalidInputPlaceholder, InvalidInputPlaceholderValue, LayOutDefaultValue, LayOutPlaceholder } from "@/Constant";
import { FloatingSelectType, FloatingSelectTypeList } from "@/Data/Forms";
import { CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import FloatingFormGroup from "./Common/FloatingFormGroup";
import FloatingInputField from "./Common/FloatingInputField";

const BasicFloatingCardBody = () => {
  return (
    <CardBody className="custom-input">
      <Row>
        <Col>
          <FloatingInputField inputType="email" label={FloatingValidInput} placeholder={InputWithValuePlaceholder} defaultValue={InputWithValuePlaceholderValue} floatingLabel={InputWithValue} />
          <FloatingInputField inputType="email" label={InvalidInput} placeholder={InvalidInputPlaceholder} defaultValue={InvalidInputPlaceholderValue} floatingLabel={InvalidInput} invalid />
          <FloatingInputField inputType="textarea" label={FloatingComments} placeholder='' floatingLabel={CommentsPlaceholder} />
          <FloatingInputField inputType="email" label={FloatingEmail} floatingLabel={FloatingEmailLabel} />
          <FloatingInputField inputType="password" label={FloatingPassword} floatingLabel={FloatingPassword} />
          <FloatingInputField inputType="textarea" label={FloatingComment} placeholder='' floatingLabel={FloatingCommentLabel} height="100px" />
          <Row className="mb-1">
            <Col sm={3}><Label check>{FloatingOpenLabel}</Label></Col>
            <Col sm={9}>
              <FormGroup floating>
                <Input type="select">{FloatingSelectType?.map((item, index) => (<option key={index}>{item}</option>))}</Input>
                <Label check>{FloatOpenFloatingLabel}</Label>
              </FormGroup>
            </Col>
          </Row>
          <FloatingFormGroup floatingLabel={FloatingInputGroupLabel} />
          <FloatingFormGroup floatingLabel={FloatingInputGroupLabel} inputClass="has-validation" floatClass="is-invalid" invalid required />
          <Row className="mb-0">
          <Col sm={3}><Label check>{FloatingLayout}</Label></Col>
            <Col sm={9}>
              <Row className="g-2">
                <Col xxl={6}>
                  <FormGroup floating>
                    <Input type="email" placeholder={LayOutPlaceholder} defaultValue={LayOutDefaultValue} />
                    <Label check>{FloatingEmailLabel}</Label>
                  </FormGroup>
                </Col>
                <Col xxl={6}>
                  <FormGroup floating>
                    <Input type="select">{FloatingSelectTypeList?.map(({ text }, index) => (<option key={index}>{text}</option>))}</Input>
                    <Label check>{FloatOpenFloatingLabel}</Label>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  );
};

export default BasicFloatingCardBody;