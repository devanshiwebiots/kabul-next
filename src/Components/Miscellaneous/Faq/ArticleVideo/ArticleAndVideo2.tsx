import { ArticleAndVideoTwo } from "@/Data/Miscellaneous/Faq";
import { FileText } from "react-feather";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticleAndVideo2 = () => {
  return (
    <Col xl={4} md={6}>
      <Row className="latest-articles">
        {ArticleAndVideoTwo?.map((item, i) => (
          <Col sm={12} key={i}>
            <Card>
              <CardBody>
                <div className="d-flex articles-icons">
                  <FileText className="m-r-30" />
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

export default ArticleAndVideo2;
