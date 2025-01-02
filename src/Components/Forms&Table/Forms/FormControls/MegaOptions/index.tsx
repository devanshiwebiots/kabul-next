"use client";
import { Container, Row } from "reactstrap";
import VariationCheckbox from "./VariationCheckbox";
import VariationRadio from "./VariationRadio";
import DefaultStyle from "./DefaultStyle";
import WithoutBordersStyle from "./WithoutBordersStyle";
import SolidBorderStyle from "./SolidBorderStyle";
import OfferStyleBorder from "./OfferStyleBorder";
import InlineStyle from "./InlineStyle";
import VerticalStyle from "./VerticalStyle";
import HorizontalStyle from "./HorizontalStyle";

const MegaOptionsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <VariationRadio />
        <VariationCheckbox/>
        <DefaultStyle/>
        <WithoutBordersStyle/>
        <SolidBorderStyle/>
        <OfferStyleBorder/>
        <InlineStyle/>
        <VerticalStyle/>
        <HorizontalStyle/>
      </Row>
    </Container>
  );
};

export default MegaOptionsContainer;
