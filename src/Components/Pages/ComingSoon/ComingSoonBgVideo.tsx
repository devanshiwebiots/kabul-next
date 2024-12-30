"use client";
import { ImagePath } from "@/Constant";
import { Container } from "reactstrap";
import CommonCountdown from "./Common/CommonCountdown";

const ComingSoonBgVideoContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="comingsoon auth-bg-video">
          <video className="bgvideo-comingsoon" id="bgvid" poster={`${ImagePath}/other-images/coming-soon-bg.jpg`} playsInline autoPlay muted loop>
            <source src="/assets/video/auth-bg.mp4" type="video/mp4" />
          </video>
          <CommonCountdown />
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonBgVideoContainer;
