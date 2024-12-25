import { ImagePath, KabulTheme } from "@/Constant";
import { PlacementToastContentProp } from "@/Types/BonusUi";
import Image from "next/image";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const PlacementToastContent: React.FC<PlacementToastContentProp> = ({ data }) => {
  return (
    <div className="bg-light position-relative bd-example-toasts">
      <div className={`toast-container p-3 position-absolute ${data}`}>
        <Toast fade>
          <ToastHeader className="toast-img">
            <Image height={100} width={100} className="rounded me-2" src={`${ImagePath}/product_list/profile.png`} alt="profile" />
            <strong className="me-auto">{KabulTheme}</strong>
            <small className="d-sm-block d-none">25 min ago</small>
          </ToastHeader>
          <ToastBody className="toast-dark txt-dark">
            <p className="toast-content"><em className="txt-danger">Attackers</em> on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.</p>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default PlacementToastContent;