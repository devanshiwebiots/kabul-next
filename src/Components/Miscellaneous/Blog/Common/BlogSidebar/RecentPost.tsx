import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CurrentPosts, ImagePath } from "@/Constant";
import { RecentPosts } from "@/Data/Miscellaneous/Blog";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const RecentPost = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={CurrentPosts} />
        <CardBody>
          <ul className='recent-blog'>
            {RecentPosts?.map((post,index) => (
              <li key={index}>
                <div className='d-flex gap-2 align-items-start'>
                  <Image height={42} width={70} priority className='img-fluid rounded' src={`${ImagePath}/blog/small/${index + 1}.jpg`} alt='Generic placeholder' />
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

export default RecentPost;