"use client";
import { Col, Row } from "reactstrap";
import BlogDetail from "./BlogDetail";
import BlogComments from "./BlogComments";
import BlogCommentForm from "./BlogCommentForm";
import BlogSidebar from "../Common/BlogSidebar";

const BlogDetailsContainer = () => {
  return (
    <div className='container-fluid blog-detail-page'>
      <Row>
        <Col xxl={9} xl={8} className='box-col-12'>
          <Row>
            <BlogDetail />
            <BlogComments />
            <BlogCommentForm />
          </Row>
        </Col>
        <Col xxl={3} xl={4} className='blog-filter'>
          <BlogSidebar />
        </Col>
      </Row>
    </div>
  );
};

export default BlogDetailsContainer;
