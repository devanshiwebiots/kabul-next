import { ClickOut, ImagePath, KabulLogin } from "@/Constant";
import { useState } from "react";
import { Button, Col } from "reactstrap";
import CommonModal from "../Common/CommonModal";
import StaticForm from "../StaticBackdropModal/StaticForm";
import CommonKabulModalTitle from "./Common/CommonKabulModalTitle";
import RatioImage from "@/CommonComponents/RatioImage";

const ModalTwo = () => {
  const [modalTwo, setModalTwo] = useState(false);
  const modalTwoTogggle = () => setModalTwo(!modalTwo);

  return (
    <Col xl={4} md={6} className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Kabul-demo-img">
          <CommonKabulModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of Kabul login form." />
          <div className="overflow-hidden">
            <RatioImage className="img-fluid" src={`${ImagePath}/alert/learning.png`} alt="social" />
            <Button color="primary" className="mx-auto mt-3" onClick={modalTwoTogggle}>{ClickOut}</Button>
          </div>
          <CommonModal centered modalBodyClassName="social-profile text-start border-top-0" isOpen={modalTwo} toggle={modalTwoTogggle}>
            <div className="modal-toggle-wrapper">
              <h3>{KabulLogin}</h3>
              <p>Fill in your information below to continue.</p>
              <StaticForm staticModalToggle={modalTwoTogggle} />
            </div>
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};

export default ModalTwo;
