import { Row } from "reactstrap";
import Followus from "./Followus";
import PopularTag from "./PopularTag";
import RecentPost from "./RecentPost";
import SearchBlog from "./SearchBlog";
import Subscriber from "./Subscriber";
import TrendingPost from "./TrendingPost";

const InnerSidebar = () => {
  return (
    <Row className='blog-sidebar'>
      <SearchBlog />
      <TrendingPost />
      <Followus />
      <RecentPost />
      <PopularTag />
      <Subscriber />
    </Row>
  );
}

export default InnerSidebar;