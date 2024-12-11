import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { IconsSwitches } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { IconSwitchData, IconSwitchDataList } from "@/Data/Forms";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const IconsSwitch = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonCardHeader title={IconsSwitches} span={IconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper">
          {IconSwitchDataList?.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end icon-state">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10" check>{text}</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsSwitch;
