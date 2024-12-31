import { FeaturedTutorial, ImagePath } from "@/Constant";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { FeaturesData } from "@/Data/Miscellaneous/Faq";

const FeaturesTutorial = () => {
  return (
    <Col lg={12}>
      <div className="header-faq">
        <h4 className="mb-0 f-w-600">{FeaturedTutorial}</h4>
      </div>
      <Row>
        {FeaturesData?.map((item, index) => (
          <Col xl={3} sm={6} className="xl-50 box-col-3" key={index}>
            <Card className="features-faq product-box">
              <div className="faq-image product-img">
                <div className="knowledgebase-image">
                  <img alt="feature" className="img-fluid" src={`${ImagePath}/faq/${index+1}.jpg`} />
                </div>
                <div className="product-hover">
                  <ul>
                    <li><i className="icon-link"></i></li>
                    <li><i className="icon-import"></i></li>
                  </ul>
                </div>
              </div>
              <CardBody>
                <h4 className="f-w-500">{item.title}</h4>
                <p>{item.short_description}</p>
              </CardBody>
              <CardFooter className="d-flex align-items-center justify-content-between">
                <span>{item.date}</span>
                <Rating fillColor="var(--theme-default)" initialValue={Math.random() * 5} size={14} />
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default FeaturesTutorial;
