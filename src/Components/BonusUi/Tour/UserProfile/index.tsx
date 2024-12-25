import { ImagePath } from "@/Constant";
import { Card, Col } from "reactstrap";
import CommonTourSocialMedia from "../Common/CommonTourSocialMedia";
import FollowSection from "./FollowSection";
import InfoSection from "./InfoSection";
import Image from "next/image";

const UserProfile = () => {
  return (
    <Col sm={12}>
      <Card className="hovercard text-center">
        <div className="cardheader"></div>
        <div className="user-image">
          <div className="avatar">
            <Image height={86} width={86} priority alt="" src={`${ImagePath}/user/7.jpg`} className="step1" />
          </div>
          <div className="icon-wrapper">
            <i className="icofont icofont-pencil-alt-5 step2"></i>
          </div>
        </div>
        <div className="info">
          <InfoSection />
          <hr />
          <CommonTourSocialMedia className="step4" />
          <FollowSection />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfile;
