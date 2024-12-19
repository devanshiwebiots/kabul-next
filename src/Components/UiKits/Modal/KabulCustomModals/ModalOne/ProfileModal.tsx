import SVG from "@/CommonComponents/SVG";
import { ImagePath } from "@/Constant";
import { ProfileData } from "@/Data/UiKits/Modal";
import { ProfileModalType } from "@/Types/UiKits";
import { Routes } from "@/Utils/Routes";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, Modal } from "reactstrap";

const ProfileModal:React.FC<ProfileModalType> = ({ modalOne, modalOneTogggle }) => {

  return (
    <Modal fade centered isOpen={modalOne} toggle={modalOneTogggle}>
      <div className="modal-dialog m-0">
        <div className="modal-content">
          <Col xl={12}>
            <Card className="social-profile mb-0 border-top-0">
              <CardBody>
                <div className="social-img-wrap">
                  <div className="social-img">
                    <Image height={68} width={68} src={`${ImagePath}/product_list/profile.png`} alt="profile" />
                  </div>
                  <div className="edit-icon"><SVG iconId="profile-check" /></div>
                </div>
                <div className="social-details">
                  <h4 className="mb-1"><Link href={Routes.SocialApp}>Brooklyn Simmons</Link></h4>
                  <span className="f-light">@brookly.simmons</span>
                  <ul className="social-follow">
                    <li>
                      <h4 className="mb-0">1,908</h4>
                      <span className="f-light">Posts</span>
                    </li>
                    {ProfileData?.map(({ heading, data }, index) => (
                      <li key={index}>
                        <h4 className="mb-0">{heading}</h4>
                        <span className="f-light">{data}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
