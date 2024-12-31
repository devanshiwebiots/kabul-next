import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LatestNewsAndTrends } from "@/Constant";
import { NewsData } from "@/Data/Miscellaneous/Blog";
import { Routes } from "@/Utils/Routes";
import Link from "next/link";
import { Card, CardBody, Col, Row } from "reactstrap";

const LatestNews = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={LatestNewsAndTrends} />
        <CardBody>
          <Row className='gy-3'>
            {NewsData?.map((news, index) => (
              <Col xxl={6} xl={12} md={6} key={index}>
                <div className='blog-card'>
                  <h4>{news.title}</h4>
                  <p>{news.description}</p>
                  <div className='post-social'>
                    <ul className='d-flex align-items-center'>
                      <li className='bg-light-primary txt-primary'>{news.date}</li>
                      <li className='bg-light-secondary txt-secondary'>
                        <i className='fa fa-user mx-1'></i>
                        Admin
                      </li>
                      <li className='bg-light-success txt-success'>
                        <i className='fa fa-comments mx-1'></i>
                        {news.comments} Comments
                      </li>
                    </ul>
                  </div>
                  <Link className='btn' href={Routes.Blog.BlogDetails}>
                    View more<i className='fa fa-long-arrow-right'></i>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestNews;
