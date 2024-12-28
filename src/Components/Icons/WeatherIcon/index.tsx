"use client";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WeatherIconsWithAnimations } from "@/Constant";
import { WeatherIconList } from "@/Data/Icons";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const WeatherIconContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeader title={WeatherIconsWithAnimations} />
            <CardBody>
              <Row className="icon-lists whether-icon">
                {WeatherIconList?.map((icon, i) => (
                  <Col lg={2} xs={3} key={i}>
                    {icon.icon}
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherIconContainer;
