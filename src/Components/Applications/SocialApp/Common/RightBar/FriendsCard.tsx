import { Friends, ImagePath } from "@/Constant";
import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import HeaderWithIcon from "../HeaderWithIcon";
import { FriendsImages } from "@/Data/SocialApp";
import RatioImage from "@/CommonComponents/RatioImage";
import Image from "next/image";

const FriendsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Friends} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Collapse isOpen={isOpen}>
        <CardBody className="avatar-showcase filter-cards-view">
          {FriendsImages?.map((data, index) => (
            <div className="d-inline-block friend-pic" key={index}>
              <Image height={50} width={50} priority className="rounded-circle" src={`${ImagePath}/user/${data}`} alt="images"/>
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default FriendsCard;
