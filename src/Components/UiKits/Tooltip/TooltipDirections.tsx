import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DirectionsTooltip } from "@/Constant";
import { DirectionTooltipData, DirectionTooltipList } from "@/Data/UiKits/Tooltip";
import { Card, CardBody, Col } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";

const TooltipDirections = () => {

  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={DirectionsTooltip} span={DirectionTooltipData} />
        <CardBody>
          <div className="common-flex">
            {DirectionTooltipList?.map((item) => (
              <CommonTooltip key={item.id} item={item} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TooltipDirections;
