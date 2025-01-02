import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FontSizes } from "@/Constant";
import { FontSideData, FontSize } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const FontSizesCard = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={FontSizes} span={FontSize} />
        <CardBody>
          <div className="gradient-border">
            {FontSideData?.map((item, index) => (
              <div className="font-wrapper border" key={index}>
                <div className={`f-${item}`}>Font-size .f-{item}</div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontSizesCard;
