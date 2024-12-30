"use client";
import { Container } from "reactstrap";
import CommonCountdown from "./Common/CommonCountdown";

const ComingSoonBgImageContainer = () => {
  return (
    <div className='page-wrapper compact-wrapper'>
      <Container fluid className='p-0 m-0'>
        <div className='comingsoon comingsoon-bgimg'>
          <CommonCountdown />
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonBgImageContainer;
