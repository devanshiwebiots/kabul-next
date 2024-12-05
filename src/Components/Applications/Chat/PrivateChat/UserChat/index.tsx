import { Card, Col } from "reactstrap";
import RightChatBody from "./RightChatBody";
import RightChatHeader from "./RightChatHeader";

const UserChat = () => {
  return (
    <Col xxl={9} xl={8} md={7} className='box-col-7'>
      <Card className='right-sidebar-chat'>
        <RightChatHeader />
        <RightChatBody />
      </Card>
    </Col>
  );
};

export default UserChat;
