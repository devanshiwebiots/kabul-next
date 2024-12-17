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
          <FontSizesCard/>
      </Row>
    </Container>
  );
};

export default HelperClassesContainer;
