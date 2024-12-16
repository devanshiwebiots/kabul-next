"use client";
import { Container, Row } from "reactstrap";
import StyleBorderCard from "./StyleBorderCard";
import BorderCard from "./BorderCard";
import BackgroundColorsCard from "./BackgroundColorsCard";
import BorderColorCard from "./BorderColorCard";
import ImagesSizesCard from "./ImagesSizesCard";
import FontStyleCard from "./FontStyleCard";
import FontWeightCard from "./FontWeightCard";
import TextColorsCard from "./TextColorsCard";
import PaddingCard from "./PaddingCard";
import SidePadding from "./SidePadding";
import MarginCard from "./MarginCard";
import SideMargin from "./SideMargin";
import FontSizesCard from "./FontSizesCard";

const HelperClassesContainer = () => {
  return (
    <Container fluid>
      <Row>
          <StyleBorderCard/>
          <BorderCard/>
          <BackgroundColorsCard/>
          <BorderColorCard/>
          <ImagesSizesCard/>
          <FontStyleCard/>
          <FontWeightCard/>
          <TextColorsCard/>
          <PaddingCard/>
          <SidePadding/>
          <MarginCard/>
          <SideMargin/>
          <FontSizesCard/>
      </Row>
    </Container>
  );
};

export default HelperClassesContainer;
