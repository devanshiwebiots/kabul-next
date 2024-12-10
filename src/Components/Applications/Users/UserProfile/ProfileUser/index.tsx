import { ImagePath } from "@/Constant";
import { Card, Col } from "reactstrap";
import InfoSection from "./InfoSection";
import UserSocialMedia from "./UserSocialMedia";
import FollowSection from "./FollowSection";
import Image from "next/image";

const ProfileUser = () => {
  return (
    <Col sm={12}>
      <Card className='hovercard text-center user-profile-card'>
        <div className='cardheader'></div>
        <div className='user-image'>
          <div className='avatar'>
            <Image height={86} width={86} priority src={`${ImagePath}/user/7.jpg`} alt='user' />
          </div>
          <div className='icon-wrapper'>
            <i className='icofont icofont-pencil-alt-5'></i>
          </div>
        </div>
        <div className='info'>
          <InfoSection />
          <hr />
          <UserSocialMedia />
          <FollowSection />
        </div>
      </Card>
    </Col>
  );
};

export default ProfileUser;
