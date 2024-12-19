import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { KabulCustomModal } from "@/Constant";
import { CustomModalData } from "@/Data/UiKits/Modal";
import { Card, CardBody, Col, Row } from "reactstrap";
import ModalTwo from "./ModalTwo";
import ModalThird from "./ModalThird";
import ModalOne from "./ModalOne";

const KabulCustomModals = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={KabulCustomModal} span={CustomModalData} />
        <CardBody>
          <Row className="g-3">
            <ModalOne />
            <ModalTwo />
            <ModalThird />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default KabulCustomModals;
