import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CenteredModals, Close, ImagePath, SomethingWentWrong, VerticallyCentered } from "@/Constant";
import { CenteredModalList } from "@/Data/UiKits/Modal";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonModal from "./Common/CommonModal";
import RatioImage from "@/CommonComponents/RatioImage";

const CenteredModal = () => {
  const [centred, setCentered] = useState(false);
  const centeredToggle = () => setCentered(!centred);

  return (
    <Col xl={4}>
      <Card>
        <CommonCardHeader title={CenteredModals} span={CenteredModalList} />
        <CardBody className="badge-spacing">
          <Button color="success" onClick={centeredToggle}>{VerticallyCentered}</Button>
          <CommonModal centered isOpen={centred} toggle={centeredToggle}>
            <div className="modal-toggle-wrapper">
              <ul className="modal-img">
                <li className="text-center"><RatioImage src={` ${ImagePath}/gif/danger.gif`} alt="error" /></li>
              </ul>
              <h4 className="text-center pb-2">{SomethingWentWrong}</h4>
              <p className="text-center">Attackers on malicious activity may trick you into doing something dangerous like installing software or revealing your personal informations.</p>
              <Button className="d-flex m-auto" onClick={centeredToggle}>{Close}</Button>
            </div>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CenteredModal;
