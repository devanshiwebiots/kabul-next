import { Href, ImagePath } from "@/Constant";
import Link from "next/link";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col, Row } from "reactstrap";
import UserFooter from "./Common/UserFooter";
import UserHeader from "./Common/UserHeader";

const SecondData = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className='profile-img-style'>
          <UserHeader />
          <hr />
          <p>Engage your senses: Explore nature with all your senses. Listen to the sounds of birds chirping or leaves rustling in the wind. Feel the texture of tree bark or the sensation of cool water on your skin. Observe the colors, shapes, and patterns in the environment.Participate in outdoor activities: Take part in activities that allow you to interact with nature actively.</p>
          <Row className='mb-4 pictures my-gallery'>
            <Gallery withCaption>
              <Row className='mt-4 pictures my-gallery'>
                {[...Array(2)].map((_,i) => (
                  <figure className='col-sm-6 m-0' key={i}>
                    <Item original={`${ImagePath}/other-images/profile-style-img.png`} width='1600' height='800' caption='Image Caption 1'>
                      {({ ref, open }) => (
                        <Link href={Href} onClick={open}>
                          <img className='img-fluid rounded' ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/other-images/profile-style-img.png`} alt='image' />
                        </Link>
                      )}
                    </Item>
                  </figure>
                ))}
              </Row>
            </Gallery>
          </Row>
          <UserFooter />
        </div>
      </Card>
    </Col>
  );
};

export default SecondData;
