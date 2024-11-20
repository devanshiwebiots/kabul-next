import { Col } from "reactstrap";
import Bookmark from "./Bookmark";
import CartHeader from "./CartHeader";
import MaximizeScreen from "./MaximizeScreen";
import MessageBox from "./MessageBox";
import NotificationBox from "./NotificationBox";
import RightSearch from "./RightSearch";
import DarkMode from "./DarkMode";
// import Language from "./Language";
import ProfileHeader from "./ProfileHeader";

const RightHeader = () => {
  return (
    <Col lg="7" md="6" className="nav-right col-auto box-col-6 pull-right right-header p-0 ms-auto">
      <ul className="nav-menus">
        <RightSearch />
        {/* <Language /> */}
        <MaximizeScreen />
        <NotificationBox />
        <Bookmark />
        <CartHeader />
        <MessageBox />
        <DarkMode />
        <ProfileHeader />
      </ul>
    </Col>
  );
};

export default RightHeader;
