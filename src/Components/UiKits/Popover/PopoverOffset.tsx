import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PopoverOffsets } from "@/Constant";
import { OffsetData, OffsetList } from "@/Data/UiKits/Popover";
import { Card, CardBody, Col } from "reactstrap";
import CommonPopover from "./Common/CommonPopover";

const PopoverOffset = () => {
  
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={PopoverOffsets} span={OffsetData} />
        <CardBody className="common-flex popover-wrapper">
          {OffsetList?.map((data, index) => (
            <CommonPopover key={index} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PopoverOffset;
