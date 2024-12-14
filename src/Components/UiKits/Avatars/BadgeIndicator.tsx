import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BadgeIndicatorTitle, ImagePath } from "@/Constant";
import { BadgeIndicatorData, BadgeIndicatorSubTitle } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Badge, Card, CardBody, Col } from "reactstrap";

const BadgeIndicator = () => {
  return (
    <Col xl={4} className='box-col-6'>
      <Card className='height-equal'>
        <CommonCardHeader title={BadgeIndicatorTitle} span={BadgeIndicatorSubTitle} />
        <CardBody className='avatar-showcase'>
          <div className='avatars badge-avatar'>
            {BadgeIndicatorData?.map((item, index) => (
              <div className='avatar' key={index}>
                <Image height={item.size} width={item.size} className={`img-${item.size} rounded-circle`} src={`${ImagePath}/${item.image}.jpg`} alt='#' />
                <Badge color={item.color} className={`position-absolute rounded-circle ${item.class}`}>
                  {item.text}
                </Badge>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeIndicator;
