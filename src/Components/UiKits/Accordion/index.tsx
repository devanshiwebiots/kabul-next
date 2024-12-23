"use client";
import { Container, Row } from "reactstrap";
import FlushAccordion from "./FlushAccordion";
import MultipleCollapseAccordion from "./MultipleCollapseAccordion";
import SimpleAccordion from "./SimpleAccordion";
import WithIconsAccordion from "./WithIconsAccordion";
import OutlineAccordion from "./OutlineAccordion";
import HorizontalAccordion from "./HorizontalAccordion";
import CollapseAccordion from "./CollapseAccordion";

const AccordionContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SimpleAccordion />
        <FlushAccordion />
        <MultipleCollapseAccordion />
        <WithIconsAccordion />
        <OutlineAccordion />
        <HorizontalAccordion />
        <CollapseAccordion />
      </Row>
    </Container>
  );
};

export default AccordionContainer;
