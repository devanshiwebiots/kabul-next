"use client";
import { Container, Row } from "reactstrap";
import BasicPopover from "./BasicPopover";
import DisabledElements from "./DisabledPopOver";
import DismissablePopover from "./DismissablePopover";
import PopoverDirection from "./PopoverDirection";
import PopoverOffset from "./PopoverOffset";
import DelayPopover from "./DelayPopover";

const PopoverContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicPopover />
        <DisabledElements />
        <DelayPopover/>
        <DismissablePopover/>
        <PopoverDirection />
        <PopoverOffset />
      </Row>
    </Container>
  );
};

export default PopoverContainer;
