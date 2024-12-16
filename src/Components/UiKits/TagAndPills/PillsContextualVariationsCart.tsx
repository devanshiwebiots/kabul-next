import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PillsContextualVariations } from "@/Constant";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { BadgesContext, PillsData } from "@/Data/UiKits/TagAndPills";

const PillsContextualVariationsCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="badges-custom-card">
        <CommonCardHeader title={PillsContextualVariations} span={PillsData} />
        <CommonTagAndPillsCardBody data={BadgesContext} pill />
      </Card>
    </Col>
  );
};

export default PillsContextualVariationsCard;