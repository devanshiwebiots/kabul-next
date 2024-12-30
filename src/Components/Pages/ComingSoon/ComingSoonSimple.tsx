"use client";
import { Container } from "reactstrap";
import CommonCountdown from "./Common/CommonCountdown";

const ComingSoonSimpleContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="comingsoon">
          <CommonCountdown />
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonSimpleContainer;
