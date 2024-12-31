import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TrendPosts } from "@/Constant";
import { TrendingPosts } from "@/Data/Miscellaneous/Blog";
import { Card, CardBody, Col } from "reactstrap";

const TrendingPost = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={TrendPosts} />
        <CardBody>
          <ul className='recent-blog trending-blog'>
            {TrendingPosts?.map((post,index) => (
              <li key={index+1}>
                <div className='d-flex gap-2 align-items-start'>
                  <h5>{index+1}.</h5>
                  <div className='flex-grow-1'>
                    <h6>{post.title}</h6>
                    <p>{post.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
}

export default TrendingPost;