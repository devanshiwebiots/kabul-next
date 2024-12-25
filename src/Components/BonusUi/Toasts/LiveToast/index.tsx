import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LiveToasts } from "@/Constant";
import { LiveToastData } from "@/Data/BonusUi/Toasts";
import TopRightToast from "./TopRightToast";
import BottomLeftToast from "./BottomLeftToast";
import BottomRightToast from "./BottomRightToast";
import TopLeftToast from "./TopLeftToast";
 

const LiveToast = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={LiveToasts} span={LiveToastData} />
        <CardBody className='position-relative common-flex'>
            <TopRightToast/>
            <BottomRightToast/>
            <TopLeftToast/>
            <BottomLeftToast/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveToast;
