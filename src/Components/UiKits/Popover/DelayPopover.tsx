import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DelayPopoverTitle } from "@/Constant";
import { DelayPopoverSubTitle } from "@/Data/UiKits/Popover";
import { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
 

const DelayPopover = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);

  return (
    <Col lg={4}>
      <Card>
        <CommonCardHeader title={DelayPopoverTitle} span={DelayPopoverSubTitle} />
        <CardBody className="common-flex popover-wrapper">
          <Button color="primary" className="example-popover" id="DelayPopover" onClick={toggle}>
            Delay Popover
          </Button>
          <Popover placement="right" isOpen={popover} target="DelayPopover" toggle={toggle}>
            <PopoverHeader>{"Popover title"}</PopoverHeader>
            <PopoverBody>{"And here's some amazing content. It's very engaging. Right?"}</PopoverBody>
          </Popover>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DelayPopover;
