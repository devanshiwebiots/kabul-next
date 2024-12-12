import { CardBody, Col, Input, Label, Row } from "reactstrap";
import { BasicColorPicker, BasicDatalistExample, BasicDate, BasicDateAndTime, BasicMaximumLength, BasicMonth, BasicNumber, BasicPassword, BasicPlaceholder, BasicPlaceholderPlace, BasicStaticText, BasicTelephone, BasicTelephonePlaceholder, BasicTime, BasicWeek, FullDate, FullDateAndTime, FullMonth, FullWeek, ListPlaceholder, MaximumLengthPlaceholder, NumberPlaceholder, PasswordInputPlaceholder, StaticTextData, URLs, URLsValue } from "@/Constant";
import FormGroupField from "./Common/FormGroupField";
import { DataInputList } from "@/Data/Forms";

const BasicHtmlCardBody = () => {
  return (
    <CardBody className="custom-input">
      <Row>
        <Col>
          <FormGroupField inputType="text" label={BasicPlaceholder} colSm={9} placeholder={BasicPlaceholderPlace} />
          <FormGroupField inputType="text" label={BasicPassword} colSm={9} placeholder={PasswordInputPlaceholder} />
          <FormGroupField inputType="number" label={BasicNumber} colSm={9} placeholder={NumberPlaceholder} />
          <FormGroupField inputType="tel" label={BasicTelephone} colSm={9} defaultValue={BasicTelephonePlaceholder} />
          <FormGroupField inputType="url" label={URLs} colSm={9} defaultValue={URLsValue} />
          <FormGroupField inputType="datetime-local" label={BasicDateAndTime} colSm={9} inputClass="digits" defaultValue={FullDateAndTime} />
          <FormGroupField inputType="date" label={BasicDate} colSm={9} inputClass="digits" defaultValue={FullDate} />
          <FormGroupField inputType="month" label={BasicMonth} colSm={9} inputClass="digits" defaultValue={FullMonth} />
          <FormGroupField inputType="week" label={BasicWeek} colSm={9} inputClass="digits" defaultValue={FullWeek} />
          <Row className="mb-3">
            <Col sm={3}><Label check>{BasicDatalistExample}</Label></Col>
            <Col sm={9}>
              <Input list="datalistOptions" placeholder={ListPlaceholder} />
              <datalist id="datalistOptions">{DataInputList.map((item, index) => (<option value={item} key={index}></option>))}</datalist>
            </Col>
          </Row>
          <FormGroupField inputType="time" label={BasicTime} colSm={9} inputClass="digits" />
          <FormGroupField inputType="color" colSm={2} label={BasicColorPicker} labelClass="pt-0" inputClass="form-control-color" defaultValue="#678f44" />
          <FormGroupField inputType="text" colSm={9} label={BasicMaximumLength} placeholder={MaximumLengthPlaceholder} max={6} />
          <Row>
            <Label className="col-sm-3" check>{BasicStaticText}</Label>
            <Col sm={9}><div className="form-control-static">{StaticTextData}</div></Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  );
};

export default BasicHtmlCardBody;