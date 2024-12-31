"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import KnowledgebaseHelp from "./KnowledgebaseHelp";
import CategoryData from "./CategoryData";
import Articles from "../Faq/Articles";
import FeaturesTutorial from "../Faq/FeaturesTutorail";
import ArticleAndVideo from "../Faq/ArticleVideo";

const KnowledgebaseContainer = () => {
  return (
    <Container fluid>
      <Row>
        <KnowledgebaseHelp />
        <Articles/>
        <CategoryData />
        <FeaturesTutorial />
        <ArticleAndVideo/>
      </Row>
    </Container>
  );
};

export default KnowledgebaseContainer;
