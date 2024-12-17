import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, Sizes } from "@/Constant";
import { SizeData, SizeImages } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const SizesAvatar = () => {
  return (
    <Col xl={4} md={6}>
      <Card className='height-equal'>
        <CommonCardHeader title={Sizes} span={SizeData} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            {SizeImages?.map((item, index) => (
              <div className='avatar' key={index}>
                <Image height={item.size} width={item.size} className={`img-${item.size} rounded-circle`} src={`${ImagePath}/avtar/${item.src}.jpg`} alt='image' />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizesAvatar;