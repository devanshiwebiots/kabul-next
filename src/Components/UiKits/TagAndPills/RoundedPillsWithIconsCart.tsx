import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RoundedPillsWithIcons } from "@/Constant";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { RondedPillData, RoundedPillContext } from "@/Data/UiKits/TagAndPills";

const RoundedPillsWithIconsCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={RoundedPillsWithIcons} span={RondedPillData} />
        <CommonTagAndPillsCardBody number={RoundedPillContext} />
      </Card>
    </Col>
  );
};

export default RoundedPillsWithIconsCard;
