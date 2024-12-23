import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalAccordions, ToggleWidthCollapse } from "@/Constant";
import { AccordionHorizontal } from "@/Data/UiKits/Accordion";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Row } from "reactstrap";

const HorizontalAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Col md={6} sm={12}>
      <Card>
        <CommonCardHeader title={HorizontalAccordions} span={AccordionHorizontal} />
        <CardBody>
          <div className="common-flex">
            <Button onClick={toggle}>{ToggleWidthCollapse}</Button>
          </div>
          <Row>
            <Col sm={5}>
              <Collapse isOpen={isOpen} horizontal className="mt-3">
                <Card className="accordion-h-space mb-0 text-dark">
                  <CardBody className="bg-light-secondary">
                    The collapse plugin also supports horizontal collapsing. Add the .collapse-horizontal modifier class to transition the width instead of height and set a width on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our width utilities.
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalAccordion;
