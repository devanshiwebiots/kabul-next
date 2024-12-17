import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, StatusIndicator } from "@/Constant";
import { StatusData, StatusIndicators } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const StatusIndicatorAvatar = () => {
  return (
    <Col xl={4} md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={StatusIndicator} span={StatusData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {StatusIndicators?.map((item, index) => (
              <div className="avatar" key={index}>
                <Image height={item.size} width={item.size} className={`img-${item.size} rounded-circle`} src={`${ImagePath}/${item.src}.jpg`} alt="image" />
                <div className={`status bg-${item.color}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusIndicatorAvatar;