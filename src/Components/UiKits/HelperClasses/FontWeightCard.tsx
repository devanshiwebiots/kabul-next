import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FontWeight } from "@/Constant";
import { FontWeightDatas, FontWeightDetails } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const FontWeightCard = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal" style={{minHeight:"305px"}}>
        <CommonCardHeader title={FontWeight} span={FontWeightDatas} />
        <CardBody>
          {FontWeightDetails?.map((item, index) => (
            <div className="helper-common-box" key={index}>
              <div className={`f-w-${item.weight}`}>You can set {item.text} font weight heading .f-w-{item.weight}</div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeightCard;
