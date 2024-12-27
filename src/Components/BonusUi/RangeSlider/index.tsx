"use client";
import { Container, Row } from "reactstrap";
import DefaultRangeSlider from "./DefaultRangeSlider";
import MinMaxValue from "./MinMaxValue";
import NegativeValue from "./NegativeValue";
import Disabled from "./Disabled";
import Prefix from "./Prefix";
import FormatedLabel from "./FormatedLabel";

const RangeSliderContainer = () => {
  return (
    <Container fluid>
      <Row>
         <DefaultRangeSlider/>
         <MinMaxValue/>
         <Prefix/> 
         <NegativeValue/>
         <Disabled/>
         <FormatedLabel/>
      </Row>
    </Container>
  );
};

export default RangeSliderContainer;
