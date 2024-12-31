"use client";
import { Container, Row } from "reactstrap";
import Articles from "./Articles";
import Questions from "./Questions";
import FeaturesTutorial from "./FeaturesTutorail";
import ArticleAndVideo from "./ArticleVideo";

const FaqContainer = () => {
  return (
    <Container fluid>
      <div className='faq-wrap'>
        <Row>
          <Articles />
          <Questions />
          <FeaturesTutorial />
          <ArticleAndVideo />
        </Row>
      </div>
    </Container>
  );
};

export default FaqContainer;
