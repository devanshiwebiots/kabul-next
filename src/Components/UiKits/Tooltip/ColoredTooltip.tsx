import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColoredTooltips } from "@/Constant";
import { ColorTooltipData, ColorTooltipList } from "@/Data/UiKits/Tooltip";
import { Card, CardBody, Col } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";

const ColoredTooltip = () => {

  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={ColoredTooltips} span={ColorTooltipData} />
        <CardBody>
          <div className="common-flex">
            {ColorTooltipList?.map((item, index) => (
              <CommonTooltip key={index} item={item} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredTooltip;
