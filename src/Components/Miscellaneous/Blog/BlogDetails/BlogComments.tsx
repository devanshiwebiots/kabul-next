import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Comments, Href, ImagePath } from "@/Constant";
import { CommentsData } from "@/Data/Miscellaneous/Blog";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const BlogComments = () => {
  return (
    <Col sm={12}>
      <Card className='blog-comment'>
        <CommonCardHeader title={Comments} />
        <CardBody>
          <ul className='comment-section'>
            {CommentsData?.map((comment,index) => (
              <li key={index}>
                <div className='d-flex'>
                  <Image height={50} width={50} priority src={`${ImagePath}/avtar/${comment.avatar}.jpg`} alt='Generic placeholder' />
                  <div className='flex-grow-1'>
                    <h6>{comment.name}</h6>
                    <span>
                      ({comment.date})
                      <Link className='ms-1' href={Href}>reply</Link>
                    </span>
                    <p>{comment.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlogComments;
