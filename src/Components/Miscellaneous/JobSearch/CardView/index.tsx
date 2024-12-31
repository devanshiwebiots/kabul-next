"use client";
import { Col, Container, Row } from "reactstrap";
import CardsClass from "./CardsClass";
import Sidebar from "../Common/Sidebar";
import CardsPagination from "../Common/CardsPagination";

const CardsViewContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xxl={3} xl={4} className='box-col-12'>
          <div className='md-sidebar'>
            <Sidebar />
          </div>
        </Col>
        <Col xxl={9} xl={8} className='box-col-12'>
          <Row>
            <CardsClass />
            <CardsPagination />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CardsViewContainer;
