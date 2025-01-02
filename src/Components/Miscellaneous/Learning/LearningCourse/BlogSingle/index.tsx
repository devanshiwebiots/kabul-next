import { CommentTitleLearning, ImagePath } from "@/Constant";
import BlogDetails from "./BlogDetails";
import { Card, CardBody } from "reactstrap";
import UserComment from "./UserComment";
import { LearningCommentOne, LearningCommentTwo } from "@/Data/Miscellaneous/Learning";
import RatioImage from "@/CommonComponents/RatioImage";

const BlogSingle = () => {
  return (
    <Card>
      <CardBody>
        <div className='blog-single'>
          <div className='blog-box blog-details'>
            <RatioImage className='img-fluid w-100' src={`${ImagePath}/faq/learning-1.png`} alt='blog-main' />
            <BlogDetails />
          </div>
          <section className='comment-box'>
            <h4>{CommentTitleLearning}</h4>
            <hr />
            <ul>
              <UserComment ImageSrc='comment.jpg' userReplay text={LearningCommentOne} />
              <UserComment ImageSrc='9.jpg' text={LearningCommentTwo} />
            </ul>
          </section>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogSingle;
