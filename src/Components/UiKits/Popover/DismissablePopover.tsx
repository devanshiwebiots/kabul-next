import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DismissPopovers } from "@/Constant";
import { DismissPopoverData } from "@/Data/UiKits/Popover";
import { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";

const DismissablePopover = () => {
  const [basicPopover, setBasicPopover] = useState(false);
  const basicToggle = () => setBasicPopover(!basicPopover);

  return (
    <Col lg={4}>
      <Card>
        <CommonCardHeader title={DismissPopovers} span={DismissPopoverData} />
        <CardBody className='common-flex popover-wrapper'>
          <Button id='Popover-3' color='secondary' className='example-popover' onClick={basicToggle}>
            Dismissible popover
          </Button>
          <Popover className='example-popover mb-0 me-0' isOpen={basicPopover} placement='right' target='Popover-3' trigger='focus'>
            <PopoverHeader>Dismissible popover</PopoverHeader>
            <PopoverBody>You are able to even develop and suggest improvements to the Bootstrap 4 before its final version is delivered.</PopoverBody>
          </Popover>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissablePopover;
