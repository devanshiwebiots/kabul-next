import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BorderColor } from "@/Constant";
import { BorderColorDatas, BorderColorDetail } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const BorderColorCard = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={BorderColor} span={BorderColorDetail} />
        <CardBody>
          <div className="gradient-border">
            {BorderColorDatas?.map((item, index) => (
              <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                <div className={`helper-box b-${item} border fill-wrapper`}> </div>.b-{item}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderColorCard;