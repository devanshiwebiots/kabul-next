import RatioImage from "@/CommonComponents/RatioImage";
import { Designer, ImagePath } from "@/Constant";
import { Row } from "reactstrap";

const UserFormHead = () => {
  return (
    <Row className="mb-2">
      <div className="profile-title">
        <div className="d-flex">
          <RatioImage className="img-70 rounded-circle" alt="" src={`${ImagePath}/user/7.jpg`} />
          <div className="flex-grow-1">
            <h4 className="mb-1 text-uppercase">Mark Jecno</h4>
            <p>{Designer}</p>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default UserFormHead;
