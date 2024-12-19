import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicModal } from "@/Constant";
import { BasicData } from "@/Data/UiKits/Modal";
import { Card, CardBody, Col } from "reactstrap";
import SimpleModal from "./SimpleModal";
import ScrollingModal from "./ScrollingModal";
import ToolTipAndPopover from "./ToolTipAndPopover";
import OpenModalKabul from "./OpenModalKabul";

const BasicModalCard = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={BasicModal} span={BasicData} />
        <CardBody className='badge-spacing'>
          <SimpleModal />
          <ScrollingModal />
          <ToolTipAndPopover />
          <OpenModalKabul />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModalCard;
