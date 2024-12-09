import SVG from "@/CommonComponents/SVG";
import { Followers, Following, ImagePath, Posts } from "@/Constant";
import { SocialUserCardData } from "@/Data/SocialApp";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import SocialMediaIcons from "../Common/SocialMediaIcons";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/Utils/Routes";

const AllCards = () => {
  return (
    <Fragment>
      {SocialUserCardData?.map((item,i) => (
        <Col sm={6} xxl={3} lg={4} xl={4} className="col-ed-4 box-col-4" key={i}>
          <Card className="social-profile">
            <CardBody>
              <div className="social-img-wrap">
                <div className="social-img">
                  <Image height={68} width={68} priority className="img-fluid" src={`${ImagePath}/${item.avatar}`} alt="user" />
                </div>
                <div className="edit-icon">
                  <SVG iconId="profile-check" />
                </div>
              </div>
              <div className="social-details">
                <h5 className="mb-1"><Link href={Routes.SocialApp}>{item.name}</Link></h5>
                <span className="f-light">{item.email}</span>
                <SocialMediaIcons />
                <ul className="social-follow">
                  <li>
                    <h5 className="mb-0">{item.totalPost}</h5>
                    <span className="f-light">{Posts}</span>
                  </li>
                  <li>
                    <h5 className="mb-0">{item.follower}</h5>
                    <span className="f-light">{Followers}</span>
                  </li>
                  <li>
                    <h5 className="mb-0">{item.following}</h5>
                    <span className="f-light">{Following}</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default AllCards;
