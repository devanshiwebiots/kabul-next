import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OnlyOneSidePadding } from "@/Constant";
import { SidePaddingData, SidePaddingDetails } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";

const SidePadding = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonCardHeader title={OnlyOneSidePadding} span={SidePaddingData} />
        <CardBody>
          <Row className="g-3">
            {SidePaddingDetails?.map((item, index) => (
              <Col xxl={3} sm={6} key={index}>
                <div className="border-wrapper h-100 alert-light-light dark-helper">
                  <h5 className="f-w-600 mb-3">Padding {item.title}</h5>
                  <div className="common-p-box">{item?.direction?.map((data, index) => (<span key={index}>{data}</span>))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SidePadding;
