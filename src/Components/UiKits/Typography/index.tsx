"use client";
import { Container, Row } from "reactstrap";
import HeadingCard from "./HeadingCard";
import ColoredHeadingsCard from "./ColoredHeadingsCard";
import FontWeightCard from "./FontWeightCard";
import ListingCard from "./ListingTypography";
import DisplayCard from "./DisplayCard";
import InlinetextCard from "./InlinetextCard";
import TextColorCard from "./TextColorCard";
import BlockQuotesCard from "./BlockQuotesCard";

const TypographyContainer = () => {
  return (
    <Container fluid className="typography">
      <Row>
        <HeadingCard />
        <ColoredHeadingsCard />
        <FontWeightCard />
        <ListingCard />
        <DisplayCard />
        <InlinetextCard />
        <TextColorCard />
        <BlockQuotesCard />
      </Row>
    </Container>
  );
};

export default TypographyContainer;
