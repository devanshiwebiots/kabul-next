import SVG from "@/CommonComponents/SVG";
import { ImagePath } from "@/Constant";
import { BalanceData } from "@/Data/UiKits/Modal";
import { BalanceModalType } from "@/Types/UiKits";
import { Routes } from "@/Utils/Routes";
import Image from "next/image";
import Link from "next/link";
import { Badge, Card, CardBody, Col, Modal } from "reactstrap";

const BalanceModal: React.FC<BalanceModalType> = ({ modalThird, modalThirdToggle: modalThirdTogggle }) => {
  return (
    <Modal centered fade isOpen={modalThird} toggle={modalThirdTogggle}>
      <Col xl={12}>
        <Card className="balance-box mb-0">
          <CardBody>
            <div className="balance-profile">
              <div className="balance-img">
                <Image height={68} width={68} className="image-fluid" src={`${ImagePath}/dashboard/profile.png`} alt="user vector" />
                <Link className="edit-icon" href={Routes.Users.UserProfile}><SVG iconId="pencil" /></Link>
              </div>
              <span className="f-light d-block">Your Balance</span>
              <h4 className="mt-1">$768,987.90</h4>
              <ul>
                {BalanceData?.map(({ title, text, data, icon, color }, index) => (
                  <li key={index}>
                    <div className={`balance-item ${color}`}>
                      <div className="balance-icon-wrap"><div className="balance-icon">{icon}</div></div>
                      <div>
                        <span className="f-12 f-light">{title}</span>
                        <h4>{text}K</h4><Badge color="" className={`rounded-pill text-${color} badge-light-${color}`}>{data}%</Badge>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Modal>
  );
};

export default BalanceModal;