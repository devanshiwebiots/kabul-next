import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HTMLElementsWithHoverEffect, } from "@/Constant";
import { HoverTooltipData, HoverTooltipList } from "@/Data/UiKits/Tooltip";
import { Card, CardBody, Col } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";

const ElementsWithHoverEffect = () => {
  
  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={HTMLElementsWithHoverEffect} span={HoverTooltipData} />
        <CardBody>
          <div className="common-flex">
            {HoverTooltipList?.map((data) => (
              <CommonTooltip key={data.id} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ElementsWithHoverEffect;
