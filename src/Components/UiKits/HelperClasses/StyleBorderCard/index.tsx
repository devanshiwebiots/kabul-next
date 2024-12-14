import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BorderColor, BorderWidth, CustomBorderRadiusClass, StylerBorders, TextColors } from "@/Constant";
import { BackgroundColorsData, BorderColorData, StyleData } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";

const StyleBorderCard = () => {
  return (
    <Col xs='12'>
      <Card>
        <CommonCardHeader title={StylerBorders} span={StyleData} headClass='card-no-border pb-0' />
        <CardBody>
          <Row className='g-3'>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 alert-light-light dark-helper">
                <h5 className="f-w-600 mb-3">{CustomBorderRadiusClass}</h5>
                {[...Array(11)]?.map((_, index) => (
                  <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                    <div className={`helper-box b-r-${index} bg-light border`}></div>
                    <span>.b-r-{index}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 alert-light-light dark-helper">
                <h5 className="f-w-600 mb-3">{BorderColor}</h5>
                {BorderColorData?.map((item, index) => (
                  <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                    <div className={`helper-box border-${item} border`}></div>
                    <span>.border{item}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 alert-light-light dark-helper">
                <h5 className="f-w-600 mb-3">{BorderWidth}</h5>
                {[...Array(10)].map((_, index) => (
                  <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                    <div className={`helper-box border-${index + 1} border`}> </div>
                    <span>.border-{index + 1}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper alert-light-light h-100 dark-helper">
                <h5 className="f-w-600 mb-3">{TextColors}</h5>
                {BackgroundColorsData?.map((item, index) => (
                  <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                    <div className={`helper-box helper-text border txt-${item} ${item === "light" ? "bg-dark" : ""}`}>C </div>
                    <span>.txt-{item}</span>
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

export default StyleBorderCard;
