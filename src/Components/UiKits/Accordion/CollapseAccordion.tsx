import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ButtonWithDataBsTarget, CollapseAccordions, LinkwithHref } from "@/Constant";
import { AccordionCollapse } from "@/Data/UiKits/Accordion";
import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse } from "reactstrap";

const CollapseAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen); 3

  return (
    <Col md={6} sm={12}>
      <Card>
        <CommonCardHeader title={CollapseAccordions} span={AccordionCollapse} />
        <CardBody className="collapse-accordion">
          <p className="common-flex">
            <Button color="dark" onClick={toggle}>{LinkwithHref}</Button>
            <Button color="dark" onClick={toggle}>{ButtonWithDataBsTarget}</Button>
          </p>
          <Collapse isOpen={isOpen} className="btn-dark">
            <Card className="mb-0 dark-accordion">
              <CardBody>
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CollapseAccordion;
