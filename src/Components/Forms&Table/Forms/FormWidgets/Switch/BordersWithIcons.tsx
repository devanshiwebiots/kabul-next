import { Card, CardBody, Col, Label } from "reactstrap";
import { BordersWithIcon } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BorderIconSwitchData, IconSwitchDataList } from "@/Data/Forms";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const BordersWithIcons = () => {
  return (
    <Col xl={4}>
      <Card className="height-equal">
        <CommonCardHeader title={BordersWithIcon} span={BorderIconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper ">
          {IconSwitchDataList?.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end icon-state switch-outline">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10" check>Bordered {text} Switch</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default BordersWithIcons