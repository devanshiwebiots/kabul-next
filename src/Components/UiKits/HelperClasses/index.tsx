"use client";
import { Container, Row } from "reactstrap";
import StyleBorderCard from "./StyleBorderCard";
import BorderCard from "./BorderCard";
import BackgroundColorsCard from "./BackgroundColorsCard";
import BorderColorCard from "./BorderColorCard";
import ImagesSizesCard from "./ImagesSizesCard";
import FontStyleCart from "./FontStyleCart";
import FontWeightCart from "./FontWeightCart";
import TextColorsCart from "./TextColorsCart";
import PaddingCart from "./PaddingCart";
import SidePadding from "./SidePadding";
import MarginCart from "./MarginCart";
import SideMargin from "./SideMargin";
import FontSizesCart from "./FontSizesCart";

const HelperClassesContainer = () => {
  return (
    <Container fluid>
      <Row>
          <StyleBorderCard/>
          <BorderCard/>
          <BackgroundColorsCard/>
          <BorderColorCard/>
          <ImagesSizesCard/>
          <FontStyleCart/>
          <FontWeightCart/>
          <TextColorsCart/>
          <PaddingCart/>
          <SidePadding/>
          <MarginCart/>
          <SideMargin/>
          <FontSizesCart/>
      </Row>
    </Container>
  );
};

export default HelperClassesContainer;
