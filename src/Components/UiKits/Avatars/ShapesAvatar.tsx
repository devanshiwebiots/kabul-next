import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, Shapes } from "@/Constant";
import { Shape, ShapsData } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const ShapesAvatar = () => {
  return (
    <Col xl={4} md={6}>
      <Card className='height-equal'>
        <CommonCardHeader title={Shapes} span={ShapsData} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            {Shape?.map((item, index) => (
              <div className='avatar' key={index}>
                <Image height={item.size} width={item.size} className={`img-${item.size} ${item.class}`} src={`${ImagePath}/avtar/${item.src}.jpg`} alt='avatar' />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShapesAvatar;
