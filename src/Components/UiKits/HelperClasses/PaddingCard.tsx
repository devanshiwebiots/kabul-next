import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Padding } from "@/Constant";
import { PaddingCartData, MarginPaddingDetails } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const PaddingCard = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonCardHeader title={Padding} span={PaddingCartData} />
        <CardBody>
          <div className="border-wrapper h-100 alert-light-light dark-helper">
            <h5 className="f-w-600 mb-3">{Padding}</h5>
            <div className="helper-common-box helper-p-wrapper">
              {MarginPaddingDetails?.map((item, index) => (
                <div className={`helper-p-box p-${item} bg-light border`} key={index}>
                  <span>.p-{item}</span>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaddingCard;
