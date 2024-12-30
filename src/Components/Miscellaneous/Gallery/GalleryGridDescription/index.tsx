"use client";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { GalleryGridWithDescriptionCap } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import DescriptionMyGallery from "./DescriptionMyGallery";

const GalleryGridDescriptionContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeader title={GalleryGridWithDescriptionCap} />
            <CardBody className='my-gallery gallery-with-description'>
              <Row>
                <DescriptionMyGallery />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryGridDescriptionContainer;
