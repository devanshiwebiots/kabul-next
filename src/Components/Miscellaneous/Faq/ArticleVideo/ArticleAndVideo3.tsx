import { ArticleAndVideoThird } from "@/Data/Miscellaneous/Faq";
import { Youtube } from "react-feather";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticleAndVideo3 = () => {
  return (
    <Col xl={4}>
      <Row className="latest-articles">
        {ArticleAndVideoThird?.map((item, i) => (
          <Col xl={12} md={item.md} key={i}>
            <Card>
              <CardBody>
                <div className="d-flex articles-icons">
                  <Youtube className="m-r-30" />
                  <div className="flex-grow-1">
                    <h5 className="f-w-600">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ArticleAndVideo3;
