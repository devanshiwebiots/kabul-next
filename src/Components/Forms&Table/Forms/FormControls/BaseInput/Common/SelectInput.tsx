import { CommonSelectInputProp } from "@/Types/Forms";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const SelectInput: React.FC<CommonSelectInputProp> = ({ label, inputClass, span, multiple }) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{label}</Label>
          <Input type="select" className={`digits btn-square ${inputClass} custom-scrollbar`} multiple={multiple}>
            {span?.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default SelectInput;
