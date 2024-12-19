import { Close, SaveChanges } from "@/Constant";
import { CommonModalType } from "@/Types/UiKits";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CommonModal: React.FC<CommonModalType> = ({ backdrop, centered, size, isOpen, toggle, title, onClosed, sizeTitle, fullTitle, modalBodyClassName, children }) => {
  return (
    <Modal backdrop={backdrop} centered={centered} size={size} isOpen={isOpen} toggle={toggle} onClosed={onClosed}>
      {(title || sizeTitle || fullTitle) && (
        <ModalHeader toggle={toggle} className="modal-title">
          {title && title}
          {sizeTitle && sizeTitle}
          {fullTitle && fullTitle}
        </ModalHeader>
      )}
      <ModalBody className={modalBodyClassName ? modalBodyClassName : ""}>{children}</ModalBody>
      {(title || fullTitle) && (
        <ModalFooter>
          <Button onClick={toggle}>{Close}</Button>
          <Button color="primary">{SaveChanges}</Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default CommonModal;
