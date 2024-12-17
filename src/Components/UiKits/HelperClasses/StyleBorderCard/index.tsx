import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StylerBorders, TextColors } from "@/Constant";
import { BackgroundColorsData, StyleData } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";
import BorderCards from "./BorderCards";

const StyleBorderCard = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={StylerBorders} span={StyleData} />
        <CardBody>
          <Row className='g-3'>
            <BorderCards />
            <Col xxl={3} sm={6}>
              <div className="border-wrapper alert-light-light h-100 dark-helper">
                <h4 className="mb-3">{TextColors}</h4>
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
