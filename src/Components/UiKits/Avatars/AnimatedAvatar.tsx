import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AnimatedAvatarTitle, ImagePath } from "@/Constant";
import { AnimatedAvatarData, AnimatedAvatarSubTitle } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const AnimatedAvatar = () => {
  return (
    <Col xl={4} className="box-col-6">
      <Card className='height-equal'>
        <CommonCardHeader title={AnimatedAvatarTitle} span={AnimatedAvatarSubTitle} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            {AnimatedAvatarData?.map((item, index) => (
              <div className='avatar' key={index}>
                <Image height={item.size} width={item.size} className={`img-${item.size} rounded-circle`} src={`${ImagePath}/${item.image}.jpg`} alt='#' />
                <div className={`status animation-ping bg-${item.color}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedAvatar;
