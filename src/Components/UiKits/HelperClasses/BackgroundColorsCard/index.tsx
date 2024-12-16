import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BackgroundColors, DarkBackground, ExtendedBackgroundColor, LightBackground } from "@/Constant";
import { BackgroundData } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";
import BackgroundColorSection from "./Common/BackgroundColorSection";

const BackgroundColorsCard = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={BackgroundColors} span={BackgroundData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <BackgroundColorSection title={DarkBackground} classPrefix="bg" />
            <BackgroundColorSection title={LightBackground} classPrefix="alert-light" />
            <Col xl={4} sm={12}>
              <div className="border-wrapper h-100 border">
                <h4 className="mb-3">{ExtendedBackgroundColor}</h4>
                <div className="d-flex align-items-center mb-2 gap-2">
                  <div className="helper-box light-card"> </div>.light-card
                </div>
                <div className="d-flex align-items-center mb-2 gap-2">
                  <div className="helper-box light-background border"> </div>.light-background
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BackgroundColorsCard;
