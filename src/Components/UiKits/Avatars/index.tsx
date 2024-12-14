"use client";
import { Container, Row } from "reactstrap";
import SizesAvatar from "./SizesAvatar";
import StatusIndicatorAvatar from "./StatusIndicator";
import ShapesAvatar from "./ShapesAvatar";
import RatioAvatar from "./RatioAvatar";
import GroupingAvatar from "./Grouping";
import BadgeIndicator from "./BadgeIndicator";
import AvatarInitial from "./AvatarInitial";
import AnimatedAvatar from "./AnimatedAvatar";

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
          <BadgeIndicator />
          <AvatarInitial />
          <AnimatedAvatar />
        </Row>
      </div>
    </Container>
  );
};

export default AvatarsContainer;
