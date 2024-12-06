import { Href, ImagePath } from "@/Constant";
import { ProfileData1, UserImages } from "@/Data/Users";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col, Row } from "reactstrap";
import UserFooter from "./Common/UserFooter";
import UserHeader from "./Common/UserHeader";
import Link from "next/link";

const SecondData = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className='profile-img-style'>
          <UserHeader />
          <hr />
          <p>{ProfileData1}</p>
          <Row className='mb-4 pictures my-gallery'>
            <Gallery withCaption>
              <Row className='mt-4 pictures my-gallery'>
                {UserImages.map((item) => (
                  <figure className='col-sm-6 m-0' key={item}>
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
