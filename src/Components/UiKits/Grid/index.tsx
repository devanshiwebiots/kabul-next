"use client";
import { Container, Row } from "reactstrap";
import GridOptions from "./GridOptions";
import GridColumn from "./GridColumn";
import VerticalAlignmentCard from "./VerticalAlignmentCard";
import HorizontalAlignmentCard from "./HorizontalAlignmentCard";
import NestingCard from "./NestingCard";
import OrderCard from "./OrderCard";
import OffsetCard from "./OffsetCard";

const GridContainer = () => {
  return (
    <Container fluid>
      <Row>
        <GridOptions />
        <GridColumn />
        <VerticalAlignmentCard />
        <HorizontalAlignmentCard />
        <NestingCard />
        <OrderCard />
        <OffsetCard />
      </Row>
    </Container>
  );
};

export default GridContainer;
