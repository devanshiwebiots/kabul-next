import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationsOfLeftRibbons } from "@/Constant";
import { LeftRibbonsData, LeftRibbonsDataList } from "@/Data/BonusUi/Ribbons";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Fragment } from "react";
import { RibbonProp } from "@/Types/BonusUi";

const LeftRibbons = () => {
  return (
    <Row>
      <Col sm={12} xl={12}>
        <Card>
          <CommonCardHeader title={VariationsOfLeftRibbons} span={LeftRibbonsData} />
          <CardBody>
            <Row className='g-3'>
              {LeftRibbonsDataList?.map(({ className, ribbonClass, title, span, icon }: RibbonProp, index) => (
                <Col sm={6} xl={4} key={index}>
                  <div className={`border border-1 height-equal ${className ? className : ""}`} style={{minHeight:"225px"}}>
                    <div className={`ribbon ${ribbonClass}`}>{title && title}{icon && icon}</div>
                    <p>
                      {span?.map(({ spanText, text }, i) => (
                        <Fragment key={i}>
                          {index === 0 ? (
                            <>
                              {text && <em className="txt-danger">{text}</em>}
                              {spanText && ` ${spanText}`}
                            </>
                          ) : (
                            <>
                              {text && text}
                              {spanText && <em className="txt-danger">{spanText}</em>}
                            </>
                          )}
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

export default LeftRibbons;
