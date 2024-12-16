import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OnlyOneSideMargin } from "@/Constant";
import { SideMarginData, SideMarginDetails } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";

const SideMargin = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonCardHeader title={OnlyOneSideMargin} span={SideMarginData} />
        <CardBody>
          <Row className="g-3">
            {SideMarginDetails?.map((item, index) => (
              <Col xxl={3} sm={6} key={index}>
                <div className="border-wrapper h-100 alert-light-light dark-helper">
                  <h4 className="mb-3">Margin {item.title}</h4>
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

export default SideMargin;
