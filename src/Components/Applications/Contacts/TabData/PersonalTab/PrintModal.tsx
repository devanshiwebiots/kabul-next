import { Cancel, Print, PrintViews } from "@/Constant";
import { PrintModalPropsTypes } from "@/Types/Contact";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import PrintPreview from "./PrintPreview";

const PrintModal: React.FC<PrintModalPropsTypes> = ({ printModal, selectedUser, toggleCallback }) => {

  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

  const printModalToggle = () => {
    toggleCallback(false)
    handlePrint()
  };

  const closePrintModal = () => {
    toggleCallback(false)
  }

  return (
    <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle}>
      <ModalHeader className="modal-title" toggle={printModalToggle}>{PrintViews}</ModalHeader>
      <ModalBody className="list-persons">
        <PrintPreview selectedUser={selectedUser} ref={contentRef} />
        <Button className="me-1" onClick={printModalToggle}>{Print}</Button>
        <Button color="primary" onClick={closePrintModal}>{Cancel}</Button>
      </ModalBody>
    </Modal>
  );
};

export default PrintModal;
