import { ClickOut, ImagePath } from "@/Constant";
import { useState } from "react";
import { Button, Col } from "reactstrap";
import CommonKabulModalTitle from "../Common/CommonKabulModalTitle";
import ProfileModal from "./ProfileModal";
import RatioImage from "@/CommonComponents/RatioImage";

const ModalOne = () => {
  const [modalOne, setModalOne] = useState(false);
  const modalOneTogggle = () => setModalOne(!modalOne);

  return (
    <Col xl={4} md={6} className='custom-alert text-center'>
      <div className='card-wrapper border rounded-3 h-100'>
        <div className='Kabul-demo-img'>
          <CommonKabulModalTitle heading='Modal 1 -' subHeading='Profile Modal' text='Example of Kabul dashboard profile card.' />
          <div className='overflow-hidden'>
            <RatioImage className="img-fluid" src={`${ImagePath}/alert/social.jpg`} alt="social" />
            <Button color='primary' className='mx-auto mt-3' onClick={modalOneTogggle}>
              {ClickOut}
            </Button>
          </div>
          <ProfileModal modalOne={modalOne} modalOneTogggle={modalOneTogggle} />
        </div>
      </div>
    </Col>
  );
};

export default ModalOne;
