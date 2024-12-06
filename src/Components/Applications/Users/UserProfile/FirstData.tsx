import { Href, ImagePath } from "@/Constant";
import { ProfileData } from "@/Data/Users";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col } from "reactstrap";
import UserFooter from "./Common/UserFooter";
import UserHeader from "./Common/UserHeader";
import Link from "next/link";

const FirstData = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className='profile-img-style'>
          <UserHeader />
          <hr />
          <p>{ProfileData}</p>
          <div className='img-container'>
            <div className='my-gallery w-100' id='aniimated-thumbnials' itemScope>
              <Gallery withCaption>
                <figure className='m-0'>
                  <Item original={`${ImagePath}/other-images/profile-style-img3.png`} width='1600' height='800' caption='Image Caption 1'>
                    {({ ref, open }) => (
                      <Link href={Href} onClick={open}>
                        <img className='img-fluid rounded' ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/other-images/profile-style-img3.png`} alt='image' />
                      </Link>
                    )}
                  </Item>
                </figure>
              </Gallery>
            </div>
          </div>
          <UserFooter />
        </div>
      </Card>
    </Col>
  );
};

export default FirstData;
