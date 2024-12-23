import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { HorizontalScrollbars, ImagePath } from "@/Constant";
import { HorizontalScrollData } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";

const HorizontalScrollbar = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={HorizontalScrollbars} span={HorizontalScrollData} />
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: "300px" }}>
            <div className="horz-scroll-content scroll-content-width">
              <Row>
                {[...Array(6)]?.map((_, index) => (
                  <Col sm={2} key={index}>
                    <div className="horizontal-img"><RatioImage className="img-fluid" src={`${ImagePath}/scrollbar/fashion${index + 1}.jpg`} alt="girl" /></div>
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScrollbar;
