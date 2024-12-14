import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AdditiveBorder, AdditiveRadiusTitle, BordersAndDisplays, SubtractiveBorder } from "@/Constant";
import { AdditiveData, BorderData, RadiusData, Subtractivedata } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";

const BorderCard = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={BordersAndDisplays} span={BorderData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <Col xl="4" sm="6">
              <div className="border-wrapper h-100 border">
                <h5 className="f-w-600 mb-3">{AdditiveBorder}</h5>
                {AdditiveData?.map((item, index) => (
                  <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                    <div className={`helper-box bg-light border${item}`}></div>.border{item}
                  </div>
                ))}
              </div>
            </Col>
            <Col xl="4" sm="6">
              <div className="border-wrapper h-100 border">
                <h5 className="f-w-600 mb-3">{SubtractiveBorder}</h5>
                {Subtractivedata?.map((item, index) => (
                  <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                    <div className={`helper-box bg-light border border-${item}`}> </div>.border-{item}
                  </div>
                ))}
              </div>
            </Col>
            <Col xl="4" sm="12">
              <div className="border-wrapper h-100 border">
                <h5 className="f-w-600 mb-3">{AdditiveRadiusTitle}</h5>
                {RadiusData?.map((item, index) => (
                  <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                    <div className={`helper-radius radius-wrapper rounded${item}`}></div>.rounded{item}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderCard;
