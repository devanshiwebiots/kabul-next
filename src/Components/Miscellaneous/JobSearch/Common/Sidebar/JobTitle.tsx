import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Input, Label } from "reactstrap";
import { AllJobTitle, JobHeading } from "@/Constant";
import HeaderWithIcon from "../HeaderWithIcon";
import { JobTitleData } from "@/Data/Miscellaneous/JobSearch";

const JobTitle = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon heading={JobHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="animate-chk">
            {JobTitleData?.map((data, index) => (
              <Label className="d-block" htmlFor={`check-${index}`} key={index} check>
                <Input className="checkbox_animated" id={`check-${index}`} type="checkbox" />
                {data}
              </Label>
            ))}
          </CardBody>
          <Button block className="text-center w-100" color="primary">{AllJobTitle}</Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default JobTitle;
