import { Card, Col } from "reactstrap";
import UserFooter from "./Common/UserFooter";
import UserHeader from "./Common/UserHeader";

const ThirdData = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className='profile-img-style'>
          <UserHeader />
          <hr />
          <p>Learn about local flora and fauna: Expand your knowledge of the natural world by learning about the plants, animals, and ecosystems in your area. Visit local nature centers, read books or online resources, or join guided nature walks to deepen your understanding.Participate in outdoor activities: Take part in activities that allow you to interact with nature actively. This could include gardening, birdwatching, cycling, or even outdoor yoga or meditation.Engage your senses: Explore nature with all your senses. Listen to the sounds of birds chirping or leaves rustling in the wind. Feel the texture of tree bark or the sensation of cool water on your skin. Observe the colors, shapes, and patterns in the environment.</p>
          <UserFooter listClass='mt-4' />
        </div>
      </Card>
    </Col>
  );
};

export default ThirdData;