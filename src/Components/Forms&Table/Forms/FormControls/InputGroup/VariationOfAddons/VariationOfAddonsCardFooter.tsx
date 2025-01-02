import { Button, CardFooter } from "reactstrap";
import { VariationOfAddonsCancel, VariationOfAddonsSubmit } from "@/Constant";

const VariationOfAddonsCardFooter = () => {
  return (
    <CardFooter>
      <Button color="primary" className="m-r-15">{VariationOfAddonsSubmit}</Button>
      <Button color="light" type="reset">{VariationOfAddonsCancel}</Button>
    </CardFooter>
  );
};

export default VariationOfAddonsCardFooter