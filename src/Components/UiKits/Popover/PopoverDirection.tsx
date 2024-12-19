import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PopoverDirections } from "@/Constant";
import { DirectionData, DirectionList } from "@/Data/UiKits/Popover";
import { Card, CardBody, Col } from "reactstrap";
import CommonPopover from "./Common/CommonPopover";

const PopoverDirection = () => {

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={PopoverDirections} span={DirectionData} />
        <CardBody className="common-flex popover-wrapper">
          {DirectionList?.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PopoverDirection;
