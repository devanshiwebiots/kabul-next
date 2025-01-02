import { CommonFormGroupProp } from "@/Types/Forms";
import { Col, Input, Label, Row } from "reactstrap";

const FormGroupField:React.FC<CommonFormGroupProp> = ({ labelClass, label, colSm, colClass, inputType, placeholder, defaultValue,inputClass,max }) => {
  return (
    <Row className="mb-3 align-items-center">
      <Label className={`col-sm-3 ${labelClass}`} check>{label}</Label>
      <Col sm={colSm} className={colClass}>
        <Input type={inputType} className={inputClass} placeholder={placeholder} defaultValue={defaultValue} max={max}/>
      </Col>
    </Row>
  );
};

export default FormGroupField;
