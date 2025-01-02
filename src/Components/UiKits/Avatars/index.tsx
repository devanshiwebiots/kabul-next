"use client";
import { Container, Row } from "reactstrap";
import SizesAvatar from "./SizesAvatar";
import StatusIndicatorAvatar from "./StatusIndicator";
import ShapesAvatar from "./ShapesAvatar";
import RatioAvatar from "./RatioAvatar";
import GroupingAvatar from "./Grouping";

const AvatarsContainer = () => {
  return (
    <Container fluid>
      <div className='user-profile'>
        <Row>
          <SizesAvatar />
          <StatusIndicatorAvatar />
          <ShapesAvatar />
          <RatioAvatar />
          <GroupingAvatar />
        </Row>
      </div>
    </Container>
  );
};

export default AvatarsContainer;
