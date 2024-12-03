import { FormInputProp } from "@/Types/Ecommerce";
import { FormGroup, Input } from "reactstrap";

const FormInput :React.FC<FormInputProp> = ({ type, placeholder,formClass,rows }) => {
  return (
    <FormGroup className={formClass ? formClass : ""}>
      <Input type={type} placeholder={placeholder} rows={rows} />
    </FormGroup>
  );
};

export default FormInput;