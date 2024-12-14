import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AvatarInitialTitle } from "@/Constant";
import { AvatarInitialData, AvatarInitialSubTitle } from "@/Data/UiKits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

const AvatarInitial = () => {
  return (
    <Col xl={4} sm={12}>
      <Card>
        <CommonCardHeader title={AvatarInitialTitle} span={AvatarInitialSubTitle} />
        <CardBody className='common-align flex-column align-items-start align-items-lg-center'>
          <div className='letter-avatar'>
            {AvatarInitialData?.map((item, index) => (
              <h6 key={index} className={`txt-${item.color} bg-light-${item.color}`}>
                {item.text}
              </h6>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarInitial;
