import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SizesModal } from "@/Constant";
import { SizeDatas } from "@/Data/UiKits/Modal";
import { Card, CardBody, Col } from "reactstrap";
import ExtraLargeModal from "./ExtraLargeModal";
import FullScreenModal from "./FullScreenModal";
import LargeModal from "./LargeModal";
import SmallModal from "./SmallModal";

const SizeModalCard = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={SizesModal} span={SizeDatas} />
        <CardBody className='badge-spacing'>
          <FullScreenModal />
          <ExtraLargeModal />
          <LargeModal/>
          <SmallModal/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizeModalCard;
