import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, Ratio } from "@/Constant";
import { RatioData, Ratios } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const RatioAvatar = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={Ratio} span={RatioData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {Ratios?.map((item, index) => (
              <div className="avatar ratio" key={index}>
                <Image height={item.size} width={item.size} className={`b-r-8 img-${item.size}`} src={`${ImagePath}/${item.src}.jpg`} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RatioAvatar;
