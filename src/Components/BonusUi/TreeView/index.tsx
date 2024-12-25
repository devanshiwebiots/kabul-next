"use client";
import { Container, Row } from "reactstrap";
import BasicTree from "./BasicTree";
import DisabledTree from "./DisabledTree";

const TreeViewContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicTree />
        <DisabledTree/>
      </Row>
    </Container>
  );
};

export default TreeViewContainer;
