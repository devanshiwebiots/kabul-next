import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Margin } from "@/Constant";
import { MarginData, MarginPaddingDetails } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const MarginCard = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonCardHeader title={Margin} span={MarginData} />
        <CardBody>
          <div className="gradient-border">
            {MarginPaddingDetails?.map((item, index) => (
              <div className="helper-common-box gap-0 mb-0" key={index}>
                <div className={`helper-box m-${item} border bg-light`}></div>
                <span>.m-{item}</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarginCard;
