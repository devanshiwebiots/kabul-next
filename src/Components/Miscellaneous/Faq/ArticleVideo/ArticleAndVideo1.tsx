import { ArticleAndVideoOne } from "@/Data/Miscellaneous/Faq";
import { Codepen } from "react-feather";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticleAndVideo1 = () => {
  return (
    <Col xl={4} md={6}>
      <Row className="latest-articles">
        {ArticleAndVideoOne?.map((item, index) => (
          <Col sm={12} key={index}>
            <Card>
              <CardBody>
                <div className="d-flex articles-icons">
                  <Codepen className="m-r-30" />
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

export default ArticleAndVideo1;