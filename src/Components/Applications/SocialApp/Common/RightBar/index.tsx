import { Card, Col, Row } from "reactstrap";
import ProfileIntroCard from "./ProfileIntroCard";
import FollowerCard from "./FollowerCard";
import FollowingsCard from "./FollowingsCard";
import LatestPhotos from "./LatestPhotos";
import FriendsCard from "./FriendsCard";
import { ImagePath } from "@/Constant";
import RatioImage from "@/CommonComponents/RatioImage";


const RightBar = () => {
  return (
    <Row>
      <Col xl={12} lg={4} md={6} sm={12} className="xl-50 box-col-6">
        <ProfileIntroCard />
      </Col>
      <Col xl={12} lg={4} md={6} sm={12} className="xl-50 box-col-6">
        <FollowerCard />
      </Col>
      <Col xl={12} lg={4} md={6} sm={12} className="xl-50 box-col-6">
        <FollowingsCard />
      </Col>
      <Col xl={12} lg={4} md={6} sm={12} className="xl-50 box-col-6">
        <LatestPhotos />
      </Col>
      <Col xl={12} lg={4} md={6} sm={12} className="xl-50 box-col-6">
        <FriendsCard />
      </Col>
      <Col xl={12} lg={4} md={6} sm={12} className="xl-50 box-col-6">
        <Card>
          <RatioImage className="img-fluid rounded-3 w-100" src={`${ImagePath}/social-app/timeline-4.png`} alt="timeline" />
        </Card>
      </Col>
    </Row>
  );
};

export default RightBar;
