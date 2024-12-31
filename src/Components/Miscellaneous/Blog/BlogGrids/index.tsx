"use client";

import { Col, Container, Row } from "reactstrap";
import BlogGridDetail from "./BlogGridDetail";
import LatestNews from "./LatestNews";
import BlogSidebar from "../Common/BlogSidebar";

const BlogGridsContainer = () => {
  return (
    <div>
      <Container fluid className='blog-grid-page'>
        <Row>
          <Col xxl={9} xl={8} className='box-col-12'>
            <BlogGridDetail />
            <LatestNews />
          </Col>
          <Col xxl={3} xl={4} className='blog-filter'>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogGridsContainer;
