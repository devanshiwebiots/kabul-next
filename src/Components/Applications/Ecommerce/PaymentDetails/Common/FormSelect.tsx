import { FormSelectProp } from "@/Types/Ecommerce";
import { FormGroup, Input } from "reactstrap";

const FormSelect: React.FC<FormSelectProp> = ({ data, selectClass }) => {
  return (
    <FormGroup className={selectClass}>
      <Input type="select">
        {data?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default FormSelect;
