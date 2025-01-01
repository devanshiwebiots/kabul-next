"use client";
import { Container, Row } from "reactstrap";
import BasicMap from "./BasicMap";
import MarkerMapComp from "./MarkerMapComp";
import PolygonsComp from "./PolygonsComp";
import PolylinesMapComp from "./PolylinesMapComp"; 

const GoogleMapsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicMap />
        <MarkerMapComp />
        <PolygonsComp/>
        <PolylinesMapComp/>
      </Row>
    </Container>
  );
};

export default GoogleMapsContainer;
