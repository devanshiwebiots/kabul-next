import { KabulSignUp, OpenModalForKabul } from "@/Constant";
import { useState } from "react";
import { Button, ModalHeader } from "reactstrap";
import CommonModal from "../../Common/CommonModal";
import OpenModalForm from "./OpenModalForm";

const OpenModalKabul = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModaltoggle = () => setOpenModal(!openModal);

  return (
    <>
      <Button color='primary' onClick={openModaltoggle}>
        {OpenModalForKabul}
      </Button>
      <CommonModal isOpen={openModal} toggle={openModaltoggle} modalBodyClassName='p-0' heading={KabulSignUp}>
        <div className='modal-toggle-wrapper social-profile text-start dark-sign-up'>
          <ModalHeader className='justify-content-center border-0 f-w-600'>{KabulSignUp}</ModalHeader>
          <OpenModalForm modal={openModaltoggle} />
        </div>
      </CommonModal>
    </>
  );
};

export default OpenModalKabul;
