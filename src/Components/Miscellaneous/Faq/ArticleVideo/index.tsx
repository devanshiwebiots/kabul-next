import { Col, Row } from "reactstrap";
import { LatestArticles } from "@/Constant";
import ArticleAndVideo3 from "./ArticleAndVideo3";
import ArticleAndVideo1 from "./ArticleAndVideo1";
import ArticleAndVideo2 from "./ArticleAndVideo2";

const ArticleAndVideo = () => {
  return (
    <Col lg={12}>
      <div className="header-faq">
        <h4 className="f-w-600 mb-0 f-w-600">{LatestArticles}</h4>
      </div>
      <Row>
        <ArticleAndVideo1 />
        <ArticleAndVideo2 />
        <ArticleAndVideo3 />
      </Row>
    </Col>
  );
};

export default ArticleAndVideo;
