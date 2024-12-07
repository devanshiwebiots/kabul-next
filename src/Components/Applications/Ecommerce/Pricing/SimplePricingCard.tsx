import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Href, Purchase, SimplePricingCards } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SimplePricingData } from "@/Data/Ecommerce";

const SimplePricingCard = () => {
  return (
    <Card>
      <CommonCardHeader title={SimplePricingCards} />
      <CardBody className="pricing-content">
        <Row className="g-sm-4 g-3">
          {SimplePricingData?.map((item, index) => (
            <Col lg={3} sm={6} className="box-col-3" key={index}>
              <Card className="text-center pricing-simple">
                <CardBody>
                  <h4>{item.title}</h4>
                  <h5>${item.price}</h5>
                  <h6 className="mb-0">{item.title} Plan</h6>
                </CardBody>
                <div>
                  <Button className="btn-block" tag="a" color="primary" size="lg" href={Href}>{Purchase}</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default SimplePricingCard;
