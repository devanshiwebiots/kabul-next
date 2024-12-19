import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicPopovers } from "@/Constant";
import { BasicPopoverData, BasicPopoverList } from "@/Data/UiKits/Popover";
import { Card, CardBody, Col } from "reactstrap";
import CommonPopover from "./Common/CommonPopover";

const BasicPopover = () => {

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={BasicPopovers} span={BasicPopoverData} />
        <CardBody className='common-flex popover-wrapper'>
          {BasicPopoverList?.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicPopover;
