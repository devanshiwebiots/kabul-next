import RatioImage from "@/CommonComponents/RatioImage";
import SVG from "@/CommonComponents/SVG";
import { Href, ImagePath } from "@/Constant";
import { BlogGridData } from "@/Data/Miscellaneous/Blog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const BlogGridDetail = () => {
  const [liked, setLiked] = useState(BlogGridData.map(() => false));
  const toggleLike = (index: number) => {
    setLiked((prevLiked) => prevLiked.map((like, i) => (i === index ? !like : like)));
  };

  return (
    <Row>
      {BlogGridData?.map((blog, index) => (
        <Col xxl={4} xl={6} lg={4} sm={6} key={index}>
          <Card className='grid-cards'>
            <CardHeader className='p-0 border-0'>
              <RatioImage className='img-fluid' src={`${ImagePath}/blog/grid-${index+1}.jpg`} alt='' />
            </CardHeader>
            <CardBody>
              <div className='d-flex gap-2 align-items-center'>
                <div className='flex-shrink-0'>
                  <Image height={40} width={40} priority className='img-fluid' src={`${ImagePath}/blog/about/${index+1}.png`} alt='avatar' />
                </div>
                <div className='flex-grow-1'>
                  <h6>{blog.author}</h6>
                  <p className='mb-0'>{blog.date}</p>
                </div>
                <i className='fa fa-ellipsis-v'></i>
              </div>
              <h5>{blog.title}</h5>
              <p>
                {blog.description}
                <Link className='font-danger mx-1' href={Href}>Read more...</Link>
              </p>
              <ul className='d-flex gap-3 justify-content-between'>
                <li>{blog.views}k views</li>
                <li className={`${liked[index] ? "clicked-color" : ""} blog-like`} onClick={() => toggleLike(index)}>
                  <SVG iconId="blog-heart" />
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BlogGridDetail;