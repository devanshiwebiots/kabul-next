import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomSwitches } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomSwitchData, CustomSwitchDataList, DisableOutlineSwitchDataList } from "@/Data/Forms";
import CommonSwitch from "./Common/CommonSwitch";

const CustomSwitch = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonCardHeader title={CustomSwitches} span={CustomSwitchData} />
        <CardBody>
          <Row className="g-3">
            {CustomSwitchDataList?.map(({ cardClass, formClass, disabled, sm }, i) => (
              <Col md={4} sm={sm} key={i}>
                <div className={`card-wrapper border rounded-3 ${cardClass} `}>
                  <div className={`form-check-size ${formClass}`}>
                    {DisableOutlineSwitchDataList?.map((item, index) => (
                      <CommonSwitch color={item} defaultChecked disabled={disabled} key={index} />
                    ))}
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

export default CustomSwitch;
