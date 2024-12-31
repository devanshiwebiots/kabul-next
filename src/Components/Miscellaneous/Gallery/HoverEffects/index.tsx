"use client";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import ImageHoverEffectsCardBody from "./ImageHoverEffectsCardBody";

const HoverEffectsContainer = () => {
  return (
    <Container fluid>
      {[...Array(15)].map((_, index) => (
        <Row key={index}>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={`Hover Effect ${index + 1}`} />
              <ImageHoverEffectsCardBody data={index + 1} />
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default HoverEffectsContainer;
