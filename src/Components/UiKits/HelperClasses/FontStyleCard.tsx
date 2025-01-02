import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FontStyle } from "@/Constant";
import { FontData, FontStyleDetail } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const FontStyleCard = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal" style={{minHeight:"305px"}}>
        <CommonCardHeader title={FontStyle} span={FontData} />
        <CardBody>
          {FontStyleDetail?.map((item, index) => (
            <p className={`f-s-${item}`} key={index}>This is a <strong>.f-s-{item}</strong> font-style</p>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontStyleCard;
