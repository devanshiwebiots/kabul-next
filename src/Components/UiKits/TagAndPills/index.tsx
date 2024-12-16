"use client";
import { Container, Row } from "reactstrap";
import BadgeAsPartButtons from "./BadgeAsPartButtons";
import BadgeHeadingsExampleCard from "./BadgeHeadingsExampleCard";
import BadgesContextualVariationsCard from "./BadgesContextualVariationsCard";
import BadgeTagsWithIconsCard from "./BadgeTagsWithIconsCart";
import NumberofBadgeCard from "./NumberofBadgeCard";
import NumberOfPillsTagCard from "./NumberOfPillsTagCart";
import PillsContextualVariationsCard from "./PillsContextualVariationsCart";
import RoundedPillsWithIconsCard from "./RoundedPillsWithIconsCart";

const TagAndPillsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BadgesContextualVariationsCard />
        <PillsContextualVariationsCard />
        <NumberofBadgeCard />
        <NumberOfPillsTagCard />
        <BadgeTagsWithIconsCard />
        <RoundedPillsWithIconsCard />
        <BadgeHeadingsExampleCard />
        <BadgeAsPartButtons />
      </Row>
    </Container>
  );
};

export default TagAndPillsContainer;
