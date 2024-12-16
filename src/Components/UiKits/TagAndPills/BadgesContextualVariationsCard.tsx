import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BadgesContextualVariations } from "@/Constant";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { BadgeData, BadgesContext } from "@/Data/UiKits/TagAndPills";

const BadgesContextualVariationsCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="badges-custom-card">
        <CommonCardHeader title={BadgesContextualVariations} span={BadgeData} />
        <CommonTagAndPillsCardBody data={BadgesContext} />
      </Card>
    </Col>
  );
};

export default BadgesContextualVariationsCard;
