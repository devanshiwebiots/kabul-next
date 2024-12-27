import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationsOfRightRibbons } from "@/Constant";
import { RibbonProp } from "@/Types/BonusUi";
import { Fragment } from "react";
import { RightRibbonData, RightRibbonDataList } from "@/Data/BonusUi/Ribbons";

const RightRibbons = () => {

  return (
    <Row>
      <Col sm={12} xl={12}>
        <Card>
          <CommonCardHeader title={VariationsOfRightRibbons} span={RightRibbonData} />
          <CardBody>
            <Row className="g-3">
              {RightRibbonDataList?.map(({ className, ribbonClass, title, span, icon }: RibbonProp, index) => (
                <Col sm={6} xl={4} key={index}>
                  <div className={`border border-1 height-equal ${className ? className : ""}`} style={{ minHeight: "225px" }}>
                    <div className={`ribbon ${ribbonClass}`}>
                      {title && title}
                      {icon && icon}
                    </div>
                    <p>
                      {span.map(({ spanText, text }, index) => (
                        <Fragment key={index}>
                          {text && text}
                          {spanText && <em className="txt-danger">{spanText}</em>}
                        </Fragment>
                      ))}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RightRibbons;
