import { Card, Col, Row } from "reactstrap";
import CommonTourFooter from "../Common/CommonTourFooter";
import SecondSectionAboutSection from "./SecondSectionAboutSection";
import CommonTourHeader from "../Common/CommonTourHeader";
import SecondSectionSocialMedia from "./SecondSectionSocialMedia";

const UserProfileSecondSection = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style">
          <Row className="g-2">
            <CommonTourHeader date="25 Jan" time="1 min read" />
            <SecondSectionSocialMedia />
          </Row>
          <hr />
          <SecondSectionAboutSection />
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileSecondSection;
