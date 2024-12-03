"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import TabsHeading from "./TabsHeading";
import TabsContent from "./TabsContent";

const ProjectListContainer = () => {
  return (
    <Container fluid>
      <Row className="project-cards">
        <Col md={12} className="project-list">
          <TabsHeading />
        </Col>
        <Col sm={12}>
          <TabsContent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectListContainer;
