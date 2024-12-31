"use client";
import { Col, Container, Row } from "reactstrap";
import BlogSingle from "./BlogSingle";
import CourseFilter from "../Common/CourseFilter";

const DetailedCourseContainer = () => {
  return (
    <Container fluid>
      <Row className="learning-block">
        <Col xl={9} className="xl-60 order-xl-0 order-1 box-col-12">
          <BlogSingle />
        </Col>
        <Col xl={3} className="xl-40 box-col-12 learning-filter">
          <CourseFilter />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailedCourseContainer;
