import { Close, FullscreenModal, Save } from "@/Constant";
import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import UXDesigner from "./UXDesigner";
import WebDesign from "./WebDesign";

const FullModal = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenToggle = () => setFullScreen(!fullScreen);

  return (
    <>
      <Button color="secondary-2x" outline onClick={fullScreenToggle}>{FullscreenModal}</Button>
      <Modal fullscreen isOpen={fullScreen} toggle={fullScreenToggle}>
        <ModalHeader toggle={fullScreenToggle}>
          {FullscreenModal}
        </ModalHeader>
        <ModalBody>
          <WebDesign />
          <UXDesigner />
        </ModalBody>
        <ModalFooter>
          <Button onClick={fullScreenToggle}>{Close}</Button>
          <Button color="primary">{Save}</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FullModal;
