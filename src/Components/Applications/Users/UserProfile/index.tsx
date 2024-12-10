"use client";
import { Container, Row } from "reactstrap";
import ProfileUser from "./ProfileUser";
import FirstData from "./FirstData";
import SecondData from "./SecondData";
import ThirdData from "./ThirdData";
import ForthData from "./ForthData";

const UsersProfileContainer = () => {
  return (
    <Container fluid>
      <div className='user-profile only-users'>
        <Row>
          <ProfileUser />
          <FirstData/>
          <SecondData/>
          <ThirdData/>
          <ForthData/>
        </Row>
      </div>
    </Container>
  );
};

export default UsersProfileContainer;
