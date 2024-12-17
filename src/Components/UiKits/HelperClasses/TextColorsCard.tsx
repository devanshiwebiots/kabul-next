import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TextColors } from "@/Constant";
import { BorderColorData, TextColorDetail } from "@/Data/UiKits/HelperClasses";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";

const TextColorsCard = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal" style={{minHeight:"305px"}}>
        <CommonCardHeader title={TextColors} span={TextColorDetail} />
        <CardBody>
          {BorderColorData?.map((item, index) => (
            <Fragment key={index}>
              <div className="helper-common-box"></div>
              <div className="d-flex align-items-center gap-2" key={index}>
                <div className={`font-${item}`}>This is a <strong>font-{item}</strong> text used class as .font-{item}</div>
              </div>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorsCard;
