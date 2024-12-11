"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import CustomSwitch from "./CustomSwitch";
import IconsSwitch from "./IconsSwitch";
import UncheckedSwitch from "./UncheckedSwitch";
import BordersWithIcons from "./BordersWithIcons";
import DisabledOutlineSwitch from "./DisabledOutlineSwitch";
import SwitchSizing from "./SwitchSizing";
import VariationOfSwitches from "./VariationOfSwitches";
import SwitchSizingwithIcons from "./SwitchSizingWithIcons";

const SwitchContainer = () => {
  return (
    <Container fluid>
      <Row>
        <CustomSwitch />
        <IconsSwitch />
        <UncheckedSwitch />
        <BordersWithIcons />
        <DisabledOutlineSwitch />
        <VariationOfSwitches />
        <SwitchSizing />
        <SwitchSizingwithIcons />
      </Row>
    </Container>
  );
};

export default SwitchContainer;
