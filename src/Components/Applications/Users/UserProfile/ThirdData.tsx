import { Card, Col } from "reactstrap";
import UserFooter from "./Common/UserFooter";
import UserHeader from "./Common/UserHeader";
import { ProfileData2 } from "@/Data/Users";

const ThirdData = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className='profile-img-style'>
          <UserHeader />
          <hr />
          <p>{ProfileData2}</p>
          <UserFooter listClass='mt-4' />
        </div>
      </Card>
    </Col>
  );
};

export default ThirdData;
