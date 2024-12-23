"use client";
import { Container, Row } from "reactstrap";
import BorderTabs from "./BorderTabs";
import IconsWithTabs from "./IconsWithTabs";
import JustifyTabs from "./JustifyTabs";
import MaterialStyleLeftTabs from "./MaterialStyleLeftTabs";
import MaterialStyleTabs from "./MaterialStyleTabs";
import PillsTabs from "./PillsTabs";
import SimpleTabs from "./SimpleTabs";
import VerticalTabs from "./VerticalTabs";

const TabsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SimpleTabs />
        <IconsWithTabs />
        <VerticalTabs />
        <PillsTabs />
        <JustifyTabs />
        <MaterialStyleLeftTabs />
        <MaterialStyleTabs />
        <BorderTabs />
      </Row>
    </Container>
  );
};

export default TabsContainer;
