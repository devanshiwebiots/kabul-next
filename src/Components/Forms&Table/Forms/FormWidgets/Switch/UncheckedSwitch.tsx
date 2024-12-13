import { Card, CardBody, Col, Label } from "reactstrap";
import { UncheckedSwitches } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { IconSwitchDataList, UncheckedSwitchData } from "@/Data/Forms";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const UncheckedSwitch = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonCardHeader title={UncheckedSwitches} span={UncheckedSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper">
          {IconSwitchDataList?.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10" check>Unchecked {text} Switch</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default UncheckedSwitch;
