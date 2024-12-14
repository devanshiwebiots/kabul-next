import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Grouping } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { GroupingData } from "@/Data/UiKits/Avatars";
import GroupingFirst from "./GroupingFirst";
import GroupingSecond from "./GroupingSecond";
import GroupingThird from "./GroupingThird";

const GroupingAvatar = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={Grouping} span={GroupingData} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <GroupingFirst />
              <GroupingSecond />
              <GroupingThird />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupingAvatar;
