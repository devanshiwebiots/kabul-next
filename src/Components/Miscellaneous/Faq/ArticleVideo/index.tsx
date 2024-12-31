import { LatestArticles } from "@/Constant";
import { ArticleAndVideoOne, ArticleAndVideoThird, ArticleAndVideoTwo } from "@/Data/Miscellaneous/Faq";
import { Codepen, FileText, Youtube } from "react-feather";
import { Col, Row } from "reactstrap";
import CommonArticleVideo from "./Common/CommonArticleVideo";

const ArticleAndVideo = () => {
  return (
    <Col lg={12}>
      <div className="header-faq">
        <h4 className="f-w-600 mb-0">{LatestArticles}</h4>
      </div>
      <Row>
        <CommonArticleVideo data={ArticleAndVideoOne} icon={<Codepen className="m-r-30" />} />
        <CommonArticleVideo data={ArticleAndVideoTwo} icon={<FileText className="m-r-30" />} />
        <CommonArticleVideo data={ArticleAndVideoThird} icon={<Youtube className="m-r-30" />} />
      </Row>
    </Col>
  );
};

export default ArticleAndVideo;
