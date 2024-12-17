import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DisabledElementsTitle } from "@/Constant";
import { DisabledElementsSubTitle } from "@/Data/UiKits/Popover";
import { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
 

const DisabledElements = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);

  return (
    <Col lg={4}>
      <Card>
        <CommonCardHeader title={DisabledElementsTitle} span={DisabledElementsSubTitle} />
        <CardBody className="common-flex popover-wrapper">
          <Button color="primary" className="example-popover" id="DisabledElements" onClick={toggle} disabled>
            Disabled button
          </Button>
          <Popover placement="right" isOpen={popover} target="DisabledElements" toggle={toggle}>
            <PopoverHeader>{"Disable popover title"}</PopoverHeader>
            <PopoverBody>{"Popovers need the tooltip plugin considering that a dependency."}</PopoverBody>
          </Popover>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisabledElements;
