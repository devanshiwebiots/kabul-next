import { Row, Col } from "reactstrap";
import SearchArticle from "./SearchArticle";
import Navigation from "./Navigation";
import LatestUpdate from "./LatestUpdates";

const FaqRightSidebar = () => {
  return (
    <Col xl={4} lg={6} md={5} className="xl-40">
      <Row>
        <SearchArticle />
        <Navigation />
        <LatestUpdate />
      </Row>
    </Col>
  );
};

export default FaqRightSidebar;
