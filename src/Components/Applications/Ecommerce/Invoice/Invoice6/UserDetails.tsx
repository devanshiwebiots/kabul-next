import { Col, Row } from "reactstrap";
import { ImagePath, ProjectDescription } from "@/Constant";
import Image from "next/image";

const UserDetails = () => {
  return (
    <Row>
      <Col md={4}>
        <div className="d-flex">
          <div className="media-left">
            <Image height={60} width={60} priority className="media-object rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="user" />
          </div>
          <div className="flex-grow-1 m-l-20">
            <h4 className="media-heading">Johan Deo</h4>
            <p>JohanDeo@gmail.com<br /><span>555-555-5555</span></p>
          </div>
        </div>
      </Col>
      <Col md={8}>
        <div className="text-md-end" id="project">
          <h6>{ProjectDescription}</h6>
          <p>Youre Only As Good As Your Last Collection, Which Is An EnormousPressure. Jeans Represent Democracy In Fashion.Fashion Is AboutDressing According To Whats Fashionable.</p>
        </div>
      </Col>
    </Row>
  );
};

export default UserDetails;
