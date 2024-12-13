import { AllAbout } from "@/Constant";
import { SearchTabData } from "@/Data/SearchResult";
import { Col, Row } from "reactstrap";
import PagesSort from "./Common/PagesSort";
import VideoCommon from "./Common/VideoCommon";

const VideoTab = () => {
  return (
    <Row>
      <Col xxl={6}>
        <h4 className="my-3">{AllAbout}</h4>
        {SearchTabData?.slice(0, 3).map((item, i) => (
          <VideoCommon item={item} key={i} />
        ))}
        <PagesSort pageClass="start" />
      </Col>
      <Col xxl={6}>
        <h4 className="my-3">{AllAbout}</h4>
        {SearchTabData?.slice(1, 4).map((item, i) => (
          <VideoCommon item={item} key={i} />
        ))}
      </Col>
    </Row>
  );
};

export default VideoTab;
