import { Container, Row } from "reactstrap";
import { useTour } from "@reactour/tour";
import { useEffect } from "react";
import UserProfile from "./UserProfile";
import UserProfileSecondSection from "./UserProfileSecondSection";
import UserProfileFirstSection from "./UserProfileFirstSection";
import UserProfileThirdSection from "./UserProfileThirdSection";
import UserProfileFourthSection from "./UserProfileFourthSection";

const TourMain = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Container fluid>
        <div className="user-profile">
          <Row>
            <UserProfile />
            <UserProfileFirstSection />
            <UserProfileSecondSection />
            <UserProfileThirdSection />
            <UserProfileFourthSection />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourMain;
