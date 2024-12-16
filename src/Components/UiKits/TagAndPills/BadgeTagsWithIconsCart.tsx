import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BadgeTagsWithIcons } from "@/Constant";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { IconContext, IconData } from "@/Data/UiKits/TagAndPills";

const BadgeTagsWithIconsCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="badges-custom-card">
        <CommonCardHeader title={BadgeTagsWithIcons} span={IconData} />
        <CommonTagAndPillsCardBody number={IconContext} />
      </Card>
    </Col>
  )
};

export default BadgeTagsWithIconsCard;