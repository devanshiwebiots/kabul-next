import { Button, CardHeader } from "reactstrap";
import { ChevronDown, ChevronUp } from "react-feather";
import { HeaderWithIconPropsTypes } from "@/Types/JobSearch";

const HeaderWithIcon :React.FC<HeaderWithIconPropsTypes> = ({ setIsOpen, isOpen, heading}) => {
  return (
    <CardHeader id="headingOne" className="p-0">
      <h2 className="mb-0">
        <Button block color="link" className="w-100 text-start d-flex justify-content-between text-decoration-none" onClick={() => setIsOpen(!isOpen)} >
          {heading}
          {isOpen ? <ChevronUp className="m-0" /> : <ChevronDown className="m-0" />}
        </Button>
      </h2>
    </CardHeader>
  );
};

export default HeaderWithIcon;
