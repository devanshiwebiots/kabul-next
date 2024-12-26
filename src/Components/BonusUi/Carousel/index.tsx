"use client"
import { Container, Row } from "reactstrap";
import SlidesOnly from "./SlidesOnly";
import WithControls from "./WithControls";
import AutoPlayVariant from "./AutoPlayVariant";
import MouseWheelVariant from "./MouseWheelVariant";
import WithIndicators from "./WithIndicators";
import WithCaptions from "./WithCaptions";
import CrossFade from "./CrossFade";
import IndividualInterval from "./IndividualInterval";
import DisableTouch from "./DisableTouch";
import DarkVariant from "./DarkVariant";

const CarouselContainer = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <SlidesOnly />
          <WithControls />
          <AutoPlayVariant />
          <MouseWheelVariant />
          <WithIndicators />
          <WithCaptions />
          <CrossFade />
          <IndividualInterval />
          <DisableTouch/>
          <DarkVariant/>
        </Row>
      </Container>
    </>
  );
};

export default CarouselContainer;
